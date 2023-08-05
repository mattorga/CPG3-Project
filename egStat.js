document.addEventListener("DOMContentLoaded", function() {
  // Get the buttons by their IDs
  var cpebtn = document.getElementById("cpebtn");
  var ecebtn = document.getElementById("ecebtn");

  // Add event listeners to the buttons
  cpebtn.addEventListener("click", function() {
    window.location.href = "cpe-egStat.html";
  });

  ecebtn.addEventListener("click", function() {
    window.location.href = "ece-egStat.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the go back button and the image by their IDs
  var goBackBtn = document.getElementById("goBackBtn");
  
  // Add event listener to the go back button
  goBackBtn.addEventListener("click", function() {
    window.location.href = "egStat.html";
  });

});

