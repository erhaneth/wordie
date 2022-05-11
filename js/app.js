// App state variables
//the length of the words
var width = 5;
//number of guesses
var height = 6;
//current guess
var row = 0;
//current letter
var col = 0;
var letter = 0;

var gameOver = false;
//hardcode a solution
var solution = 'start';
var word = solution.length;




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
    console.log(row, col, 'board');
    // console.log(board, 'board');
    //select the tile with id of row-col 
    let currTile = document.getElementById(`${row}-${col}`)
    if(event.target.attributes['data-key'].nodeValue === 'enter'){
        const userGuess =  board[row].join('')
        if(userGuess === solution){
            console.log('Correct')
        }
        
        
    } else if (event.target.attributes['data-key'].nodeValue === 'dlt'){
        let deleteTile = document.getElementById(`${row}-${col -1}`)
        //clear the inside of the tile
        deleteTile.innerText = ''
        //reassign currTile to the tile has been delete
        currTile = deleteTile 

        console.log(deleteTile.innerText)
    }else {
        board[row][col] = event.target.attributes['data-key'].nodeValue

    
        console.log(currTile, 'tile');
        // change the inner text to what letter user clicked
        currTile.innerText = board[row][col];
        console.log(currTile.innerText, 'text');
    }  
    
    
    
    
    //check board if current letter is matching the letter solution
    
    //     for(let c = 0; c < width; c++)
    //     //let currTile = document.getElementById(`${row}-${col}`)

    // }
        // // if so change the tile to green
        // if(word === letter){
        //     tile.classList.add("green")

        //     //else if letter is in the current row -- yellow
        // } else if(word.includes(letter)){
        //     tile.classList.add("yellow")

        //     //else make it grey
        // } else {
        //     tile.classList.add("grey")
        // }
    



    col++
    // if col > width we know that we need to make new row 
     if(col > 5){
         row++
         col = 0;
     }
    console.log(board);


})


