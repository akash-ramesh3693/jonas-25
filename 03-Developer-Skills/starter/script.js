// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// we work for a company building a smart home thermometer
//our most recent task is this: Given an array of temperatures of one day.
//calculate the temperature amplitude. keep in mind that
//some times there might be a sensor error.

const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1.understanding the problem!
//-what is temp amplitude? Answer: difference
//between highest and lowest temp.
//-how to compute max and  min temperatures?
//whats as sensor error? and what to do.

//2.breaking up into sub-problems
//1.how to ignore error?
//-.find max value in temp array
//-find min value in temp array
//-subtract min from max ( amplitude) and return it.

const calcTempAmplitude = function (temp) {
  let min = temp[0];
  let max = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const currTemp = temp[i];
    if (typeof currTemp !== "number") continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temp);
console.log(amplitude);
