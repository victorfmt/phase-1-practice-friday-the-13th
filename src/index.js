//For each movie returned from `http://localhost:3000/movies` create an image and add it to the `movie-list` nav element.



fetch("http://localhost:3000/movies") 
    .then(response => response.json())
    .then(movies => movies.forEach(movie => createElement(movie)))

function createElement(movie) {
    const movieList = document.querySelector("#movie-list")
    const createImg = document.createElement("img")
    createImg.src = movie.image
    movieList.append(createImg)
    createImg.addEventListener("click", function(){
        document.querySelector("#detail-image").src = movie.image;
        document.querySelector("#title").textContent = movie.title;
        document.querySelector("#year-released").textContent = movie.release_year;
        document.querySelector("#description").textContent = movie.description;
        document.querySelector("#watched").textContent = movie.watched;
        const watchedElement = document.querySelector("#watched")
        watchedElement.addEventListener("click", () => {
            if(movie.watched === true){
                watchedElement.textContent = "Watched"
                movie.watched = false
            }else{
                watchedElement.textContent = "Unwatched"
                movie.watched = true
            }
     })
    })
        


    //const movieInfo = document.querySelector("#movie-info") 
    
}


//As soon as the page loads, we should see the details of the **first** movie in the dataset.

//When you click on each movie image in the top nav, you should populate the detail area with the `image`, 
//`title`, `release_year`, `description`, `watched`, and `blood_amount` for the movie that was clicked.