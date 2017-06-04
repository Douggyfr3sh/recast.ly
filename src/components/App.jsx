var sampleData = [{
  etag: 'L332gQTY',
  id: {
    videoId: '000001'
  },
  snippet: {
    title: 'Cute cat video',
    description: 'The best cat video on the internet!',
    thumbnails: {
      default: {
        url: 'http://www.fndvisions.org/img/cutecat.jpg',
      }
    }
  }
}, {
  etag: 'SmEuSYxg',
  id: {
    videoId: '000002'
  },
  snippet: {
    title: 'Super cute cat video',
    description: 'Better than the best cat video on the internet!',
    thumbnails: {
      default: {
        url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg',
      }
    }
  }
}, {
  etag: 'ujBKBmLk',
  id: {
    videoId: '000003'
  },
  snippet: {
    title: 'Hack Reactor opens extension school on Mars',
    description: 'Watch the ribbon cutting of the first coding bootcamp in space',
    thumbnails: {
      default: {
        url: 'https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/14/hack_reactor.png',
      }
    }
  }
}, {
  etag: 'Nj7xszf8',
  id: {
    videoId: '000004'
  },
  snippet: {
    title: 'JavaScript Jamz',
    description: 'Rock on with JavaScript remixes of today\'s top songs',
    thumbnails: {
      default: {
        url: 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg',
      }
    }
  }
}, {
  etag: 'I2w-7nRI',
  id: {
    videoId: '000005'
  },
  snippet: {
    title: 'Framework fatigue and you',
    description: 'JS guru, @McKringleberry teaches tips and tricks for managing JS framework fatigue',
    thumbnails: {
      default: {
        url: 'https://facebook.github.io/react/img/logo.svg',
      }
    }
  }
}];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      playerVideo: {}
    };
    //React Docs recommend to bind updatePlayer here:
    this.updatePlayer = this.updatePlayer.bind(this);
    this.getYTVideos = _.debounce(this.getYTVideos, 500);
  }

  componentDidMount() {
    this.getYTVideos('dogs');
  }

  getYTVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({videos: videos, playerVideo: videos[0]} );
    });
  }

  updateAll(videos) {
    this.setState({videos: videos, playerVideo: videos[0]} );
  }

  updatePlayer(video) {
    console.log('searchYT', this.props.searchYT);
    this.setState({playerVideo: video});
  }

  render() {
    if (this.state.videos.length > 0) {
      return (<div>
          <Nav handleSearchInputChange={this.getYTVideos.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} player={this.updatePlayer}/>
          </div>
        </div>);
    } else {
      return (<div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video={sampleData[0]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={sampleData} player={this.updatePlayer}/>
          </div>
        </div>);
    }
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
