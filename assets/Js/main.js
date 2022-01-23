$(document).ready(function(){

    $('.banner-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,

      });
    $('.break-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed:1500,
        arrows: true,
        dots: true,
      });

      $('.about-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1500,
        arrows: true,
        dots: true,
      });

      
    // banner-slider
      $('.banner-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $index =$('.banner-slider .slick-slide.slick-current.slick-active').index();
        
        if($index <= 9){
          $index = '0' + $index
        }
        $('.banner .slider-number span').text($index);
        
      });
      
      $indexTotal =$('.banner-slider .slick-slide:not(.slick-cloned)').length;    
      $('.banner .slider-number strong').text('0'+$indexTotal);

  // break-slider
  // $('.break-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //   $index =$('.break-slider .slick-slide.slick-current.slick-active').index();
    
  //   if($index <= 9){
  //     $index = '0' + $index;
  //   }
  //   $('.break-slider-number span').text($index);
    
  
  // });

  //   $indexTotal =$('.tab-content .tab-pane.active.show  .slick-slide:not(.slick-cloned)').length;    
  //   $('.break-slider-number strong').text('0'+$indexTotal);
  
  // 
  // const count = $('.nav-link').length;
  // for(var i = 1; i <= count ; i++){
  //   $('.break-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //       $index =$('.break-slider .slick-slide.slick-current.slick-active').index();
        
  //       if($index <= 9){
  //         $index = '0' + $index;
  //       }
  //       $('.break-slider-number span').text($index);
        
      
  //     });
    
  //       $indexTotal =$('.tab-content .tab-pane.active.show  .slick-slide:not(.slick-cloned)').length;    
  //       $('.break-slider-number strong').text('0'+$indexTotal);
    
  // }
 
  $('.nav-item').click(function(){
    var nav = $('.nav-link.active').index();
      console.log(nav);
  
      
    
  });

});


const bars = document.querySelector('.sub-menu');
const menu = document.querySelector('.header-menu');
const page_scroll = document.querySelector('.page-scroll');
const header = document.querySelector('.header');
bars.addEventListener('click', ()=>{
    menu.classList.toggle('isactive');
    bars.classList.toggle('isactive');
});

window.addEventListener('scroll', ()=>{
  
  const windowscroll= window.scrollY > 70;
  header.classList.toggle('active',windowscroll);
  page_scroll.classList.toggle('active',windowscroll);
  
});
page_scroll.addEventListener('click',()=>{
    $(window).scrollTop($('body').offset().top);
});


//
// wowjs
new WOW().init();
