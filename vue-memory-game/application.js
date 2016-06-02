var scoreBoardRef = new Firebase('https://burning-fire-4995.firebaseio.com/');

// when leadboard loaded from Firebase, we change the flag to true
scoreBoardRef.on('value', function(snapshot) {
  vm.$set('isScoreBoardLoaded', true);
});

var vm = new Vue({
  el: 'body', // initialize Vue.js on body
  data: {
    numberOfPair: 8, // size of the board
    score: 0,
    numberOfTries: 0,
    tiles: [],
    matchingArray: [], // to match 2 tiles later
    playerName: "",
    isScoreBoardLoaded: false, // to show loading status of scoreboard
    showModal: false // determine if we should show modal
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
    }
  },
  methods: {
    resetBoard: function() {
      var self = this;

      // if user didn't type anything, don't push to Firebase
      if (self.playerName !== "") {
        self.$firebaseRefs.scoreBoard.push({
          name: self.playerName,
          score: self.score * 1 // make sure it's an interger not string
        });
      }

      // flip all cards before we reset the state
      self.tiles.forEach(function(tile) {
        tile.flipped = false;
        tile.matched = false;
      });

      // reset state after 500ms
      setTimeout(function() {
        self.score = 0;
        self.numberOfTries = 0;
        self.tiles = [];
        self.matchingArray = [];
        self.playerName = "";
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
      // there should be no more than 2 tiles when we compare
      if (this.matchingArray.length >= 2) {
        return;
      }

      // flip the tile again and reset the matchingArray if user click on same tile twice
      if (this.matchingArray[0] == tile) {
        tile.flipped = !tile.flipped;
        this.matchingArray = [];
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
        self.score++;
        self.matchingArray = [];
      } else {
        // else, flip the tiles back and reset the matchingArray
        setTimeout(function() {
          self.matchingArray[0].flipped = false;
          self.matchingArray[1].flipped = false;
          self.matchingArray = [];
        }, 500);
      }

    }
  },
  watch: {
    // if game is over, show modal
    'isGameFinished': function (val, oldVal) {
      this.showModal = val;
    }
  },
  ready: function() {
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
