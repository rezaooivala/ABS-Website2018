var top1 = $('#U_U').offset().top-300;
var top2 = $('#DashyDriver').offset().top-300;
var top3 = $('#SuperDuperPunch').offset().top-300;
var top4 = $('#LensStudio').offset().top-300;
var top5 = $('#ZooKazam').offset().top-300;
var top6 = $('#Processing').offset().top-300;
var top7 = $('#DataViz').offset().top-300;
var top8 = $('#UA').offset().top-300;
var top9 = $('#CincoDeMayo').offset().top-300;
var top10 = $('#ATTDigitalHome').offset().top-300;
var top11 = $('#KibokoCafe').offset().top-300;



$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {

     $('#navBar').removeClass( "nav2" ).addClass( "nav1" );

  } else if (scrollPos >= top2 && scrollPos < top3) {

     $('#navBar').removeClass( "nav3" ).addClass( "nav2" );

  } else if (scrollPos >= top3 && scrollPos < top4) {

     $('#navBar').removeClass( "nav4" ).addClass( "nav3" );

  }
    
  else if (scrollPos >= top4 && scrollPos < top5) {

     $('#navBar').removeClass( "nav5" ).addClass( "nav4" );

  }
    
  else if (scrollPos >= top5 && scrollPos < top6) {

     $('#navBar').removeClass( "nav6" ).addClass( "nav5" );

  }
    
    else if (scrollPos >= top6 && scrollPos < top7) {

     $('#navBar').removeClass( "nav7" ).addClass( "nav6" );

  }
    
    else if (scrollPos >= top7 && scrollPos < top8) {

     $('#navBar').removeClass( "nav8" ).addClass( "nav7" );

  }
    
        else if (scrollPos >= top8 && scrollPos < top9) {

     $('#navBar').removeClass( "nav9" ).addClass( "nav8" );

  }
    
    else if (scrollPos >= top9 && scrollPos < top10) {

     $('#navBar').removeClass( "nav10" ).addClass( "nav9" );

  }
    
    else if (scrollPos >= top10 && scrollPos < top11) {

     $('#navBar').removeClass( "nav11" ).addClass( "nav10" );

  }
    


    
    
    
  
    
   
});