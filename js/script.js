$(document).ready(function () {
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


function filterImg(imgDf){
    $('.img-df').filter(imgDf).show();
    $('.img-df').not(imgDf).hide();
}

$('.btn-img').click(function(){
    var dataImg = $(this).attr('data-img');
    filterImg('.' + dataImg);
    $(this).addClass('active');
    $('.btn-img').not(this).removeClass('active');
})
});