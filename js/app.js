//App state global variables
//Indicating the length of the words
var width = 5;
//Number of guesses for the user
var height = 6;

var row = 0;

var col = 0;
var gameOver = false;

//Hardcode a solution word
var solution = 'start';

//Creating game board with array that store multiple items

const board = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
]
//Create div elements and adding tile with double loop 
for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
        //Create <div></div>
        let tile = document.createElement("div");
        //Create <div id='0-0'></div>
        tile.id = r + "-" + c;
        //Adding tile to classList
        tile.classList.add("tile");
        //Empty string means letter will assign when users input a letter
        tile.innerText = "";
        //
        document.getElementById("board").appendChild(tile);
    }
}
//Dom Selector -- add event listener when user click!
document.getElementById('keyboard-container').addEventListener('click', (event) => {

    //select the current tile with id of row-col -- currTile is global variable
    let currTile = document.getElementById(`${row}-${col}`)
    //When user click enter button on-Screen keyboard
    if (event.target.innerText === 'ENTER') {
        //An object that combine letters and prevent to go next row when enter button clicked
        let userGuess = board[row - 1].join('').toLowerCase()
        //console.log('here', userGuess)

        if (userGuess === solution) {
        }
        //Invoke the checkTileColor when user guessed right the solution
        checkTileColor(userGuess)


    } else {
        //Print letter to current tile
        board[row][col] = event.target.innerText
        //Change the inner text to what letter user clicked
        currTile.innerText = board[row][col];

        // if col > width we know that we need to make new row 
        col++;
        if (col > 4) {
            row++;
            col = 0;
        }

    }

    //Check board if current letter match the letter solution
    function checkTileColor(userWord) {
        //Local variable checks tiles with for loop
        let checkTile;
        //Loop thru row
        for (let r = 0; r < width; r++) {
            //While looping, check with div id
            checkTile = document.getElementById(`${row - 1}-${r}`)
            // if so change the tile to green
            if (userWord[r] === solution[r]) {
                checkTile.classList.add("green")

                //else if letter is in the current row -- yellow
            } else if (solution.includes(userWord[r])) {

                checkTile.classList.add("yellow")

                //else make it grey
            } else {

                checkTile.classList.add("grey")
            }
        }
    }

})


