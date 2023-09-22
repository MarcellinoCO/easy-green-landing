function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return { name, city, email, zipCode, status };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(data) {
  return data && isNumber(data.zipCode) && data.status;
}

function submit(event) {
  console.log(event);
  event.preventDefault();

  const formData = handleGetFormData();
  const warningDiv = document.getElementById("warning");

  if (validateFormData(formData)) {
    warningDiv.textContent = "";
  } else {
    warningDiv.textContent = "Please check your form again.";
  }
}

window.onload = () => {
  document.getElementById("contact-form").addEventListener("submit", submit);
};
