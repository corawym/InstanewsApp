$(document).ready(function(){
  // Select a section function
  $('#sections').on('change', function() {
    var sectionName = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/';
        url += sectionName;
        url += '.json';
        url += '?' + $.param({'api-key': 'ca8f3034cfb64fe8acb5a2a193f4c8c3'
                });
    // use Ajax to get data from the NYT Top Stories API
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(result) {
      // get the abstract, url and photo of a story
      $.each(result.results, function( key, value ){
        var storyAbstract = value.abstract;
        var storyUrl = value.short_url;
        var storyPhoto = value.multimedia[4].url;
      });
    }).fail(function(err) {
      throw err;
    });

  }); //end of select a section function


});
