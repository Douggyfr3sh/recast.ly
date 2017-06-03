class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      playerVideo: window.exampleVideoData[0]
    };
    //React Docs recommend to bind updatePlayer here:
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  updatePlayer(video) {
    console.log('got clicked');
    this.setState({playerVideo: video});
  }

  render() {
    return (<div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.playerVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} player={this.updatePlayer}/>
          {/*<VideoList {videos: this.state.videos, player: this.updatePlayer}/>*/}
        </div>
      </div>);

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
