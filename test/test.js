$(document).ready(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault();
    var inputValue = $('#input-value').val();
    $.post('/save-value', {value: inputValue}, function(response) {
      if (response === 'success') {
        alert('Value saved successfully');
      } else {
        alert('Error saving value');
      }
    });
  });
});
