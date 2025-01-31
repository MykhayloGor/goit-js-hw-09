const STORAGE_KEY = 'feedback-form-state';
let formData = loadFromLS(STORAGE_KEY) || { email: '', message: '' };

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const formBtn = document.querySelector('button[type="submit"]');
  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.classList.add('form-label');
  });

  emailInput.classList.add('form-input', 'email-input');
  messageInput.classList.add('form-input', 'message-input');
  formBtn.classList.add('my-button');git 
});

emailInput.value = formData.email;
messageInput.value = formData.message;

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  saveToLS(STORAGE_KEY, formData);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  try {
    const storedData = localStorage.getItem(key);
    return JSON.parse(storedData) || {};
  } catch (error) {
    console.error('Error loading from local storage:', error);
    return {};
  }
}
