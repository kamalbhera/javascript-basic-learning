const isVowel = () => {
    const char = prompt("Please enter a character").toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char)
}

isVowel();