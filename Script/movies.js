// js for caousel
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["Image/Movie_slide_img/movie_img1.webp", "Image/Movie_slide_img/movie_img2.webp", "Image/Movie_slide_img/movie_img3.webp", "Image/Movie_slide_img/movie_img4.webp", "Image/Movie_slide_img/movie_img6.webp", "Image/Movie_slide_img/movie_img7.webp", "Image/Movie_slide_img/movie_img8.webp"]
let i = 0;
next.addEventListener("click", function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})
prev.addEventListener("click", function () {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById("image").src = arr[i];
})
function slides() {

    document.getElementById("image").src = arr[i];
    if (i < arr.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}
setInterval(slides, 3000);





let bag = [];
// var i=0;
// let caraouselImage=[]
fetch("https://6399a21316b0fdad7743a496.mockapi.io/movies")
    .then((res) => res.json())
    .then((data) => {
        bag = data
        console.log(data)
        handleZee5Movies(data)
        handleLatestMovies(data)
        handleHollywoodMovie(data)
        handleHindiMovie(data)

    })


function handleZee5Movies(data) {

    let filteredMovies = data.filter(function (elem) {
        return elem.category == "Zee5"
    })
    console.log(filteredMovies)
    Zee5Movies(filteredMovies)

}

function handleLatestMovies(data) {
    let filteredMovies = data.filter(function (elem) {
        return elem.category == "latest"
    })
    latestMovieDisplay(filteredMovies)
}

function handleHollywoodMovie(data) {
    let filteredMovies = data.filter(function (elem) {
        return elem.category == "hollywood"
    })
    hollywoodMovieDisplay(filteredMovies)
}
function handleHindiMovie(data) {
    let filteredMovies = data.filter(function (elem) {
        return elem.category == "hindi"
    })
    hindiMovieDisplay(filteredMovies)
}


function Zee5Movies(filteredMovies) {
    document.querySelector("#movies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)

        let title=document.createElement("h3")
        title.innerText="Title : "+element.title

        let Duration=document.createElement("p")
        Duration.innerHTML="Length : "+element.runtime+" Min"

        let rating=document.createElement("p")
        rating.innerText="Rating : "+element.rating+"⭐"

        let watchBtn=document.createElement("button")
        watchBtn.innerText="Watch"

        watchBtn.addEventListener("click",()=>{

            window.location.href="movieOpen.html"

        })
        div.append(img,title,Duration,rating,watchBtn)
        document.querySelector("#movies").append(div)
    })
}

function latestMovieDisplay(filteredMovies) {
    document.querySelector("#latestMovies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)

        let title=document.createElement("h3")
        title.innerText="Title :"+element.title

        let Duration=document.createElement("p")
        Duration.innerHTML="Length :"+element.runtime+" Min"

        let rating=document.createElement("p")
        rating.innerText="Rating :"+element.rating+"⭐"

        let watchBtn=document.createElement("button")
        watchBtn.innerText="Watch";

        watchBtn.addEventListener("click",()=>{

            window.location.href="movieOpen.html"

        })

        div.append(img,title,Duration,rating,watchBtn)

        document.querySelector("#latestMovies").append(div)
    })

}

function hollywoodMovieDisplay(filteredMovies) {
    document.querySelector("#hollywoodMovies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)

        let title=document.createElement("h3")
        title.innerText="Title :"+element.title

        let Duration=document.createElement("p")
        Duration.innerHTML="Length :"+element.runtime+" Min"

        let rating=document.createElement("p")
        rating.innerText="Rating :"+element.rating+"⭐"

        let watchBtn=document.createElement("button")
        watchBtn.innerText="Watch";

        watchBtn.addEventListener("click",()=>{

            window.location.href="movieOpen.html"

        })

        div.append(img,title,Duration,rating,watchBtn)
        document.querySelector("#hollywoodMovies").append(div)
    })

}

function hindiMovieDisplay(filteredMovies) {
    document.querySelector("#hindiMovies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)

        let title=document.createElement("h3")
        title.innerText="Title :"+element.title

        let Duration=document.createElement("p")
        Duration.innerHTML="Length :"+element.runtime+" Min"

        let rating=document.createElement("p")
        rating.innerText="Rating :"+element.rating+"⭐"

        let watchBtn=document.createElement("button")
        watchBtn.innerText="Watch";

        watchBtn.addEventListener("click",()=>{

            window.location.href="movieOpen.html"
        })

        div.append(img,title,Duration,rating,watchBtn)

        document.querySelector("#hindiMovies").append(div)
    })

}



