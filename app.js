const slides=document.querySelectorAll(".slider");
const nextBtn=document.querySelector(".nextBtn");
const prevBtn=document.querySelector(".prevBtn");
// sliderWidth=100/sliders.length;
slides.forEach(function (slider, index){
  slider.style.left=`${index * 100}%`;
});

let counter=0
nextBtn.addEventListener("click", function(){
  counter++
  courosel()
});

prevBtn.addEventListener("click", function(){
  counter--
  courosel()
});

function courosel(){
 
  if(counter < slides.length - 1){
    nextBtn.style.display="block";
   }else{
    nextBtn.style.display="none";
   }
   if (counter>0){
    prevBtn.style.display="block";
   }else{
    prevBtn.style.display="none";
   }
   slides.forEach(function(slider){
    slider.style.transform=`translate(-${counter * 100}%)`;   
   })
}
prevBtn.style.display="none";



const toggleBtn=document.querySelector(".menu-toggle");
const menunavigation=document.querySelector(".menu-navigation");
toggleBtn.addEventListener("click",function(){
  // sidebar.classList.contains("sidebar");
  // console.log(show)
  // method one
  // if (sidebar.classList.contains("show-sidebar")){
  //   sidebar.classList.remove("show-sidebar");
  // }else{
  //   sidebar.classList.add("show-sidebar");
  // }
  // method two
  menunavigation.classList.toggle("show-navigation")
})