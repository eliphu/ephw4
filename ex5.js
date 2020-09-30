word = prompt("Enter a word");
vowels = 0;
pali = 0;
for (i = 0; i < word.length; i++){
    if (word[i] == "a"){
        vowels++;
    }
    else if(word[i] == "e"){
        vowels++;
    }
    else if(word[i] == "i"){
        vowels++;
    }
    else if(word[i] == "o"){
        vowels++;
    }
    else if(word[i] == "u"){
        vowels++;
    }
    else if(word[i] == "y"){
        vowels++;
    }
    if (word[i] != word[word.length - 1 - i]){
        pali++;
    }
}
if (pali == 0){
    console.log(word, " contains ", vowels, "vowels and is a palindrome");
}
else{
    console.log(word, " contains ", vowels, "vowels and is not a palindrome");
}