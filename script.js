let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomeImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomeImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomeImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomeImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🥇Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins!🥇";
} else {
  document.querySelector("h2").innerHTML = "Draw";
}
