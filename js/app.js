// App state variables
//the length of the words
var width = 5;
//number of guesses
var height = 6;

var row = 0;

var col = 0;
var gameOver = false;

//hardcode a solution
var solution = 'start';
//Creating gameboard

   const board = [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ']
            ]

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("div");
            tile.id = r + "-" + c;
            tile.classList.add("tile");
            
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

document.getElementById('keyboard-container').addEventListener('click', (event) => {
   
    //select the tile with id of row-col 
    let currTile = document.getElementById(`${row}-${col}`)
    console.log(currTile, 'currtileeee')
    // currTile.style.border = 'orange solid 2px'
    
    if(event.target.innerText === 'ENTER'){
        let userGuess =  board[row -1].join('').toLowerCase()

        if(userGuess === solution){
        }
        console.log(board[row - 1])
        checkTileColor(userGuess) 
        
    // } else if (event.target.innerText === 'DEL'){
    //     let deleteTile = document.getElementById(`${row}-${col -1}`)
    //     if(deleteTile){
    //         //clear the inside of the tile
    //         deleteTile.innerText = ''
    //         col -= 1
    //         //reassign currTile to the tile has been delete
    //         currTile = deleteTile
    
    //     }
    
    // // console.log(currTile, "any", board, 'boardelete')
    
} else {
    board[row][col] = event.target.innerText
    
    
    console.log(currTile, 'tile');
    // change the inner text to what letter user clicked
    currTile.innerText = board[row][col];
    console.log(currTile.innerText, 'text');
 
}
//check board if current letter is matching the letter solution
  function checkTileColor(userWord){
      for(let r = 0; r < width; r++){
    // if so change the tile to green
    if(userWord[r] === solution[r]){
        currTile.classList.add("green")
        console.log('solutiongreen', board[r-1])
        //else if letter is in the current row -- yellow
    } else if(solution.includes(userWord[r])){

        currTile.classList.add("yellow")

        //else make it grey
    } else {

        currTile.classList.add("grey")
      }
 }
} 
// checkTileColor()
                  
 // if col > width we know that we need to make new row 
            
    col++;
    if (col > 4) {
    row++;
    col = 0;
    } 
    console.log(board);
          
})


