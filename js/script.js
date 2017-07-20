$(document).ready(function(){
  // Built by LucyBot. www.lucybot.com
  var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
      url += '?' + $.param({
        'api-key': 'ca8f3034cfb64fe8acb5a2a193f4c8c3'
      });
  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });

});
