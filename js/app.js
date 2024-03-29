//App state global variables
let width = 5;
let height = 6;
let row = 0;
let col = 0;
//Hardcode an example solution word
let solution = "start";

//Create game board with array that store multiple items

let board = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];
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
// Get the button that opens the dropdown
var instructionsBtn = document.getElementById("instructionsBtn");

// Get the div that contains the instructions
var instructionsDiv = document.getElementById("instructions");

// Add an event listener to the button that toggles the visibility of the instructions div
instructionsBtn.addEventListener("click", function () {
  if (instructionsDiv.style.display === "none") {
    instructionsDiv.style.display = "block";
  } else {
    instructionsDiv.style.display = "none";
  }
});

//Event listener when user click!
document
  .getElementById("keyboard-container")
  .addEventListener("click", (event) => {
    //Select the current tile with id of row-col -- currTile is initial variable
    let currTile = document.getElementById(`${row}-${col}`);
    //When user click enter button on-Screen keyboard
    if (event.target.innerText === "ENTER") {
      if (row > 5) {
        document.getElementById("wrong").innerText = "You Lost!";
        setTimeout(resetGame, 6000);
      } else {
        //Make board row to string
        console.log("row", row, "col", col);
        let userGuess = board[row - 1].join("").toLowerCase();
        //console.log('here', userGuess)

        if (userGuess === solution) {
          document.getElementById("youWin").innerText = "You Won!";
          // resetGame()
          setTimeout(resetGame, 6000);
        }
        checkTileColor(userGuess);
      }
    } else {
      if (row > 5) {
        document.getElementById("wrong").innerText = "You Lost!";
        setTimeout(resetGame, 6000);
      } else {
        //Print letter to current tile
        board[row][col] = event.target.innerText;
        //Change the inner text to what letter user clicked
        currTile.innerText = board[row][col];

        // if col > width we know that we need to make new row
        col++;
        if (col > 4) {
          row++;
          col = 0;
        }
      }
    }

    //Check board if current letter match the letter solution
    function checkTileColor(userWord) {
      //Local variable checks tiles with for loop
      let checkTile;
      //Loop thru row
      for (let r = 0; r < width; r++) {
        //While looping, check with div id
        checkTile = document.getElementById(`${row - 1}-${r}`);
        //If so change the tile to green
        if (userWord[r] === solution[r]) {
          checkTile.classList.add("green");

          //else if letter is in the current row -- yellow
        } else if (solution.includes(userWord[r])) {
          checkTile.classList.add("yellow");

          //else make it grey
        } else {
          checkTile.classList.add("grey");
        }
      }
    }
  });

document.getElementById("reset").addEventListener("click", resetGame);

//Reset game function
function resetGame() {
  //Reset col-row to zero
  col = 0;
  row = 0;

  //Clear board array
  board = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  //reset all of tiles
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      //clear the tile text
      document.getElementById(`${r}-${c}`).innerText = "";
      //clear tile background color
      document
        .getElementById(`${r}-${c}`)
        .classList.remove("green", "grey", "yellow");
    }
  }

  //Clear the messages -- You Won, You Lost --
  document.getElementById("youWin").innerText = "";
  document.getElementById("wrong").innerText = "";
}
