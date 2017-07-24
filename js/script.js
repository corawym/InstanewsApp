$(document).ready(function(){

  // Select a section function
  $('#sections').on('change', function() {

    //  change the size of header
    $('.site-header').addClass('site-header-small');

    // remove the previous select option
    $('.story-list-item').remove();
    $('.site-footer').hide();
    $('.loader').show();

    // use Ajax to get data from the NYT Top Stories API
    var sectionName = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/';
        url += sectionName;
        url += '.json';
        url += '?' + $.param({'api-key': 'ca8f3034cfb64fe8acb5a2a193f4c8c3'
                });

    $.ajax({
      // url: url,
      method: 'GET'
    }).done(function(result) {
      var allTwelveStoriesWithImages = [];
      $.each(result.results, function( key, value ){
        // only get a story if it has a photo and get maximum of 12 stories in an array
        if (value.multimedia.length>0 && allTwelveStoriesWithImages.length<12){
          allTwelveStoriesWithImages.push(value);
        }
      }); // end of each function
      // display the stories in grid
      if (allTwelveStoriesWithImages.length>0){
        $.each(allTwelveStoriesWithImages, function( key, value ){
          // get the abstract, url and photo of a story
          var storyAbstract = value.abstract;
          var storyUrl = value.url;
          var storyPhoto = value.multimedia[4].url;
          
          var style = "background-image:url('" + storyPhoto + "')";
          var storyListItem = '<li class="story-list-item"><a href="' + storyUrl + '" target="_blank">';
              storyListItem += '<div class="story-list-bgphoto" style="' + style + '"><p class="story-list-text">';
              storyListItem += storyAbstract;
              storyListItem += '</p></div></a></li>';
          
          $('.story-list').append(storyListItem);
        }); // end of each function
      }else{
        
        $('.story-list').append('<li><p class="error-msg">Sorry, no stories are updated.</p></li>');
      }

    }).fail(function(err) {
      $('.loader').hide();
      $('.story-list').append('<li><p class="error-msg">Internal Server Error</p></li>');
      $('.site-footer').show(); 
      throw err;
    }).always(function(){
       $('.loader').hide();
       $('.site-footer').show();  
    }); // end of always function

  }); // end of on change function

}); // end of document ready function

