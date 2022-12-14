

let bag=[];
fetch("https://636a17f3c07d8f936d92dd55.mockapi.io/fas")
.then((res)=>res.json())
.then((data)=>{
  bag=data
  console.log(data)
  display(data)
})

let arr=[];

display(bag)
function display(data){
document.querySelector("#container_1").innerHTML="";
data.forEach(function(el){
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.img)




  div.append(img)
  document.querySelector("#container_1").append(div)
  
})
}


let bag1=[];
fetch("https://636a17f3c07d8f936d92dd55.mockapi.io/data2")
.then((res)=>res.json())
.then((data)=>{
  bag1=data[0]
  console.log(data[0])
  display1(data[0])
})



display1(bag1)
function display1(data){
document.querySelector("#container_2").innerHTML="";
data.forEach(function(el){
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.img)




  div.append(img)
  document.querySelector("#container_2").append(div)
  
})
}

let bag2=[];
fetch("https://636a17f3c07d8f936d92dd55.mockapi.io/data2")
.then((res)=>res.json())
.then((data)=>{
  bag2=data[1]
  console.log(data[1])
  display2(data[1])
})



display2(bag2)
function display2(data){
document.querySelector("#container_3").innerHTML="";
data.forEach(function(el){
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.img)




  div.append(img)
  document.querySelector("#container_3").append(div)
  
})
}
let bag3=[];
fetch("https://636a17f3c07d8f936d92dd55.mockapi.io/data2")
.then((res)=>res.json())
.then((data)=>{
  bag3=data[2]
  console.log(data[2])
  display3(data[2])
})



display3(bag3)
function display3(data){
document.querySelector("#container_4").innerHTML="";
data.forEach(function(el){
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.img)




  div.append(img)
  document.querySelector("#container_4").append(div)
  
})
}
let bag4=[];
fetch("https://636a17f3c07d8f936d92dd55.mockapi.io/data2")
.then((res)=>res.json())
.then((data)=>{
  bag4=data[3]
  console.log(data[3])
  display4(data[3])
})



display4(bag4)
function display4(data){
document.querySelector("#container_5").innerHTML="";
data.forEach(function(el){
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.img)




  div.append(img)
  document.querySelector("#container_5").append(div)
  
})
}









let i=0;
    var x 
   let data =["https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/cover/1920x77079afb06df35c44f085cd8482df287a17.jpg",
   "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/cover/1920x7706e8d8d70922c434c94dd09c14ccc5d5b.jpg",
   "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/cover/1920x770ac642b6d516f4a958c44cb56912a306cb137ff41ad1c409e86f0a9b4f733a023.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2176/cover/1920x770566e9b9990cd4b44a9c7a06ddd7a338d.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/cover/1920x7704ba850de7a8a410cb16fa2d7468d3e77.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2370/cover/1920x770a94a27dafbe843889985e57f05578452d666a1c619ef4410b182686d33f158b5.jpg"]
  function displayData(data){
    document.getElementById("container").innerHTML="" 
    console.log(data[i])
    let img= document.createElement("img") 
    img.src=data[i] 
    document.getElementById("container").append(img)
  }
  displayData(data)
  x=setInterval(()=>{
        i++
        if(i>=6){
            i=0;
        }
        displayData(data)
    },2000)
   