$(document).ready(function() {
  $('#click').click(function(event) {
    event.preventDefault();
    $.post('/save-value', {value: 1}, function(response) {
      if (response) {
        alert('Value saved successfully');
        p = document.getElementById("clicks");
        p.innerValue = response;
      } else {
        alert('Error saving value');
      }
    });
  });
});
