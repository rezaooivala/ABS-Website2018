

function ScrollHandler(pageId) {
  var page = document.getElementById(pageId);
  var pageStart = page.offsetTop;
  var pageJump = false;
  var viewStart;
  var duration = 1000;
  var scrolled = document.getElementById("scroll");
  var n = document.getElementById("navBar");
    
    
    
    
    
  

  function scrollToPage() {
   //Change navBar color
        if(pageId == "U_U"){
        n.classList.remove("nav2");
        n.classList.add("nav1");
        
    } else  if(pageId == "DashyDriver"){
        n.classList.remove("nav3");
        n.classList.add("nav2");
        
    } else  if(pageId == "SuperDuperPunch"){
        n.classList.remove("nav4");
        n.classList.add("nav3");
        
    }else  if(pageId == "LensStudio"){
        n.classList.remove("nav5");
        n.classList.add("nav4");
        
    }else  if(pageId == "ZooKazam"){
        n.classList.remove("nav6");
        n.classList.add("nav5");
    }else  if(pageId == "Kill2Birds"){
        n.classList.remove("nav7");
        n.classList.add("nav6");
    }
      else  if(pageId == "Processing"){
        n.classList.remove("nav8");
        n.classList.add("nav7");
    }
        else  if(pageId == "DataViz"){
        n.classList.remove("nav9");
        n.classList.add("nav8");
    }    else  if(pageId == "CincoDeMayo"){
        n.classList.remove("nav10");
        n.classList.add("nav9");
    }   else  if(pageId == "ATTDigitalHome"){
        n.classList.remove("nav11");
        n.classList.add("nav10");
    }   else  if(pageId == "KibokoCafe"){
        n.classList.remove("nav12");
        n.classList.add("nav11");
    }   else  if(pageId == "KillPills"){
        n.classList.add("nav12");
    }
      
      
      
      
    pageJump = true;
   
    // Calculate how far to scroll
    var startLocation = viewStart;
    var endLocation = pageStart;
    var distance = endLocation - startLocation;

    var runAnimation;

    // Set the animation variables to 0/undefined.
    var timeLapsed = 0;
    var percentage, position;
      
      

    var easing = function(progress) {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
        
        
    };

    function stopAnimationIfRequired(pos) {
      if (pos == endLocation) {
        cancelAnimationFrame(runAnimation);
        setTimeout(function() {
          pageJump = false;
        }, 500);
      }
    }

      
      
      
      
    var animate = function() {
      timeLapsed += 16;
      percentage = timeLapsed / duration;
      if (percentage > 1) {
        percentage = 1;
        position = endLocation;
      } else {
        position = startLocation + distance * easing(percentage);
      }
      scrolled.scrollTop = position;
      runAnimation = requestAnimationFrame(animate);
      stopAnimationIfRequired(position);
      console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");
    };
      
      
    // Loop the animation function
    runAnimation = requestAnimationFrame(animate);
  }
    
    
    
    
    

  window.addEventListener("wheel", function(event) {
      

    
    viewStart = scrolled.scrollTop;
    if (!pageJump) {
      var pageHeight = page.scrollHeight;
      var pageStopPortion = pageHeight / 2;
      var viewHeight = window.innerHeight;
       

      var viewEnd = viewStart + viewHeight;
      var pageStartPart = viewEnd - pageStart;
      var pageEndPart = pageStart + pageHeight - viewStart;

      var canJumpDown = pageStartPart >= 0;
      var stopJumpDown = pageStartPart > pageStopPortion;

      var canJumpUp = pageEndPart >= 0;
      var stopJumpUp = pageEndPart > pageStopPortion;

      var scrollingForward = event.deltaY > 0;
      if (
        (scrollingForward && canJumpDown && !stopJumpDown) ||
        (!scrollingForward && canJumpUp && !stopJumpUp)
      ) {
        event.preventDefault();
        scrollToPage();
      }
      false; //
    } else {
      event.preventDefault();
    }
  });
    
    
}


 
new ScrollHandler("U_U");
new ScrollHandler("DashyDriver");
new ScrollHandler("SuperDuperPunch");
new ScrollHandler("LensStudio");
new ScrollHandler("ZooKazam");
new ScrollHandler("Kill2Birds");
new ScrollHandler("Processing");
new ScrollHandler("DataViz");
new ScrollHandler("CincoDeMayo");
new ScrollHandler("ATTDigitalHome");
new ScrollHandler("KibokoCafe");
new ScrollHandler("KillPills");














