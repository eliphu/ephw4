word = "";
bank = [];
while (word.toUpperCase() != "STOP"){
    word = prompt("Enter a word");
    if (word.toUpperCase() != "STOP") {
        bank.push(word);
    }
}
if (bank.length == 0){
    console.log("No words to display. Stop was the first word");
}
else{
    console.log("You entered the following words: ");
    for (i = 0; i < bank.length; i++){
        console.log(bank[i]);
    }
}