let movies;
 fetch("data/moovies.json") 
  .then(response => response.json()) 
  .then(data => { 
    movies = data
    movies.forEach(movie => {
        if(movie.Released == undefined){
            movie.Released = "";
        }
        let div = document.createElement('div');
           div.classList.add('myLi'); 
            div.textContent = `${movie.Title} - ${movie.Year} - ${movie.Released} - ${movie.Genre}`
        let block = document.querySelector('.block');
        block.appendChild(div)
    });

    

    console.log(movies);
  }); 

 