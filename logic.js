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
let gender;
let range;
let rangeResult;
let descrResult;

//Starting Conditions
userWeight.textContent = 0;
userAge.textContent = 0;
userHeight.textContent = 0;

//Funtions to open and close results window
const openWindow = function () {
  windowResults.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeWindow = function () {
  windowResults.classList.add("hidden");
  overlay.classList.add("hidden");
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
    let heightMts = userHeight.value / 100;
    let resultBMI = userWeight.value / (heightMts * heightMts);
    console.log(resultBMI.toFixed(1));
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

    //Create function to display results
    function funcResults() {
      //Display range underweight
      rangeResult = document.createElement("H2");
      rangeResult.innerHTML = `${range}`;
      rangeResult.style.color = "#E81D58";
      document.querySelector(".resultsWindow").appendChild(rangeResult);
      //Display number result
      let displayResult = document.createElement("H3");
      displayResult.innerHTML = `${resultBMI.toFixed(1)}`;
      document.querySelector(".resultsWindow").appendChild(displayResult);
      //Display description
      let description = document.createElement("H4");
      description.innerHTML = `${descrResult}`;
      description.style.color = "black";
      document.querySelector(".resultsWindow").appendChild(description);
      //Display More Info with link
      let moreInfo = document.createElement("P");
      moreInfo.innerHTML = `For more information click here: `;
      moreInfo.classList.add("externalInfo");
      document.querySelector(".resultsWindow").appendChild(moreInfo);
      let extSrc = document.createElement("a");
      extSrc.setAttribute("href", "google.com");
      extSrc.innerHTML = "google.com";
      document.querySelector(".externalInfo").appendChild(extSrc);
    }

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
    //Display result
    let displayResult = document.createElement("H2");
    displayResult.innerHTML = `${underageBMI.toFixed(0)}th`;
    document.querySelector(".resultsWindow").appendChild(displayResult);
  }

  //Close window
  reset.addEventListener("click", function () {
    closeWindow();
  });
});
