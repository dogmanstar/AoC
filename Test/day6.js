let infoArray = [2,5,2,3,5,3,5,5,4,2,1,5,5,5,5,1,2,5,1,1,1,1,1,5,5,1,5,4,3,3,1,2,4,2,4,5,4,5,5,5,4,4,1,3,5,1,2,2,4,2,1,1,2,1,1,4,2,1,2,1,2,1,3,3,3,5,1,1,1,3,4,4,1,3,1,5,5,1,5,3,1,5,2,2,2,2,1,1,1,1,3,3,3,1,4,3,5,3,5,5,1,4,4,2,5,1,5,5,4,5,5,1,5,4,4,1,3,4,1,2,3,2,5,1,3,1,5,5,2,2,2,1,3,3,1,1,1,4,2,5,1,2,4,4,2,5,1,1,3,5,4,2,1,2,5,4,1,5,5,2,4,3,5,2,4,1,4,3,5,5,3,1,5,1,3,5,1,1,1,4,2,4,4,1,1,1,1,1,3,4,5,2,3,4,5,1,4,1,2,3,4,2,1,4,4,2,1,5,3,4,1,1,2,2,1,5,5,2,5,1,4,4,2,1,3,1,5,5,1,4,2,2,1,1,1,5,1,3,4,1,3,3,5,3,5,5,3,1,4,4,1,1,1,3,3,2,3,1,1,1,5,4,2,5,3,5,4,4,5,2,3,2,5,2,1,1,1,2,1,5,3,5,1,4,1,2,1,5,3,5,2,1,3,1,2,4,5,3,4,3];
let testArray = [1,1,1,3,5,5,];
function doTheDirty(array, days) {
    for (let i = 0; i < days; i++) {
        let spawn = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > 0) {
                array[j]--;
            }
            else {
                array[j] = 6;
                spawn++;
            }
        }
        if (spawn > 0) {
            for (let k = 0; k < spawn; k++) {
                array.push(8);
            }
        }
        console.log(array.length + ' after ' + (i+1) ,' days.');
        testArray.sort((a, b) => a-b);
        console.log(testArray);
    }
}
//testArray.sort((a, b) => a-b);
//console.log(testArray);
//doTheDirty(testArray, 10);
//infoArray.sort((a, b) => a - b);
//console.log(infoArray);

let smartArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function fillSmartArray(array) {
    for (let i = 0; i < array.length; i++) {
        let x = array[i];
        smartArray[x]++;
    }
}
console.log(testArray);
fillSmartArray(infoArray);
console.log(smartArray);

function makeSimpleBabies(array, days) {
    for (let i = 1; i <= days; i++) {
        let x = array.shift();
        array[6] += x;
        array.push(x);
        console.log('after ' + i);
        console.log(array);
    }
}

function addUpBabies(array) {
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        x += array[i];

    }
    console.log(x);
}

makeSimpleBabies(smartArray, 256);
addUpBabies(smartArray);

