//Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str='Take any string with minimum twenty characters. Count number of consonant and vowel in the string'
let vowel = 0;
let consonant = 0;

for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (/[aeiou]/.test(letter)) {
        vowel++;
    } else if (/[a-z]/.test(letter)) {
        consonant++;
    }
}
console.log("Vowels: ", vowel, "Consonants: ", consonant);
