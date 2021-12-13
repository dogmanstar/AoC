import { infoString } from "./testinfo.js";

// let forwardNum = 0;
// let vertNum = 0;


// function loopArray(a) {
//   for (let i = 0; i < (a.length - 1); i+=2) {
//     console.log(a[i]);
//     if (a[i] == 'forward') {
//        forwardNum += a[i+1];
//     }
//     else if (a[i] == 'down') {
//       vertNum += a[i+1];
//       console.log(vertNum);
//     }
//     else if (a[i] == 'up') {
//         vertNum -= a[i+1];
//         console.log(vertNum);
//       }
//   }
// }


// function winningNum(a, b) {
//     console.log(a * b);
// }

// //console.log(infoString);
// loopArray(infoString);
// winningNum(forwardNum, vertNum);

// let forwardPosition = 0;
// let downPosition = 0;
// let aim = 0;

// function loopAim(a) {
//     for (let i = 0; i < (a.length - 1); i+=2) {
//       console.log(a[i]);
//       if (a[i] == 'forward') {
//          forwardPosition += a[i+1];
//          let x = (a[i+1] * aim);
//          downPosition += x;
//       }
//       else if (a[i] == 'down') {
//         aim += a[i+1];
//         console.log(vertNum);
//       }
//       else if (a[i] == 'up') {
//           aim -= a[i+1];
//           console.log(vertNum);
//         }
//     }
//   }

//   loopAim(infoString);
//   winningNum(forwardPosition, downPosition);
//------------------------------------------------------
// let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// function countUpDown(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i].charAt(j) == 1) {
//           countArray[j] += 1;
//       }
//       else {
//           countArray[j] -= 1;
//       }
//     }
//   }
// }

// countUpDown(infoString);
// console.log(countArray);
//--------------------------------------------------------

function binaryToDec(binaryString) {
  let decNum = 0;
  for (let i = (binaryString.length - 1); i >= 0; --i) {
    let x = ((binaryString.length - 1) - i);
    if (binaryString.charAt(i) == 1) {
      decNum += (2 ** x);
    }
  }
  console.log(decNum);
  return decNum;
}

// function getRatings(array) {
//   let oxygenBin = '';
//   let coBin = '';
//   let output = 0;
//   let newArrayOne = [...array];
//   let newArrayTwo = [...array];
//   let a = 0;
//   let b = 0;

//   oxygenBin = oxygenRating(newArrayOne);
//   console.log(oxygenBin);

//   coBin = coRating(newArrayTwo);
//   console.log(coBin);

//   a = binaryToDec(oxygenBin);
//   b = binaryToDec(coBin);
//   console.log(a);
//   console.log(b);
//   output = a * b;
//   console.log(output);
// }

// function oxygenRating(array) {

//   for (let i = (array[0].length -1); i >= 0; i--) {
//     let countOnes = 0;
//     let countZeros = 0;

//     for (let j = 0; j < array.length; j++) {
//       if (array[j].charAt(11 - i) == 1) {
//         countOnes++;
//       }
//       else {
//         countZeros++;
//       }
//     }
//     if (countOnes >= countZeros) {
//       //cleanArray(workingArray, i, 0);
//       array = array.filter(k => k.charAt(11 - i) == 1);
//     }
//     else {
//       //cleanArray(workingArray, i, 1);
//       array = array.filter(k => k.charAt(11 - i) == 0);
//     }
//     console.log(i);
//     console.log(array);
//   }
//   return array[0];
// }

// function coRating(array) {

//     for (let i = (array[0].length -1); i >= 0; i--) {
//       let countOnes = 0;
//       let countZeros = 0;

//       for (let j = 0; j < array.length; j++) {
//         if (array[j].charAt(11 - i) == 1) {
//           countOnes++;
//         }
//         else {
//           countZeros++;
//         }
//       }
//       if (countOnes > 0 && countZeros > 0) {

//         if (countOnes >= countZeros) {
//           cleanArray(array, (11 - i), 1);
//         }
//         else if (countOnes < countZeros) {
//           cleanArray(array, (11 - i), 0);
//         }
//       }
//       //console.log(array);
//     }
//     console.log(array);
//     return array[0];
//   }

// function cleanArray(workingArray, place, removeNum) {
//   for (let k = (workingArray.length -1); k >= 0; k--) {
//     if (workingArray[k].charAt(place) == removeNum) {
//       workingArray.splice(k, 1);
//     }
//   }
// }

// getRatings(infoString);
// --------------------------------------------------------

