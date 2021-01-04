/****************************
 * Base Example

const johnMass = [92, 85];
const johnHeight = [1.95, 1.76];

const markMass = [78, 95];
const markHeight = [1.69, 1.88];

let johnBMI01 = johnMass[0] / (johnHeight[0] * johnHeight[0]);
let johnBMI02 = johnMass[1] / (johnHeight[1] * johnHeight[1]);

let markBMI01 = markMass[0] / (markHeight[0] * markHeight[0]);
let markBMI02 = markMass[1] / (markHeight[1] * markHeight[1]);

if (johnBMI01 > markBMI01) {
  console.log(
    `John's BMI ${johnBMI01} is higher than Mark's BMI ${markBMI01}!`
  );
} else {
  console.log(
    `Mark's BMI ${markBMI01} is higher than John's BMI ${johnBMI01}!`
  );
}

if (johnBMI02 > markBMI02) {
  console.log(
    `John's BMI ${johnBMI02} is higher than Mark's BMI ${markBMI02}!`
  );
} else {
  console.log(
    `Mark's BMI ${markBMI02} is higher than John's BMI ${johnBMI02}!`
  );
}


*/
