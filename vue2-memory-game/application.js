// Initialize Firebase
var config = {
  apiKey: "AIzaSyAF3xxDmXjpPDrcvBj4qz58XvDywiYj26U",
  authDomain: "memory-game-d041f.firebaseapp.com",
  databaseURL: "https://memory-game-d041f.firebaseio.com",
  storageBucket: "",
};
var memoryGame = firebase.initializeApp(config);
var scoreBoardRef = memoryGame.database().ref('/scores');

// when leadboard loaded from Firebase, we change the flag to true
scoreBoardRef.on('value', function(snapshot) {
  Vue.set(vm, 'isScoreBoardLoaded', true);
});

// initialize Vue.js
var vm = new Vue({
  el: '#app', // initialize Vue.js on body
  data: {
    numberOfPair: 8, // size of the board (must be square number, duh!)
    numberOfMatched: 0,
    numberOfTries: 0,
    tiles: [],
    matchingArray: [], // to match 2 tiles later
    playerName: "",
    isScoreBoardLoaded: false, // to show loading status of scoreboard
    timeInSec: 0, // keep track of time spent
    gameStarted: false,
    timer: null
  },
  firebase: {
    // get leaderboard from Firebase
    scoreBoard: scoreBoardRef.limitToLast(10)
  },
  computed: {
    isGameFinished: function() {
      // if all tiles is matched, game is over
      return this.tiles.every(function(tile) {
        return tile.matched;
      });
    },
    computedScore: function() {
      return Math.round((this.numberOfMatched / this.numberOfTries) * 100); // this equation determine final score
    },
    sortedScoreBoard: function() {
      return this.scoreBoard.sort(function(a, b){
        // if same score, we rank player with less time higher
        if (a.score == b.score) {
          return (b.time < a.time) ? 1 : (b.time > a.time) ? -1 : 0;
        }

        return (b.score > a.score) ? 1 : (b.score < a.score) ? -1 : 0;
      });
    },
    computedTileClass: function() {
      return 'uk-width-1-' + Math.sqrt(this.numberOfPair*2);
    },
    computedTime: function() {
      // convert seconds to mm:ss format
      var minutes = parseInt( this.timeInSec / 60 ) % 60;
      var seconds = this.timeInSec % 60;

      return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
    }
  },
  methods: {
    resetBoard: function() {
      var self = this;

      if (!self.isGameFinished) {
        return;
      }

      // if user didn't type anything, don't push to Firebase
      if (self.playerName !== "") {
        self.$firebaseRefs.scoreBoard.push({
          name: self.playerName,
          score: self.computedScore, // make sure it's an interger not string
          time: self.timeInSec
        });
      }

      // flip all cards before we reset the state
      self.tiles.forEach(function(tile) {
        tile.flipped = false;
        tile.matched = false;
      });

      // reset state after 500ms (wait till all tiles flipped back)
      setTimeout(function() {
        self.numberOfMatched = 0;
        self.numberOfTries = 0;
        self.tiles = [];
        self.matchingArray = [];
        self.playerName = "";
        self.resetTimer();
        self.generateTiles();
      }, 500);
    },
    generateTiles: function() {
      var tiles = [];

      // generate an array of tiles objects
      for (var i = 0; i < this.numberOfPair; i++) {
        var tile = {
          number: i,
          flipped: false,
          matched: false
        };

        tiles.push(tile);
      }

      // double the tiles by concating itself
      tiles = tiles.concat(tiles);

      // assign an unique ID for each tile
      tiles = tiles.map(function(tile, index) {
        return {
          id: index,
          number: tile.number,
          flipped: tile.flipped,
          matched: tile.matched
        };
      });

      // shuffle the tiles and assign to our tiles array
      this.tiles = tiles.sort(function() {
        return 0.5 - Math.random();
      });
    },
    toggleTile: function(tile) {
      if (!this.gameStarted) {
        this.gameStarted = true;
        this.startTimer();
      }

      // there should be no more than 2 tiles when we compare
      if (this.matchingArray.length >= 2) {
        return;
      }

      // do nothing if user click on same tile twice
      if (this.matchingArray[0] == tile) {
        return;
      }

      // return if tile is already matched
      if (tile.matched) {
        return;
      }

      // flip the tile
      tile.flipped = !tile.flipped;

      // push to matchingArray to start comparing
      this.matchingArray.push(tile);
      this.checkMatch();
    },
    checkMatch: function() {
      var self = this;

      // return if there are less than 2 tiles in array, theres nothing to compare
      if (self.matchingArray.length < 2) {
        return;
      }

      self.numberOfTries++;

      // if both number matched, increase score and reset matchingArray
      if (self.matchingArray[0].number == self.matchingArray[1].number) {
        self.matchingArray[0].matched = true;
        self.matchingArray[1].matched = true;
        self.numberOfMatched++;
        self.matchingArray = [];
      } else {
        // else, flip the tiles back and reset the matchingArray
        setTimeout(function() {
          self.matchingArray[0].flipped = false;
          self.matchingArray[1].flipped = false;
          self.matchingArray = [];
        }, 500);
      }

      self.$nextTick(function() {
        if (self.isGameFinished) {
          self.gameStarted = false;
          this.stopTimer();
        }
      });

    },
    startTimer: function() {
      var self = this;

      self.timer = setInterval(function() {
        self.timeInSec++;
      }, 1000);
    },
    stopTimer: function() {
      clearInterval(this.timer);
    },
    resetTimer: function() {
      this.timeInSec = 0;
    }
  },
  mounted: function() {
    // generate tiles on load
    this.generateTiles();
  }
});

// initial FastClick to remove touch latency
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
