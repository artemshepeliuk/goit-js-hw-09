const formData = {
  email: "",
  message: ""
};

const feedbackStorage = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

try {
  const savedData = localStorage.getItem(feedbackStorage);
  if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
  }
} catch (error) {  
  console.error("Error parsing saved data:", error);  
  formData.email = "";  
  formData.message = "";  
}

form.email.value = formData.email;
form.message.value = formData.message;

form.addEventListener("input", event => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value.trim();
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem(feedbackStorage, jsonFormData);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(feedbackStorage);

  formData.email = "";
  formData.message = "";
});