// Form handling for the Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
  // Get feedback form
  const feedbackForm = document.getElementById('feedback-form');
  const formMessage = document.querySelector('.form-message');
  
  if (feedbackForm) {
    // Form submission handler
    feedbackForm.addEventListener('submit', handleFormSubmit);
    
    // Form input validation
    setupFormValidation();
  }
});

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const formMessage = document.querySelector('.form-message');
  
  // Get form values
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    showFormMessage('Please fill all fields', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showFormMessage('Please enter a valid email address', 'error');
    return;
  }
  
  // Simulate form submission (in a real application, this would send data to a server)
  simulateFormSubmission(formData)
    .then(() => {
      // Success
      showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
      e.target.reset();
    })
    .catch(() => {
      // Error
      showFormMessage('There was a problem sending your message. Please try again later.', 'error');
    });
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show form message (success or error)
function showFormMessage(message, type) {
  const formMessage = document.querySelector('.form-message');
  
  formMessage.textContent = message;
  formMessage.className = 'form-message';
  formMessage.classList.add(type);
  formMessage.style.display = 'block';
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    formMessage.style.opacity = '0';
    formMessage.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      formMessage.style.display = 'none';
      formMessage.style.opacity = '1';
    }, 500);
  }, 5000);
}

// Setup form validation
function setupFormValidation() {
  const formInputs = document.querySelectorAll('#feedback-form input, #feedback-form textarea');
  
  formInputs.forEach(input => {
    // Add blur event listener to validate input when user leaves the field
    input.addEventListener('blur', () => {
      validateInput(input);
    });
    
    // Add input event listener to remove error styling when user starts typing
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorMessage = input.parentElement.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    });
  });
}

// Validate individual input
function validateInput(input) {
  // Remove any existing error message
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  let isValid = true;
  let errorMessage = '';
  
  // Required field validation
  if (input.required && !input.value.trim()) {
    isValid = false;
    errorMessage = 'This field is required';
  } 
  // Email validation
  else if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value)) {
    isValid = false;
    errorMessage = 'Please enter a valid email address';
  }
  
  if (!isValid) {
    input.classList.add('error');
    
    // Create and append error message
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = errorMessage;
    errorEl.style.color = 'var(--primary-red)';
    errorEl.style.fontSize = '1.2rem';
    errorEl.style.marginTop = '5px';
    
    input.parentElement.appendChild(errorEl);
  } else {
    input.classList.remove('error');
  }
  
  return isValid;
}

// Simulate form submission (replace with actual form submission in production)
function simulateFormSubmission(formData) {
  return new Promise((resolve, reject) => {
    // Simulate network request
    setTimeout(() => {
      // For demo: 90% success rate
      const isSuccess = Math.random() < 0.9;
      
      if (isSuccess) {
        resolve();
      } else {
        reject();
      }
    }, 1500);
  });
}