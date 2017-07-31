$(() => {
  // jQuery Selectric
  $('select').selectric();

  // Select a section function
  $('#sections').on('change', (ev) => {
    let sectionName = $(ev.currentTarget).val();
    if (sectionName !== ''){
      //  change the size of header
      $('.site-header').addClass('site-header-small');
      $('.story-grid').show();
      // remove the previous select option
      $('body').removeClass('container-vh');
      $('.story-list-item').remove();
      $('.error-msg').remove();
      $('.site-footer').hide();
      $('.loader').show();

      let url = `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?${$.param({'api-key':'ca8f3034cfb64fe8acb5a2a193f4c8c3'})}`;
      // use Ajax to get data from the NYT Top Stories API
      $.ajax({
        url: url,
        method: 'GET'
      }).done((result) => {
        let allTwelveStoriesWithImages = [];
        $.each(result.results, (key, value) => {
          // only get a story if it has a photo and get maximum of 12 stories in an array
          if (value.multimedia.length>0 && allTwelveStoriesWithImages.length<12){
            allTwelveStoriesWithImages.push(value);
          }
        }); // end of each function
        // display the stories in grid
        if (allTwelveStoriesWithImages.length>0){
          $.each(allTwelveStoriesWithImages, (key, value) => {
            // get the abstract, url and photo of a story  
            let storyListItem = `<li class='story-list-item'>
            <a href='${value.url}' target='_blank'>
            <div class='story-list-bgphoto' style='background-image:url("${value.multimedia[4].url}")'>
            <p class='story-list-text'>${value.abstract}</p>
            </div></a></li>`;
            
            $('.story-list').append(storyListItem);
          }); // end of each function
        }else{
          $('body').addClass('container-vh');
          $('.story-list').append('<li class="error-msg"><p>Sorry, no stories are updated.</p></li>');
        }
      }).fail((err) => {
        $('.loader').hide();
        $('body').addClass('container-vh');
        $('.story-list').append('<li class="error-msg"><p>Internal Server Error</p></li>');
        $('.site-footer').show(); 
        throw err;
      }).always(() => {
        $('.loader').hide();
        $('.site-footer').show();  
      }); // end of ajax function
    } // end of sectionName is not empty
  }); // end of on change function
}); // end of document ready function

