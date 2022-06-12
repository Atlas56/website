// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
//schedual  highlight by day 
const today=new Date()
let day=today.getDay()
console.log(day)
if(day===1){
    document.querySelector(".monday").classList.add("active")
    document.querySelector(".hightlight1").classList.add("affect")
    document.querySelector(".hightlight2").classList.add("affect")
    document.querySelector(".hightlight3").classList.add("affect")
    document.querySelector(".hightlight4").classList.add("affect")
    document.querySelector(".hightlight5").classList.add("affect")

}else if(day===2){
    document.querySelector(".tuesday").classList.add("active")

    document.querySelector(".hightlight01").classList.add("affect")
    document.querySelector(".hightlight02").classList.add("affect")
    document.querySelector(".hightlight03").classList.add("affect")
    document.querySelector(".hightlight04").classList.add("affect")
    document.querySelector(".hightlight05").classList.add("affect")

}else if(day===3){
    document.querySelector(".wednesday").classList.add("active")
    document.querySelector(".hightlight001").classList.add("affect")
    document.querySelector(".hightlight002").classList.add("affect")
    document.querySelector(".hightlight003").classList.add("affect")
    document.querySelector(".hightlight004").classList.add("affect")
    document.querySelector(".hightlight005").classList.add("affect")

}else if(day===4){
    document.querySelector(".thursday").classList.add("active")

    document.querySelector(".hightlight0001").classList.add("affect")
    document.querySelector(".hightlight0002").classList.add("affect")
    document.querySelector(".hightlight0003").classList.add("affect")
    document.querySelector(".hightlight0004").classList.add("affect")
    document.querySelector(".hightlight0005").classList.add("affect")


}else if(day===5){
    document.querySelector(".friday").classList.add("active")

    document.querySelector(".hightlight00001").classList.add("affect")
    document.querySelector(".hightlight00002").classList.add("affect")
    document.querySelector(".hightlight00003").classList.add("affect")
    document.querySelector(".hightlight00004").classList.add("affect")
    document.querySelector(".hightlight00005").classList.add("affect")
}

window.addEventListener("scroll",function(){
  const scrollHeight=window.pageYOffset
  const articles1=document.querySelector(".tabs1")
  const articles2=document.querySelector(".tabs2")
  const articles3=document.querySelector(".tabs3")
  const articles4=document.querySelector(".tabs4")
  const articles5=document.querySelector(".tabs5")
  const articles6=document.querySelector(".tabs6")
  const trainer1=document.querySelector(".transition-fade-trainer")

  console.log(scrollHeight)
  if(scrollHeight>800){
    aboutAni.classList.add("transition-fade-in")
  }
if(scrollHeight>2500){
  articles1.classList.add("transition-fade-in")
}
if(scrollHeight>3000){
  articles2.classList.add("transition-fade-in")
}
if(scrollHeight>4000){
  articles3.classList.add("transition-fade-in")
}
if(scrollHeight>4500){
  articles4.classList.add("transition-fade-in")
}
if(scrollHeight>5000){
  articles5.classList.add("transition-fade-in")
}
if(scrollHeight>5400){
  articles6.classList.add("transition-fade-in")
}if(scrollHeight>100){
  trainer1.classList.add("transition-fade-in")
}
})