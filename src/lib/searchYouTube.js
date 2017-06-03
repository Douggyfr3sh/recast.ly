var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function (data) {
      console.log('data', data);
      return callback(data.items);
    },
    error: function (e) {
      console.log('search error', e);
    }
  });
};

window.searchYouTube = searchYouTube;
