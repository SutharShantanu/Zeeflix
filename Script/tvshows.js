let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["Image/TV_slide_img/tv_img1.webp", "Image/TV_slide_img/tv_img2.webp", "Image/TV_slide_img/tv_img3.webp", "Image/TV_slide_img/tv_img4.webp", "Image/TV_slide_img/tv_img5.webp"]
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
function slides () {

    document.getElementById("image").src = arr[i];
    if (i < arr.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}
slides();
setInterval(slides, 3000);

let data = fetch("https://639d83681ec9c6657babd6c7.mockapi.io/tvshows1")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        displayData(data);
    });

let trending = document.querySelector(".tv_trending");

function displayData (data) {

    data.forEach((ele) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerText = ele.title;

        let runtime = document.createElement("p");
        runtime.innerText = "Length : " + ele.runtime + " Season";

        let rating = document.createElement("p");
        rating.innerText = "Rating : " + ele.rating + "⭐";

        let watch = document.createElement("button");
        watch.innerText = "Watch";

        div.append(img, title, runtime, rating, watch);
        trending.append(div);
    })
}
// displayData(data);


// tvshowsfree part here--->

let x = fetch("https://639d8d4f3542a261304a174b.mockapi.io/tvshowsfree")
    .then((res) => res.json())
    .then((x) => {
        console.log(x)
    freeData(x);
    });


let free = document.querySelector(".tv_trending_free");

function freeData (y) {

    y.forEach((ele) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerText = ele.title;

        let runtime = document.createElement("p");
        runtime.innerText = "Length : " + ele.runtime + " Episode";

        // let rating = document.createElement("p");
        // rating.innerText = "Rating : " + ele.rating + "⭐";

        let watch = document.createElement("button");
        watch.innerText = "Watch";

        div.append(img, title, runtime, watch);
        free.append(div);
    })
}
// freeData(x);



// tvshowsfree part here--->

let y = fetch("https://639da02e1ec9c6657bae7de1.mockapi.io/tvgenre")
    .then((res) => res.json())
    .then((y) => {
        console.log(y)
        genData(y);
    });


let genre = document.querySelector(".tv_trending_genre");

function genData (y) {

    y.forEach((ele) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerText = ele.title;

        // let runtime = document.createElement("p");
        // runtime.innerText = "Length : " + ele.runtime + " Episode";

        // let rating = document.createElement("p");
        // rating.innerText = "Rating : " + ele.rating + "⭐";

        // let watch = document.createElement("button");
        // watch.innerText = "Watch";

        div.append(img, title);
        genre.append(div);
    })
}