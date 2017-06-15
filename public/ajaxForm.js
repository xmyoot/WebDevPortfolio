//*************************
//AJAX CONTACT FORM
//************************* 
$(function() {
  // Get the form.
  var form = $('#ajax-contact2');

  // Get the messages div.
  var formMessages = $('#form-messages2');

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
      }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert-error');
        $(formMessages).addClass('alert-success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name2').val('');
        $('#email2').val('');
        $('#message2').val('');
    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert-success');
        $(formMessages).addClass('alert-danger');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });
  });
});

//*************************
//AJAX PROJECT FORM
//************************* 
$(function() {
  // Get the form.
  var form = $('#ajax-project');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
      }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert-error');
        $(formMessages).addClass('alert-success');

        // Set the message text.
        $(formMessages).text(response);

    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert-success');
        $(formMessages).addClass('alert-danger');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });
  });
});
