
let bag = [];
fetch("https://6399a21316b0fdad7743a496.mockapi.io/movies")
    .then((res) => res.json())
    .then((data) => {
        bag = data
        console.log(data)
        displayCarousel(data)
        display(data)
        latestMovieDisplay(data)
        hollywoodMovieDisplay(data)
        hindiMovieDisplay(data)
    })
let arr = [];
display(bag)

// let filteredMovies=bag.filter(function(elem){
//     return elem.category=="Zee5"
// })
// //console.log(filteredMovies)
// latestMovieDisplay(filteredMovies)

function displayCarousel(data){
    document.querySelector("#carousel").innerHTML="";
    data.forEach(function(elem){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src",elem.image)
        div.append(img)
        document.querySelector("#carousel").append(div)
    })

}

function display(data) {
    document.querySelector("#movies").innerHTML = "";
    data.forEach(function (el) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", el.image)
        div.append(img)
        document.querySelector("#movies").append(div)
    })
}

function latestMovieDisplay(filteredMovies){
    document.querySelector("#latestMovies").innerHTML="";
    filteredMovies.forEach(function(element){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src",element.image)
        div.append(img)
        document.querySelector("#latestMovies").append(div)
    })

}

function hollywoodMovieDisplay(data){
    document.querySelector("#hollywoodMovies").innerHTML="";
    data.forEach(function(element){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src",element.image)
        div.append(img)
        document.querySelector("#hollywoodMovies").append(div)
    })

}

function hindiMovieDisplay(data){
    document.querySelector("#hindiMovies").innerHTML="";
    data.forEach(function(element){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src",element.image)
        div.append(img)
        document.querySelector("#hindiMovies").append(div)
    })

}