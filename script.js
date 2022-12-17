let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["slide_img/img1.webp", "slide_img/img2.webp", "slide_img/img3.webp", "slide_img/img4.webp", "slide_img/img5.webp", "slide_img/img6.webp"]
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
setInterval(slides, 3000);

let data = fetch("https://63987501fe03352a94d1a25b.mockapi.io/home1")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        displayData(data);
    });


let trending = document.querySelector(".trending");

function displayData (data) {

    data.forEach((ele) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerText = ele.tilte;

        let runtime = document.createElement("p");
        runtime.innerText = "Length : " + ele.runtime + "min";

        let rating = document.createElement("p");
        rating.innerText = "Rating : " + ele.rating + "⭐";

        let watch = document.createElement("button");
        watch.innerText = "Watch";

        div.append(img, title, runtime, rating, watch);
        trending.append(div);
    })
}
displayData(data);