num = Math.floor(Math.random() * 101);
guess = -1;
count = 0;
while (guess != num){
    guess = Number(prompt("Guess the number"));
    count++;
}
console.log("Correct! It took you ", count, " attempt(s) to guess the correct number.")