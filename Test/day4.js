import { infoArray, boardArray } from "./day4info.js";

let arrayOfBoards = [];

let reduceBySum = (a, b) => a + b;

class board {
    constructor(array) {
        this.numsOnBoard = array;
        this.sumRemaining = this.numsOnBoard.reduce(reduceBySum);
        this.calledBitMap = 0;
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
    console.log('in pullNumbers');
    for (let j = 0; j < infoArray.length; j++) {
        let endTheLoop = false;
        endTheLoop = testAllBoards(infoArray[j], arrayOfBoards);
        if (endTheLoop == true) {
            console.log('oops');
            break;
        }
    }
}

function testAllBoards(checkNum, arrayOfBoards) {
    console.log('in testAllBoards');
    let stopLoop = false;
    for (let k = 0; k < arrayOfBoards.length; k++) {
        stopLoop = arrayOfBoards[k].testBoard(checkNum);
        if (stopLoop == true) {
            return stopLoop;
        }
    }
    return stopLoop;
}

// let board1 = new board(boardArray[0]);
// console.log(board1);
// board1.testBoard(7);
// board1.testBoard(50);
// board1.testBoard(8);
// board1.testBoard(99);
// board1.testBoard(16);
// board1.testBoard(20);
// board1.testBoard(36);


createBoards(boardArray);
console.log(arrayOfBoards);
pullNumbers(infoArray, arrayOfBoards);




// function makeboards(array) {
//     for (let i = 0; i < array.length; i += 5) {
//         let tempArray = [];
//         for (let j = 0; j < 5; j++) {
//             tempArray.push(array[i+j]);
//         }
//         boards.push(tempArray);
//     }
// }

// function loopThroughCalledNum(infoArray, boards) {
//     for (let i = 0; i < infoArray.length; i++) {
//         let callNum = infoArray[i];
//         let score = 0;

//         modifyBoards(callNum, boards);
//         score = testForWin(boards);
//         if (score > 0) {
//             console.log(score * callNum);
//             break;
//         }
//     }
// }

// function testForWin(boards) {
//     for (let j = 0; j < boards.length; j++) {
//         let winCondition = testBoard(boards[j]);
//         if (winCondition > 0) {
//             return winCondition;
//         }
//     }
//     return 0;
// }

// function testBoard(board) {
//     let uncalledTotal = 0;

//     for (let k = 0; k < board.length; k++) {
//         let x = 0;
//         for (let l = 0; l < board[k].length;) {
//             x += board[k][l];
//         }
//         if (x == -5) {
//             uncalledTotal = sumUncalledNums(board);
//             return uncalledTotal;
//         }
//     }
//     for (let m = 0; m < board.length; m++) {
//         let x = 0;
//         for (let n = 0; n < board[m].length;) {
//             x += board[n][m];
//         }
//         if (x == -5) {
//             uncalledTotal = sumUncalledNums(board);
//             return uncalledTotal;
//         }
//     }
//     return 0;
// }

// function sumUncalledNums(board) {
//     let total = 0;
//     for (let p = 0; p < board.length; p++) {
//         for (let q = 0; q < board[p].length; q++) {
//             if (board[p][q] >= 0) {
//                 total += board[p][q];
//             }
//         }
//     }
//     return total;
// }

// function modifyBoards(callNum, boards) {
//     for (let j = 0; j < boards.length; j++) {
//         for (let k = 0; k < boards[j].length; k++) {
//            for (let l = 0; l < boards[j][k].length; l++) {
//                if (boards[j][k][l] === callNum) {
//                    boards[j][k][l] = -1;
//                }
//            }
//             // console.log(boards[j][k]);
//         }
//     }
// }

// makeboards(boardArray);
// loopThroughCalledNum(infoArray,boards);
// console.log(boardArray.length);
// console.log(boards[6]);
// console.log(infoArray.length + ' infoArray');

//console.log(boards);

