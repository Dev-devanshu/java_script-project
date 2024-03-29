function animation(){

var t1=gsap.timeline()  
gsap.from(".line h1,.line h2",{
    y:150,
    stagger:0.3 ,
    delay:0.2,
    duration:0.4,

})
t1.from("#line-part1, .line h1",{
    opacity:0,
    onStart:function(){
var timer=document.querySelector("#line-part1 h5");
var grow=0
setInterval(function(){
    if(grow<100){
        timer.innerHTML=grow++
    }else{
        timer.innerHTML=grow
    }
},45);
 },
});
 t1.to("#loader",{
    opacity:0,
    scrub:1,
    duration:0.5,
    delay:5
 })
 t1.from("#page2",{
    delay:0.2,
    y:1400,
    duration:0.5,
    opacity:0,
  
 });
 t1.to("#loader",{
    display:"none",

 })
 t1.from("#nav2",{
   
    opacity:0,
})

t1.from("#hero1 h1, #hero2 h1 , #hero3 h2, #hero4 h1  ",{
    y:120,
    stagger:0.2
})
}
animation();

function cursoranim(){
    document.addEventListener("mousemove",function(move){
        gsap.to("#crsr",{
           left:move.x,
           top:move.y
        })
       
       })
       Shery.makeMagnet("#nav2 h4", {
           duration: 1,
         });
}
cursoranim();