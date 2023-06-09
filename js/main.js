let movies;
 fetch("data/moovies.json") 
  .then(response => response.json()) 
  .then(data => { 
    movies = data
    movies.forEach(movie => {
        if(movie.Released == undefined){
            movie.Released = "";
        }
        let myImg = document.createElement('img');
        myImg.setAttribute('src',`${movie.Images}` )
        let div = document.createElement('div');
           div.classList.add('myLi'); 
            div.innerHTML = `<h3>${movie.Title}${movie.Year}</h3> <p>${movie.Released}  ${movie.Genre}</p>
            <p>${movie.Actors}</p><p>${movie.Country}</p><p>${movie.Director}</p>`
        let block = document.querySelector('.block');
        block.appendChild(div)
        div.prepend(myImg);
    });

    

    console.log(movies);
  }); 

 