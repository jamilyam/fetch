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
function renderGiphy (giphy) {
  const img = document.createElement('IMG')
  img.src = giphy.images.downsized.url
	document.body.appendChild(img);
}
// let input = document.querySelector('.form-value').value;
const url = 'https://api.giphy.com/v1/gifs/search?'
  + 'api_key=8LdGa2ISJu7ESNs7gXyxTAtsGojbbz4v'
  + '&q=tom and jerry'
  + '&limit=5'
  + '&offset=0'
  + '&rating=G'
  + '&lang=en';

fetch(url)
  .then(res => res.json())
  .then(({ data }) => data.map(renderGiphy));
