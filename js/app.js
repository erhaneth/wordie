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
//Creating  the board

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
    
     if(event.target.innerText === 'ENTER'){
        let userGuess =  board[row -1].join('').toLowerCase()

        if(userGuess === solution){
        }
        checkTileColor(userGuess) 
        
    
        } else {
        board[row][col] = event.target.innerText
        // change the inner text to what letter user clicked
        currTile.innerText = board[row][col];
        
        // if col > width we know that we need to make new row 
        col++;
        if (col > 4) {
        row++;
        col = 0;
        } 
      
     }
    
     //check board if current letter is matching the letter solution
     function checkTileColor(userWord){
      let checkTile
      for(let r = 0; r < width; r++){
        checkTile = document.getElementById(`${row-1}-${r}`)
     // if so change the tile to green
     if(userWord[r] === solution[r]){
        checkTile.classList.add("green")
       
     //else if letter is in the current row -- yellow
     } else if(solution.includes(userWord[r])){

        checkTile.classList.add("yellow")

     //else make it grey
     } else {

        checkTile.classList.add("grey")
        }
      }
     } 
         
})


