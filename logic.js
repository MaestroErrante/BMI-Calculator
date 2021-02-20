"use strict";
//Selecting Elements
const userWeight = document.querySelector(".weight");
const userAge = document.querySelector(".age");
const userHeight = document.querySelector(".height");
const maleBtn = document.querySelector(".btnMale");
const femaleBtn = document.querySelector(".btnFemale");
const answerBtn = document.querySelector(".answerButton");

//Starting Conditions
userWeight.textContent = 0;
userAge.textContent = 0;
userHeight.textContent = 0;
let gender;
