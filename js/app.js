window.onload = function() {
    setGame();
}
//creating board with for loop
function setGame() {
    board = [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
            ]

    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 6; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            
            tile.innerText = "";
           // tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}