document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("playButton").addEventListener("click", function() {
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'inline';
		chrome.tabs.executeScript({code: "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = 'grayscale(100%)';"});
    });
  document.getElementById("pauseButton").addEventListener("click", function() {
        document.getElementById('playButton').style.display = 'inline';
        document.getElementById('pauseButton').style.display = 'none';
    });
});