// App state variables
//the length of the words
var width = 5;
//number of guesses
var height = 6;
//current guess
var row = 0;
//current letter
var col = 0;

var gameOver = false;
//hardcode a solution




   const board = [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
            ]

    for (let r = 0; r < width; r++) {
        for (let c = 0; c < height; c++) {
            let tile = document.createElement("div");
            tile.id = r + "-" + c;
            tile.classList.add("tile");
            
            tile.innerText = "";
           // tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
        }
    }


document.getElementById('keyboard-container').addEventListener('click', (event) => {
    console.log(event.target.attributes['data-key'].nodeValue);
    board[row][col] = event.target.attributes['data-key'].nodeValue
    //select the tile with id of row-col 
    // change the inner text to what letter user clicked
    //check board if current letter is matching the letter solution
        // if so change the tile to green
        //else if letter is in the current row -- yellow
        //else make it grey

    col++
    // if col > width we know that we need to make new row 
     if(col === 5){
         row++
         col = 0;
     }
    console.log(board);


})