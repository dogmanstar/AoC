import { infoArray } from "./day7info.js";

//let highestNum = Math.max(...infoArray);

let testArray = [0, 1, 2, 4, 7];

let highestNum = infoArray.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);
let fuelUseArray = [];

infoArray.sort((a, b) => a - b);

function findFuelUse(infoArray, highestNum, fuelUseArray) {
    for (let i = 0; i <= highestNum; i++) {
        let totalFuel = 0;
        for (let j = 0; j < infoArray.length; j++) {
            let indexFuel = 0;
            let extraIndexFuel = 0;
            indexFuel = Math.abs(infoArray[j] - i);
             if (indexFuel > 0) {
                 for (let k = indexFuel; k > 0; k--) {
                     extraIndexFuel += k;
                 }
             }
            totalFuel += extraIndexFuel;
        }
        fuelUseArray.push(totalFuel);
        //console.log(fuelUseArray);
    }
    console.log(fuelUseArray);
}

console.log(highestNum + ' is the highest number');

findFuelUse(infoArray, highestNum, fuelUseArray);

fuelUseArray.sort((a, b) => a - b);

console.log(fuelUseArray);