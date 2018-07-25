

$(document).ready(function () {
//    $(".dropdown-btn").next().addClass("active");    
  
    
    
$(".dropdown-btn").next().addClass("collapsed").slideUp();
    


$(".sidenav").on('click', '.dropdown-btn', function (event) {
    event.preventDefault();
    var currentClass = $(this).next().prop('class');
    if (currentClass == "dropdown-container") {
        
        $(this).next().removeClass("expanded");
        $(this).next().addClass("collapsed");
        $(this).next().slideUp();
        
    } else {
         $(".expanded").slideUp().addClass("collapsed").removeClass("expanded");
        
        $(this).next().removeClass("collapsed");
        $(this).next().addClass("expanded");
        $(this).next().slideDown();
//        $(this).next().addClass("active");
        
    }


});
});








