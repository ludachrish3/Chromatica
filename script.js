document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("playButton").addEventListener("click", function() {
		var colorCorrectStatus = document.getElementById('color_correct').checked;
		document.getElementById('playButton').style.display = 'none';
		document.getElementById('pauseButton').style.display = 'inline';
		document.getElementById('pauseDropdown').style.display = 'inline';
		var hue = document.getElementById('hue').value;
		var intensity = document.getElementById('intensity').value;	
		var command = "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = 'hue-rotate("+hue+"deg) contrast("+intensity+"%)';"
		if(colorCorrectStatus){
			chrome.tabs.executeScript({code: command});
		}
	});
	document.getElementById("pauseButton").addEventListener("click", function() {
		document.getElementById('playButton').style.display = 'inline';
		document.getElementById('pauseButton').style.display = 'none';
		document.getElementById('pauseDropdown').style.display = 'none';
		chrome.tabs.executeScript({code: "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = '';"});
	});
	document.getElementById("hue").addEventListener("mouseup", function() {
		var colorCorrectStatus = document.getElementById('color_correct').checked;
		if(document.getElementById('playButton').style.display =='none' && colorCorrectStatus){
			var hue = document.getElementById('hue').value;
			var intensity = document.getElementById('intensity').value;	
			var command = "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = 'hue-rotate("+hue+"deg) contrast("+intensity+"%)';"
			chrome.tabs.executeScript({code: command});
		}
	});
	document.getElementById("intensity").addEventListener("mouseup", function() {
		var colorCorrectStatus = document.getElementById('color_correct').checked;
		if(document.getElementById('playButton').style.display =='none' && colorCorrectStatus){
			var hue = document.getElementById('hue').value;
			var intensity = document.getElementById('intensity').value;	
			var command = "var x = document.getElementsByTagName('img'); for(var i = 0; i < x.length; i++) x[i].style.webkitFilter = 'hue-rotate("+hue+"deg) contrast("+intensity+"%)';"
			chrome.tabs.executeScript({code: command});
		}
	});

	document.getElementById("saveProfile").addEventListener("click", function() {
		var color = document.getElementById('color').value;
		chrome.storage.sync.set({
			type: color,
		}, function() {
			setTimeout(function() {
				document.getElementById('chromatica').style.display = 'inline';
				document.getElementById('chooseProfile').style.display = 'none';
				document.getElementById('chromaticaBody').style.width = '400px';
				document.getElementById('chromaticaBody').style.height = '150px';
			}, 750);
		});
	});

	document.getElementById("settingsButton").addEventListener("click", function() {
		chrome.storage.sync.get({
			type: 'none',
		}, function(items) {
			document.getElementById('chromatica').style.display = 'none';
			document.getElementById('chooseProfile').style.display = 'inline';
			document.getElementById('color').value = items.type;
		});	
	});


	chrome.storage.sync.get({
		type: 'none',
	}, function(items) {
		if(items.type == 'none'){
			document.getElementById('chromatica').style.display = 'none';
			document.getElementById('chooseProfile').style.display = 'inline';
		    document.getElementById('color').value = items.type;
		}
	});

});