fetch("https://6399df9c29930e2bb3e28c5b.mockapi.io/TVshows")

var i = 0;
var image = [];

image[0] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x770a15c26ed517c493798aa0019ed684045.jpg';
image[1] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x77034e3eda8bcc4448f9d5d0bd3cb3b370d.jpg';
image[2] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1920x77016130f4e4ae84c7b8638e5dfdee6f207.jpg';
image[3] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3510/cover/1920x7708b56110e9bcd4529b3d75b6d9ffe5acf.jpg';
image[4] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z553645/cover/1920x770176f42e22d424862b2c0ecb47799c3ee.jpg';
image[5] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/cover/1920x770dc6d9c3fc4474045bc78e2150330d1cb.jpg';
image[6] = 'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5214664/cover/1920x770b72bac5a9aa44b91954373eee6383996.jpg';

function changeImage(){
    document.slide.src = image[i];
    if(i < image.length-1){
        i++;
    }else{
        i = 0;
    }
    setTimeout('changeImage()',1000);
}

window.onload = changeImage;