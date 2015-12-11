function save_options() {
  var color = document.getElementById('color').value;
  chrome.storage.sync.set({
    type: color,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    type: 'none',
  }, function(items) {
    document.getElementById('color').value = items.type;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
