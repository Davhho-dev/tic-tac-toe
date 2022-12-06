const Player = (name, symbol, currentPlayer) => {
    return {name, symbol, currentPlayer};
}

const gameBoard = (() => {
    const cells = document.querySelectorAll(".cell");
    const reset = () => {
        cells.forEach((cell) => {
            cell.innerHTML = "";
        })
    }
    
    const update = () => {
        cells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                if(cell.innerHTML === "" && gameController.playerOne.currentPlayer) {
                    cell.innerHTML = gameController.current();
                    cell.style.color = "rgb(0, 132, 255)";
                    gameController.playerOne.currentPlayer = false;
                    gameController.playerTwo.currentPlayer = true;
                }else if(cell.innerHTML === "" && gameController.playerTwo.currentPlayer) {
                    cell.innerHTML = gameController.current();
                    cell.style.color = "rgb(255, 79, 79)";
                    gameController.playerTwo.currentPlayer = false;
                    gameController.playerOne.currentPlayer = true;
                }
                displayController.current();
                // console.log(index);
            })
        });
    }
    return {reset, update};
})();

const displayController = (() => {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    p1.style.color = "green";
    gameBoard.update();
    const current = () => {
        if(gameController.current() === "X") {
            console.log(gameController.playerOne);
            p1.setAttribute("style", "color: green; font-size: 4rem");
            p2.setAttribute("style", "color: black; font-size: 3.5rem");
        }else {
            console.log(gameController.playerTwo);
            p2.setAttribute("style", "color: green; font-size: 4rem");
            p1.setAttribute("style", "color: black; font-size: 3.5rem");
        }
    }
    return {current};
})();

const gameController = (() => {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const playerOne = Player("p1", "X", true);
    const playerTwo = Player("p2", "O", false);
    let symbol = "";

    const current = () => {
        if(playerOne.currentPlayer) {
            return symbol = playerOne.symbol;
        }else {
            return symbol = playerTwo.symbol;
        }
    }

return{current, playerOne, playerTwo};
})();

// const gameBoard = (() => {
//     const playerOne = Player("p1", "X", true);
//     const playerTwo = Player("p2", "O", false);
//     let board = ["", "", "", "", "", "", "", "", ""];
//     let round = 1;
//     const winCombination = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     const p1 = document.getElementById("p1");
//     p1.setAttribute("style", "font-size: 4rem; color: rgb(0, 132, 255)");
//     const p2 = document.getElementById("p2");
//     const playRound = (() => {
//         const cells = document.querySelectorAll(".cell");
//         cells.forEach((cell) => {
//             cell.addEventListener("click", (e) => {
//                 if(playerOne.currentPlayer && cell.innerHTML == "") {
//                     board[e.target.id] = playerOne.symbol;
//                     cell.innerHTML = playerOne.symbol;
//                     cell.style.color = "rgb(0, 132, 255)";
//                     playerOne.currentPlayer = false;
//                     playerTwo.currentPlayer = true;
//                     console.log(board);
//                     round++;
//                     if(round <= 9) {
//                         p1.setAttribute("style", "font-size: 3.5rem; color: black");
//                         p2.setAttribute("style", "font-size: 4rem; color: rgb(255, 79, 79)");
//                     }else {
//                         p1.setAttribute("style", "font-size: 3.5rem; color: black");
//                         p2.setAttribute("style", "font-size: 3.5rem; color: black");
//                     }
//                 }else if(playerTwo.currentPlayer && cell.innerHTML == "") {
//                     board[e.target.id] = playerTwo.symbol;
//                     cell.innerHTML = playerTwo.symbol;
//                     cell.style.color = "rgb(255, 79, 79)";
//                     playerTwo.currentPlayer = false;
//                     playerOne.currentPlayer = true;
//                     console.log(board);
//                     round++;
//                     if(round <= 9) {
//                         p2.setAttribute("style", "font-size: 3.5rem; color: black");
//                         p1.setAttribute("style", "font-size: 4rem; color: rgb(0, 132, 255)");
//                     }else {
//                         p2.setAttribute("style", "font-size: 3.5rem; color: black");
//                         p1.setAttribute("style", "font-size: 3.5rem; color: black");
//                     }
//                 }else return;
//             })
//         });
//     })();

//     return {playRound, playerOne, playerTwo, round};   
// })();
