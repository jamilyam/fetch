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
