import { infoArray, boardArray } from "./day4info.js";

let arrayOfBoards = [];

let reduceBySum = (a, b) => a + b;

class board {
    constructor(array) {
        this.numsOnBoard = array;
        this.sumRemaining = this.numsOnBoard.reduce(reduceBySum);
        this.calledBitMap = 0;
        this.pullFromTest = false;
    }

    testBoard(checkNum) {
        let numMatch = false;
        let winningBoard = false;

        for (let i = 0; i < this.numsOnBoard.length; i++) {
            if (this.numsOnBoard[i] === checkNum) {
                numMatch = true;
                this.sumRemaining -= checkNum;
                this.tickMarkAtIndex(i);
                break;
            }
        }
        if (numMatch === true) {
            winningBoard = this.testForWin();
            if (winningBoard === true) {
                this.pullFromTest = true;
                console.log('Sum of remaining numbers is ' + this.sumRemaining);
                console.log('Winning number is ' + checkNum);
                let score = (this.sumRemaining * checkNum);
                console.log('Score of winning board is ' + score);
            }
        }
        return winningBoard;
    }

    tickMarkAtIndex(index) {
        let x = (2 ** index);
        this.calledBitMap = this.calledBitMap | x;
    }

    testForWin() {
        if ((this.calledBitMap & 31) === 31) {
            return true;
        }
        else if ((this.calledBitMap & 992) === 992) {
            return true;
        }
        else if ((this.calledBitMap & 31744) === 31744) {
            return true;
        }
        else if ((this.calledBitMap & 1015808) === 1015808) {
            return true;
        }
        else if ((this.calledBitMap & 32505856) === 32505856) {
            return true;
        }

        else if ((this.calledBitMap & 1082401) === 1082401) {
            return true;
        }
        else if ((this.calledBitMap & 2164802) === 2164802) {
            return true;
        }
        else if ((this.calledBitMap & 4329604) === 4329604) {
            return true;
        }
        else if ((this.calledBitMap & 8659208) === 8659208) {
            return true;
        }
        else if ((this.calledBitMap & 17318416) === 17318416) {
            return true;
        }
        else {
            return false;
        }
    }
}

function createBoards(array) {
    for (let i = 0; i < array.length; i++) {        
        arrayOfBoards.push(new board(array[i]));
    }
}

function pullNumbers(infoArray, arrayOfBoards) {
    for (let j = 0; j < infoArray.length; j++) {
        testAllBoards(infoArray[j], arrayOfBoards);
    }
}

function testAllBoards(checkNum, arrayOfBoards) {
    for (let k = 0; k < arrayOfBoards.length; k++) {
        if (arrayOfBoards[k].pullFromTest === false) {
            arrayOfBoards[k].testBoard(checkNum);
        }
    }
}

createBoards(boardArray);
console.log(arrayOfBoards);
pullNumbers(infoArray, arrayOfBoards);