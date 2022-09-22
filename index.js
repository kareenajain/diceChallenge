// For 1st dice

var randomNumber1 = Math.ceil(Math.random() * 6);// random nos 1-6

var randomimgsrc = "images/dice" + randomNumber1 + ".png" //  /images/dice1.png - /images/dice6.png  

var img1 = document.querySelectorAll("img")[0];// seleting the dice

img1.setAttribute("src", randomimgsrc);// changing the source


//For 2nd dice

var randomNumber2 = Math.ceil(Math.random() * 6);//random nos 1-6

var randomimgsrc2 = "images/dice" + randomNumber2 + ".png";//  /images/dice1.png - /images/dice6.png  

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomimgsrc2);



//if Player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
//if player 2 wins
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
//if its a draw
else {
    document.querySelector("h1").innerHTML = "Draw!"
}




