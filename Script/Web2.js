let bag=[];
fetch("https://636a17f3c07d8f936d92dd55.mockapi.io/data3")
.then((res)=>res.json())
.then((data)=>{
  bag=data
  console.log(data)
  display(data)
})



display(bag)
function display(data){
document.querySelector("#main_1").innerHTML="";
data.forEach(function(el){
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.img)
 
  



  div.append(img)
  document.querySelector("#main_1").append(div)
  
})
}
