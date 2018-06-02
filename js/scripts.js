// Image Carousel 
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


// Samples Toggle Button
function toggleSamples() {
  // get samples
  var mySamples = document.getElementById('samples');
  
  //get the current value of the clock's display property
  var displaySetting = mySamples.style.display;
  
  //also get the button, so we can change what it says
  var samplesButton = document.getElementById('samplesButton');
  
  //now toggle the samples and the button text, depending on current state
  if (displaySetting == 'block') {
    //samples is visible, hide it
    mySamples.style.display = 'none';
    //change button text
    samplesButton.innerHTML = 'Show Samples';
  } else {
    //samples is hidden, show it
    mySamples.style.display = 'block';
    //change button text
    samplesButton.innerHTML = 'Hide Samples';
  }
}












