"use strict";
//Selecting Elements
const userWeight = document.getElementById("weight");
const userAge = document.getElementById("age");
const userHeight = document.getElementById("height");
const maleBtn = document.querySelector(".btnMale");
const femaleBtn = document.querySelector(".btnFemale");
const answerBtn = document.querySelector(".answerButton");
const windowResults = document.querySelector(".resultsWindow");
const overlay = document.querySelector(".overlay");
const reset = document.querySelector(".close-window");
let inputs = document.querySelectorAll("input");
let gender;
let range;
let heightMts;
let displayResult;
let description;
let moreInfo;
let extSrc;
let rangeResult;
let descrResult;
let resultBMI;

//Starting Conditions
userWeight.textContent = 0;
userAge.textContent = 0;
userHeight.textContent = 0;

//Funtions to open window
const openWindow = function () {
  windowResults.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

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
  openWindow();
  //Formula to calculate BMI for adults
  if (userWeight.value !== 0 && userAge.value >= 20 && userHeight.value !== 0) {
    heightMts = userHeight.value / 100;
    resultBMI = userWeight.value / (heightMts * heightMts);
    console.log(resultBMI.toFixed(0));
    // Selecting ranges and display result
    //Underweight range
    if (resultBMI < 18.5) {
      range = "Underweight";
      descrResult = "Add here a description of the results and tips to improve";
      funcResults();
      //Healthy range
    } else if (resultBMI > 18.5 && resultBMI < 25) {
      range = "Healthy Weight";
      descrResult = "This is the description for the result of healthy weight";
      funcResults();
      //Overweight range
    } else if (resultBMI > 25 && resultBMI < 30) {
      range = "Overweight";
      descrResult = "This is the description for the result of overweight";
      funcResults();
      //Obese range
    } else if (resultBMI > 30) {
      range = "Obese";
      descrResult = "This is the description for the result of obese";
      funcResults();
    }

    //Formula to calculate BMI for kids and teens
  } else if (
    userWeight.value !== 0 &&
    userAge.value <= 19 &&
    userAge.value >= 2 &&
    userHeight.value !== 0
  ) {
    resultBMI =
      (userWeight.value / (userHeight.value * userHeight.value)) * 10000;
    console.log(resultBMI.toFixed(0));

    if (resultBMI < 5) {
      range = "Underweight";
      funcResults();
    } else if (resultBMI > 5 && resultBMI < 85) {
      range = "Healthy weight";
      funcResults();
    }
  }

  //Create function to display results
  function funcResults() {
    //Set range underweight
    rangeResult = document.createElement("H2");
    rangeResult.innerHTML = `${range}`;
    rangeResult.style.color = "#E81D58";

    //Set number result
    displayResult = document.createElement("H3");
    displayResult.innerHTML = `${resultBMI.toFixed(1)}`;

    //Set description
    description = document.createElement("H4");
    description.innerHTML = `${descrResult}`;
    description.style.color = "black";

    //Set More Info with link
    moreInfo = document.createElement("P");
    moreInfo.innerHTML = `For more information click here: `;
    moreInfo.classList.add("externalInfo");
    //Set Link
    extSrc = document.createElement("a");
    extSrc.setAttribute("href", "google.com");
    extSrc.innerHTML = "google.com";

    //Display results
    document.querySelector(".resultsWindow").appendChild(rangeResult);
    document.querySelector(".resultsWindow").appendChild(displayResult);
    document.querySelector(".resultsWindow").appendChild(description);
    document.querySelector(".resultsWindow").appendChild(moreInfo);
    document.querySelector(".externalInfo").appendChild(extSrc);
  }
});

const closeWindow = function () {
  windowResults.classList.add("hidden");
  overlay.classList.add("hidden");
  //Reset Conditions
  inputs.forEach((input) => (input.value = ""));
  gender == "male"
    ? maleBtn.classList.remove("genderClicked")
    : femaleBtn.classList.remove("genderClicked");
  gender = "";
  rangeResult.remove("H2");
  displayResult.remove("H3");
  description.remove("H4");
  moreInfo.remove("p");
  extSrc.remove("a");
};

//Close window
reset.addEventListener("click", function () {
  closeWindow();
});
