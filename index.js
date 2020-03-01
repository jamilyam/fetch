function getRequest() {
  fetch('http://46.101.146.101:8081/categories/')
  .then(response => response.json())
  .then(category => {
    let output = '';
   
    category.forEach(function(id) {
      output += `<li><p>${id.id}-${id.title} </p>
      <img src="${id.category_image_url}"></li>`; 
    });
    
    document.getElementById('result').innerHTML = output;
  })
}


$( document ).ready(function(){
      $('.search_button').on('click', function(){
        var userInput = $('#form-value').val().trim();
        userInput = userInput.replace(/ /g, "+");
        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=DN35CTOvDRXCi1IOVuVsOdRlBXwoFZLU';
        $.ajax({url: queryURL, method: 'GET'}).done(function(response){
          console.log(response.data);
          var giphyURL = response.data[0].images.fixed_height.url;
          console.log(giphyURL)
          $('#here_is_gif').attr('src', giphyURL);

        });
        $('#reset_button').on('click', function(){
          $('#here_is_gif').attr("src",'');
        })
        return false;
      })
      

    });
