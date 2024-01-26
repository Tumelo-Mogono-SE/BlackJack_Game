let cards = [] //Used to store random numbers from variable which will be added.
let sum = 0 ;
let hasBlackJack = false; //this variable is used to control whether you can render the new card button.
let isAlive = false; // this variable is used to control whether you can render the new card button.
let message = ""; //this variable is used for later on to render new messages
let messageEl = document.getElementById("message-el");// Used to access elements from html
let sumEl = document.getElementById("sum-el"); // Used to access elements from html
let cardEl = document.getElementById("cards-el"); // Used to access elements from html
let player = {
    name : "Tumelo",
    chips : 145
}

/*The following two lines below fetch the paragaph with the id "player-el" and assigns it to a variable and then renders the name of the player with the dollar sign and chips from the player object*/
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips

/* 
*The following function below is created to generate a random number, which we have a variable which is assigned a random number between the values of 1-13.
*Then we have conditional statement which checks if the randomCard value is either equal to 1 or greater than 10, which will return the values assigned to each condition.
 */
function getRandomCard(){
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    if (randomCard === 1){
        return 11
    }else if (randomCard > 10){
        return 10
    }else{
        return randomCard;
    } 
}

/*
*This function is used to start the game and to push the display of the cards and sum using the renderGame function. 
 * first changes the booleen expression of isAlive variable to true to make the game start newCard function operatable.
 * Then we have two variable which generate random numbers which are passed into the cards array and sum variable to add them together.
 */
function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

/*
*This function is used to replace the contents inside the paragraph elements of id="card-el", "sum-el" and "message-el".It also check if the conditions are met for whether you want to draw a new card, you have won or you out of the game.
 * the for loop is used to add into the replaced content of "cards-el" paragraph the values inside the array index of cards from 0 to the lenght of the array in each iteration of the loop. 
 * The "sum-el" paragraph content is replaced with the value of a string plus the value of the string sum.
 * The "message-el" paragraph is replaced with the value of the condition thats true.
*/
function renderGame(){
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
  
    sumEl.textContent = "Sum: " + sum ;
    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack! ";
        hasBlackJack = true ;
    } else {
        message = "You're out of the game! ";
        isAlive = false ;
    }
    messageEl.textContent = message ;
}   

/*
 *The following function is used to add a new random card/number into the cards array and add the new random number into the sum and also call the renderGame function in order to display the new card array value and sum value and check which conditions are meet.
 *The if statement is used to check if the two condition are meet before allowing the codes inside it to function.
*/
function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let card = getRandomCard(); 
        sum += card;
        cards.push(card);
        renderGame();
    }
}

/* What I found difficult: In overall most of the concepts covered I had already done before using the freeCodeCamp three hour video which is an introduction to Javascript basics. What I struggled with during this mini-game development was putting together the different concepts into a functional app. But following along the explanations of putting together different concepts into ideas/functions it helped alot. I also struggled with putting logic together while trying to complete the task before he explained it to us.*/