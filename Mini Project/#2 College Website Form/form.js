const form = document.getElementById('register');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (isFormFilled(form)) {
      alert('Form is filled. Submitting...');
      form.submit(); // Submit the form
    } else {
      alert('Please fill in all the required fields.');
    }
  });

  function isFormFilled(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isFilled = false;
      }
    });

    return isFilled;
  }