document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("playButton").addEventListener("click", function() {
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'inline';
        document.getElementById('pauseDropdown').style.display = 'inline';
        var hue = document.getElementById('hue').value;
        var intensity = document.getElementById('intensity').value;	
        var command = "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = 'hue-rotate("+hue+"deg) contrast("+intensity+"%)';"
		chrome.tabs.executeScript({code: command});
    });
  document.getElementById("pauseButton").addEventListener("click", function() {
        document.getElementById('playButton').style.display = 'inline';
        document.getElementById('pauseButton').style.display = 'none';
        document.getElementById('pauseDropdown').style.display = 'none';
        chrome.tabs.executeScript({code: "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = '';"});
    });
});