
let bag = [];
// var i=0;
// let caraouselImage=[]
fetch("https://6399a21316b0fdad7743a496.mockapi.io/movies")
    .then((res) => res.json())
    .then((data) => {
        bag = data
        console.log(data)
        handleCarousel(data)
        handleZee5Movies(data)
        handleLatestMovies(data)
        handleHollywoodMovie(data)
        handleHindiMovie(data)

    })
// let arr = [];
// display(bag)

function handleCarousel(data) {
    let filteredMovies = data.filter(function (elem) {
        return elem.category == "caraousel"
    })
    displayCarousel(filteredMovies)
}

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


function displayCarousel(filteredMovies) {
    document.querySelector("#carousel").innerHTML = "";
    filteredMovies.forEach(function (elem) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", elem.image)
        div.append(img)
        document.querySelector("#carousel").append(div)
        // caraouselImage.push(elem.image)
        // function changeImage(){
        //     document.slide.src=caraouselImage[i];
        //     if(i<caraouselImage.length-1){
        //         i++
        //     }else{
        //         i=0
        //     }
        //     setTimeout("changeImage()",1000)
        // }
        // window.onload=changeImage
    })
    // console.log(caraouselImage)

}




function Zee5Movies(filteredMovies) {
    document.querySelector("#movies").innerHTML = "";
    filteredMovies.forEach(function (el) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", el.image)
        div.append(img)
        document.querySelector("#movies").append(div)
    })
}

function latestMovieDisplay(filteredMovies) {
    document.querySelector("#latestMovies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)
        div.append(img)
        document.querySelector("#latestMovies").append(div)
    })

}

function hollywoodMovieDisplay(filteredMovies) {
    document.querySelector("#hollywoodMovies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)
        div.append(img)
        document.querySelector("#hollywoodMovies").append(div)
    })

}

function hindiMovieDisplay(filteredMovies) {
    document.querySelector("#hindiMovies").innerHTML = "";
    filteredMovies.forEach(function (element) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute("src", element.image)
        div.append(img)
        document.querySelector("#hindiMovies").append(div)
    })

}