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


function onSearch() {
    let input = getElementById('form-value').value;


request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q&api_key=DN35CTOvDRXCi1IOVuVsOdRlBXwoFZLU'+input, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("here_is_gif").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

  request.send();
}  