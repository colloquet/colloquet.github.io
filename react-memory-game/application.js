// Initialize Firebase
var config = {
  apiKey: "AIzaSyAaawSJPMfOmfNl3_IvG-7RvJBOrx29Q1U",
  authDomain: "burning-fire-4995.firebaseapp.com",
  databaseURL: "https://burning-fire-4995.firebaseio.com",
  storageBucket: "burning-fire-4995.appspot.com",
};
firebase.initializeApp(config);

function Score(props, context) {
  return (
    <li><span className="uk-text-truncate">{props.score.name}</span><strong className="uk-float-right">{props.score.score}</strong></li>
  );
};

function LeaderBoard(props, context) {
  var reversedScores = _.orderBy(props.scores, ['score'], ['desc']);
  var scores = reversedScores.map(function(score) {
    return <Score score={score} />;
  });

  var noScore = <p>No scores yet</p>;
  var loading = <p>fetching scores...</p>;

  return (
    <div className="uk-width-medium-1-3 uk-grid-margin">
      <div className="uk-panel uk-panel-header">
        <h3 className="uk-panel-title">Leaderboard</h3>
        {props.isScoreBoardLoaded? null : loading}
        {(scores.length == 0 && props.isScoreBoardLoaded)? noScore : null}
        <ul className="uk-list">
          {scores}
        </ul>
      </div>
    </div>
  );
};

function GameTile(props, context) {
  var tileStyle = {
    backgroundImage: 'url(https://source.unsplash.com/random/300x30' + props.tile.number + ')'
  };
  var tileClassName = props.tile.matched? "tile flipped isMatched" : props.tile.flipped? "tile flipped" : "tile";
  var gridClassName = "uk-width-1-" + Math.sqrt(props.numberOfPair*2);

  return (
    <div className={gridClassName}>
      <div className={tileClassName} onClick={props.toggleTile.bind(null, props.tile)}>
        <div className="front"></div>
        <div className="back uk-flex uk-flex-center uk-flex-middle uk-cover-background" style={tileStyle}>
          <h1 className="uk-margin-remove">{props.tile.number}</h1>
        </div>
      </div>
    </div>
  );
}

function GameBoard(props, context) {
  var tiles;

  if (props.tiles.length > 0) {
    tiles = props.tiles.map(function(tile) {
      return <GameTile tile={tile} key={tile.id} toggleTile={props.toggleTile} numberOfPair={props.numberOfPair} />;
    });
  }


  return (
    <div className="uk-width-medium-2-3 uk-grid-margin">
      <div className="uk-panel uk-panel-header">
        <h3 className="uk-panel-title">React memory game</h3>
        <div className="uk-grid">
          <div className="uk-width-1-2">
            <p>Matched: <strong>{props.numberOfMatched}</strong></p>
          </div>
          <div className="uk-width-1-2">
            <p>Number of tries: <strong>{props.numberOfTries}</strong></p>
          </div>
        </div>
        <div className="uk-grid uk-grid-collapse">
          {tiles}
        </div>
      </div>
    </div>
  );
};

function GameContainer(props, context) {
  return (
    <div className="game-container">
      <div className="uk-grid uk-grid-divider">
        <GameBoard
          tiles={props.tiles}
          toggleTile={props.toggleTile}
          numberOfPair={props.numberOfPair}
          numberOfMatched={props.numberOfMatched}
          numberOfTries={props.numberOfTries}
        />
      <LeaderBoard
        scores={props.scores}
        isScoreBoardLoaded={props.isScoreBoardLoaded}
      />
      </div>
    </div>
  );
};

