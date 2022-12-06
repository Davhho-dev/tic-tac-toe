const Player = (name, symbol, currentPlayer) => {
    return {name, symbol, currentPlayer};
}

const gameBoard = (() => {
    const cells = document.querySelectorAll(".cell");
    const restart = document.querySelector("button");
    const playerWin = document.querySelector(".player-win");
    let board = ["", "", "", "", "", "", "", "", ""];
    
    const update = () => {
        cells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                if(cell.innerHTML === "" && gameController.playerOne.currentPlayer && !displayController.winner()) {
                    board[e.target.id] = gameController.current();
                    cell.innerHTML = gameController.current();
                    cell.style.color = "rgb(0, 132, 255)";
                    gameController.playerOne.currentPlayer = false;
                    gameController.playerTwo.currentPlayer = true;
                    displayController.winner();
                }else if(cell.innerHTML === "" && gameController.playerTwo.currentPlayer && !displayController.winner()) {
                    board[e.target.id] = gameController.current();
                    cell.innerHTML = gameController.current();
                    cell.style.color = "rgb(255, 79, 79)";
                    gameController.playerTwo.currentPlayer = false;
                    gameController.playerOne.currentPlayer = true;
                    displayController.winner();
                }
                displayController.current();
            })
        });
    }
    return {update, board};
})();

const displayController = (() => {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const playerWin = document.querySelector(".player-win");
    p1.style.color = "green"; //starts player one highlighted
    let winDeclared = false;

    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    gameBoard.update();

    const current = () => {
        if(gameController.current() === "X" && gameBoard.board.includes("") && !winDeclared) {
            p1.setAttribute("style", "color: green; font-size: 4rem");
            p2.setAttribute("style", "color: black; font-size: 3.5rem");
        }else if(gameController.current() === "O" && gameBoard.board.includes("") && !winDeclared) {
            p2.setAttribute("style", "color: green; font-size: 4rem");
            p1.setAttribute("style", "color: black; font-size: 3.5rem");
        }else {
            p1.setAttribute("style", "color: black; font-size: 3.5rem");
            p2.setAttribute("style", "color: black; font-size: 3.5rem");
        }
    };

    const winner = () => {
       winCombination.forEach((index) => {
            if(gameBoard.board[index[0]] === "X" && gameBoard.board[index[1]] === "X" && gameBoard.board[index[2]] === "X") {
                winDeclared = true;
                playerWin.innerHTML = "Player One Wins";
                playerWin.style.color = "rgb(0, 132, 255)";
            }else if(gameBoard.board[index[0]] === "O" && gameBoard.board[index[1]] === "O" && gameBoard.board[index[2]] === "O") {
                winDeclared = true;
                playerWin.innerHTML = "Player Two Wins";
                playerWin.style.color = "rgb(255, 79, 79)";
            }
        });
        return winDeclared;
    };
    return {current, winner, winDeclared};
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