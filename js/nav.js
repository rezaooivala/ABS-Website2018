var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


$(".dropdown-btn").mouseenter(function() {
    $(this).click();
}).mouseleave(function() {
    $(this).click();
});

//$(".dropdown-btn").mouseenter(function() {
//    if(!$("#"+$(this).attr("data-dropdown")).is(".open")) { // Checks if its dropdown is already open so it doesn't close it.
//        $(this).click();
//    }
//});




