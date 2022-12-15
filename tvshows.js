var i = 0;
var image = [];

image[0] = 'image1.jpg';
image[1] = 'image2.jpg';
image[2] = 'image3.jpg';
image[3] = 'image4.jpg';
image[4] = 'image5.jpg';
image[5] = 'image6.jpg';
image[6] = 'image7.jpg';

function changeImage(){
 
    document.slide.src = image[i];

    if(i < image.length-1){
        i++;
    }else{
        i = 0;
    }

    setTimeout('changeImage()',3000);
}

window.onload = changeImage;