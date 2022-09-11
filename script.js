//console.log("script running....")
const wordsArray = ["bracelet", "laptop", "automatic", "passionfruit", "risky"]
let wordChosenSplit = [];
let currentArray = [];

let attempts = 10;
let winCount = 0;
let loseCount = 0;

function setWord() {
    wordChosenSplit = [];
    currentArray = [];

    //let wordChosen = "";
    const rand = Math.floor(Math.random() * wordsArray.length);
    const wordChosen = wordsArray[rand];
    //wordChosen += randChar;

    wordChosenSplit = wordChosen.split('');
    //console.log(chars);

    console.log("***", wordChosenSplit);

    //const underscoreLength = wordChosenSplit.length;
    for (let index = 0; index < wordChosenSplit.length; index++) {
        currentArray.push(
            "_"
        );
    };

    document.querySelector(".word-blanks").textContent = currentArray.join(" ");
}

const start = document.querySelector(".start-button");
start.addEventListener("click", setWord);


window.addEventListener("keydown", (event) => {
    console.log(event.key);

    // get chosen leter store in variable
    var chosenKey = event.key;
    console.log("wordChosenSplit", wordChosenSplit);
    console.log("currentArray", currentArray);

    for (let i = 0; i < wordChosenSplit.length; i++) {
        // check for wordChosenSplit[i] matches with chosenkey
        if (chosenKey === wordChosenSplit[i]) {
            // if it does match currentArray[i] set to chosen key
            currentArray[i] = chosenKey
        }
    }

    console.log("***wordChosenSplit", wordChosenSplit);
    console.log("***currentArray", currentArray);

    // show progress o nthe page see line 24
    document.querySelector(".word-blanks").textContent = currentArray.join(" ");

    // reduce attempt by 1
    attempts--;

    // show reduced attemps
    document.querySelector(".timer-count").textContent = attempts;
    // check if lose - if attempt is zero then reset the game
    if (attempts === 0) {
        // attemp go back to 10
        attempts = 10
        document.querySelector(".timer-count").textContent = attempts;
        // loose count is increased
        loseCount++
        document.querySelector(".lose").textContent = loseCount;
        // reset the game hint(setWord)
        setWord()
    }
    // check if win - if currentArray has no underscores "_"
    if (!currentArray.includes("_")) {
        // win add to wincount
        winCount++
        document.querySelector(".win").textContent = winCount;
        //attempts go back to 10
        attempts = 10
        document.querySelector(".timer-count").textContent = attempts;
        //reset the game
        setWord()
    }
})
