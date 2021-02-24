"use strict";
//Selecting Elements
const userWeight = document.getElementById("weight");
const userAge = document.getElementById("age");
const userHeight = document.getElementById("height");
const maleBtn = document.querySelector(".btnMale");
const femaleBtn = document.querySelector(".btnFemale");
const answerBtn = document.querySelector(".answerButton");
let gender;

//Starting Conditions
userWeight.textContent = 0;
userAge.textContent = 0;
userHeight.textContent = 0;

// Selecting Gender
maleBtn.addEventListener("click", function () {
  gender = "male";
  if (gender == "male") {
    maleBtn.classList.add("genderClicked");
    femaleBtn.classList.remove("genderClicked");
  }
});

femaleBtn.addEventListener("click", function () {
  gender = "female";
  if (gender == "female") {
    maleBtn.classList.remove("genderClicked");
    femaleBtn.classList.add("genderClicked");
  }
});

// Add users input value
answerBtn.addEventListener("click", function () {
  console.log(userWeight.value, userAge.value, userHeight.value, gender);
  //Formula to calculate BMI for adults
  if (userWeight.value !== 0 && userAge.value >= 20 && userHeight.value !== 0) {
    let heightMts = userHeight.value / 100;
    let resultBMI = userWeight.value / (heightMts * heightMts);
    console.log(resultBMI.toFixed(1));
    //Formula to calculate BMI for kids and teens
  } else if (
    userWeight.value !== 0 &&
    userAge.value <= 19 &&
    userAge.value >= 2 &&
    userHeight.value !== 0
  ) {
    let underageBMI =
      (userWeight.value / (userHeight.value * userHeight.value)) * 10000;
    console.log(underageBMI.toFixed(1));
  }
});
