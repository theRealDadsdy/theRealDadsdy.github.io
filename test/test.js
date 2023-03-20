$(document).ready(function() {
  $('#click').click(function(event) {
    event.preventDefault();
    var inputValue = $('#input-value').val();
    $.post('/save-value', {value: inputValue}, function(response) {
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