var MemoryGame = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      showModal: false,
      tiles: [],
      numberOfPair: 8,
      matchingArray: [],
      numberOfMatched: 0,
      numberOfTries: 0,
      isGameFinished: false,
      playerName: "",
      scores: [],
      isScoreBoardLoaded: false,
    };
  },

  componentWillMount: function() {
    var self = this;
    var ref = firebase.database().ref("scores");
    ref.on('value', function() {
      self.setState({
        isScoreBoardLoaded: true
      });
    });
    this.bindAsArray(ref.orderByChild("score").limitToLast(10), "scores");

    this.generateTiles();
  },

  generateTiles: function() {
    var tiles = [];

    // generate an array of tiles objects
    for (var i = 0; i < this.state.numberOfPair; i++) {
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
    this.state.tiles = tiles.sort(function() {
      return 0.5 - Math.random();
    });

    this.setState({
      tiles: this.state.tiles
    });
  },

  toggleTile: function(tile) {
    // there should be no more than 2 tiles when we compare
    if (this.state.matchingArray.length >= 2) {
      return;
    }

    // do nothing if user click on same tile twice
    if (this.state.matchingArray[0] == tile) {
      return;
    }

    // return if tile is already matched
    if (tile.matched) {
      return;
    }

    var index = this.state.tiles.indexOf(tile);
    this.state.tiles[index].flipped = !this.state.tiles[index].flipped;
    this.setState({
      tiles: this.state.tiles
    });

    this.state.matchingArray.push(tile);
    this.checkMatch();
  },

  checkMatch: function() {
    var self = this;
    // return if there are less than 2 tiles in array, theres nothing to compare
    if (self.state.matchingArray.length < 2) {
      return;
    }

    var index0 = self.state.tiles.indexOf(self.state.matchingArray[0]);
    var index1 = self.state.tiles.indexOf(self.state.matchingArray[1]);

    self.setState({
      numberOfTries: self.state.numberOfTries + 1
    });

    // if both number matched, increase score and reset matchingArray
    if (self.state.matchingArray[0].number == self.state.matchingArray[1].number) {
      var newNumberOfMatched = self.state.numberOfMatched + 1
      self.state.tiles[index0].matched = true;
      self.state.tiles[index1].matched = true;

      self.setState({
        matchingArray: [],
        tiles: self.state.tiles,
        numberOfMatched: newNumberOfMatched
      });
    } else {
      // else, flip the tiles back and reset the matchingArray
      setTimeout(function() {
        self.state.tiles[index0].flipped = false;
        self.state.tiles[index1].flipped = false;

        self.setState({
          matchingArray: [],
          tiles: self.state.tiles
        });
      }, 500);
    }

    this.checkIsGameFinished(newNumberOfMatched);
  },

  checkIsGameFinished: function(numberOfMatched) {
    this.setState({
      isGameFinished: numberOfMatched == this.state.numberOfPair
    });
  },

  resetBoard: function(e) {
    e.preventDefault();

    var self = this;

    if (!self.state.isGameFinished) {
      return;
    }

    if (this.state.playerName !== "") {
      this.firebaseRefs.scores.push({
        name: this.state.playerName,
        score: this.getComputedScore()
      });
    }

    self.state.tiles.forEach(function(tile) {
      tile.flipped = false;
      tile.matched = false;
    });

    self.setState({
      tiles: self.state.tiles,
      isGameFinished: false
    });

    setTimeout(function() {
      self.setState({
        tiles: [],
        matchingArray: [],
        numberOfMatched: 0,
        numberOfTries: 0
      });

      self.generateTiles();
    }, 500);
  },

  onNameChange: function(e) {
    this.setState({playerName: e.target.value});
  },

  getComputedScore: function() {
    var self = this;
    return Math.round((self.state.numberOfMatched / self.state.numberOfTries) * 100);
  },

  render: function() {
    var computedScore = this.getComputedScore();
    return (
      <div className="uk-container uk-container-center uk-margin-large-bottom">
        {this.state.scoreBoard}
        <GameContainer
          tiles={this.state.tiles}
          toggleTile={this.toggleTile}
          numberOfPair={this.state.numberOfPair}
          numberOfMatched={this.state.numberOfMatched}
          numberOfTries={this.state.numberOfTries}
          isScoreBoardLoaded={this.state.isScoreBoardLoaded}
          scores={this.state.scores}
        />
      { this.state.isGameFinished? <Modal resetBoard={this.resetBoard} playerName={this.state.playerName} onNameChange={this.onNameChange} computedScore={computedScore} /> : null }
      </div>
    );
  }
});

var Modal = React.createClass({
  componentDidMount: function(){
    ReactDOM.findDOMNode(this.refs.nameInput).focus();
  },

  render: function() {
    return (
      <div className="uk-text-center modal-mask">
        <div className="modal-wrapper">
          <div className="modal-container">
            <h3>Finished! Your score is <strong>{this.props.computedScore}</strong>!</h3>
            <form className="uk-form" onSubmit={this.props.resetBoard}>
              <input id="name" type="text" placeholder="your name" ref="nameInput" value={this.props.playerName} onChange={this.props.onNameChange} />
              <p className="uk-margin-bottom-remove"><button type="submit" className="uk-button uk-button-primary">Submit and play again</button></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <MemoryGame />,
  document.getElementById('app')
);

// initial FastClick to remove touch latency
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
