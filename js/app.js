//App state global variables
//Indicate the length of the words
let width = 5;
//Number of guesses for the user
let height = 6;

let row = 0;

let col = 0;
//Hardcode a solution word
let solution = 'start';

//Create game board with array that store multiple items

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
        //Adding the class "tile" to tile div
        tile.classList.add("tile");
        //Empty string means letter will assign when users input a letter
        tile.innerText = "";
        //Adding 30 tiles divs to parent boards
        document.getElementById("board").appendChild(tile);
    }
}
//Event listener when user click!
document.getElementById('keyboard-container').addEventListener('click', (event) => {

    //Select the current tile with id of row-col -- currTile is initial variable
    let currTile = document.getElementById(`${row}-${col}`)
    //When user click enter button on-Screen keyboard
    if (event.target.innerText === 'ENTER') {
        //Make board row to string
        let userGuess = board[row - 1].join('').toLowerCase()
        //console.log('here', userGuess)

        if (userGuess === solution) {
            document.getElementById('youWin').innerText = "You Got It!"
            console.log("You Got It!")
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
            //If so change the tile to green
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
    

    document.querySelector('reset-button').addEventListener('click', handleClick);
    function handleClick(){
        console.log('clicked here');
    }
})


