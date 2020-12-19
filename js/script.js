var btn = document.querySelector('.topb');
var timer;
btn.onclick = toTop;

window.onscroll = function(){
   if (pageYOffset > 700){
       btn.style.display = 'block';
   }
   else{
    btn.style.display = 'none';
   }
}
 
function toTop(){
    var scrolled = pageYOffset;
    if(scrolled > 0){
        scrolled -= 70;
        scrollTo(0, scrolled);
        setTimeout(toTop, 30);
    }
}