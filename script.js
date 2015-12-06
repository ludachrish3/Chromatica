document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("playButton").addEventListener("click", function() {
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'inline';
    });
  document.getElementById("pauseButton").addEventListener("click", function() {
        document.getElementById('playButton').style.display = 'inline';
        document.getElementById('pauseButton').style.display = 'none';
    });
});