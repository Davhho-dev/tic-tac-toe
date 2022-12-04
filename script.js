const Player = (name, symbol, currentPlayer) => {
    return {name, symbol, currentPlayer};
}

const gameBoard = (() => {
    const playerOne = Player("p1", "X", true);
    const playerTwo = Player("p2", "O", false);
    let board = ["", "", "", "", "", "", "", "", ""];
    let round = 1;
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

    console.log(playerOne.currentPlayer);
    const playRound = (() => {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                if(playerOne.currentPlayer && cell.innerHTML == "") {
                    board[e.target.id] = playerOne.symbol;
                    cell.innerHTML = playerOne.symbol;
                    playerOne.currentPlayer = false;
                    playerTwo.currentPlayer = true;
                }else if(playerTwo.currentPlayer && cell.innerHTML == "") {
                    board[e.target.id] = playerTwo.symbol;
                    cell.innerHTML = playerTwo.symbol;
                    playerTwo.currentPlayer = false;
                    playerOne.currentPlayer = true;
                }else return;
            })
        });
    })();

    return {cells};
   
})();