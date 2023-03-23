let formEle = document.getElementById("form-container");

let arr = [];
formEle.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;
  let genderValue = document.getElementById("gender").value;
  let courseValue = document.getElementById("course").value;
  console.log(nameValue, emailValue, genderValue, courseValue);
  arr.push(nameValue, emailValue, genderValue, courseValue);
  console.log(arr);
});
