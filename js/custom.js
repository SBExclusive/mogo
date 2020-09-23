$(function(){
    
    
// .back-top    
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1000);
});    
    
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(500);
});    
 // wind
    
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else{
        $('.navbar').removeClass('bg');  
    }
    if(scrolling > 200){
        $('.back-top').fadeIn(500);
    }
    else{
        $('.back-top').fadeOut(500);
    }
    
    
    
    
    
});
    
 //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    });    
    
    
    
    
    
    
    
    
// slider    
    
$('.slider-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    dots: true,
});    
    
    
// team-slider    
    
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
    arrows:false,
    
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },    
        
        
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
     
});
 
// video      
jQuery(".player").YTPlayer();    
    
    
    
    
    
    
// venubox    
    
$('.venobox').venobox();     
    
   
});
//
$(function(){
   
//feed-slider slider    
    
$('.feed-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
    arrows:false,
    dots:true,
});    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});




















var fname = document.getElementById('fname');
var name_err = document.getElementById('nam_err');

var email = document.getElementById('email');
var email_err = document.getElementById('email_err');
var regex = /^([A-Za-x0-9_\-\.])+\@([A-Za-z0-9_\-\.])+([A-Za-z]{2,4})$/;

var Subject = document.getElementById('Subject');
var Subject_err = document.getElementById('Subject_err')


var message = document.getElementById('message');
var message_err = document.getElementById('message_err');


var news = document.getElementById('news');
var news_err = document.getElementById('news_err');





function sub(){
    if(fname.value == '' ){
        name_err.innerHTML = 'Please enter your name';
        fname.style.border = '1px solid red'
        fname.focus();
        return false;
        
    }
    
    if(email.value == '' ){
        email_err.innerHTML = 'Please enter your Email';
        email.style.border = '1px solid red'
        email.focus();
        return false;
        
    }
    
    if(!regex.test(email.value)){
        email_err.innerHTML = 'Please enter your Email';
        email.style.border = '1px solid red'
        email.focus();
        return false;
        
    }
    
    if(Subject.value == '' ){
        Subject_err.innerHTML = 'Please enter your Subject';
        Subject.style.border = '1px solid red'
        Subject.focus();
        return false;
        
    }
    
    if(message.value == '' ){
        message_err.innerHTML = 'Please enter your Message';
        message.style.border = '1px solid red'
        message.focus();
        return false;
        
    }
    
    if(news.value == '' ){
        news_err.innerHTML = 'Please enter your news';
        news.style.border = '1px solid red'
        news.focus();
        return true;
        
    }
  
    
}

















