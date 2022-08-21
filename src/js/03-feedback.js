import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput(event) {
  console.log(event);
  formData[event.target.name] = event.target.value;
  console.log('formdata', formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const getStorageData = localStorage.getItem(STORAGE_KEY);
const parsedStorage = JSON.parse(getStorageData);

if (getStorageData) {
  inputEl.value = parsedStorage.email;
  textareaEl.value = parsedStorage.message;
}

function onSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
  console.log(formData);
}
