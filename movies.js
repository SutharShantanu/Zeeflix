// js for caousel
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/app_cover/1170x658withlogod0c780b75d654d0287fe192a1b8dd3fe.jpg", "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/app_cover/1170x658withlogoc60ad68846fd4472948902dbb26b5f06.jpg", "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/app_cover/1170x658withlogo178e7aba6e5a48309b3671c8fcc4e3bc.jpg", "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5258273/app_cover/1170x658withlogoe15a96c2710844bf885da8a1df0600e2.jpg", "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/app_cover/1170x658withlogobe7fc583fdcf431f8e8f8cb855d881b6.jpg"]
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

        let title=document.createElement("p")
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

        let title=document.createElement("p")
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

        let title=document.createElement("p")
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

        let title=document.createElement("p")
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



