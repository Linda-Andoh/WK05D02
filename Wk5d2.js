// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function buildFrequency(word) {
    const frequencies = {};
    for (let i = 0; i < word.length; i++){
        let char = word[i];
        if (frequencies[char] == undefined) {
            frequencies[char] = 0;
        }
        frequencies[char]= frequencies[char] + 1;
    }
    return frequencies; 
}
function validAnagram(first, second) {
    if (first.length != second.length) {
        return false;
    }
    let frequency1 = buildFrequency(first);
    
    let frequency2 = buildFrequency(second);
    
    for (let i = 0; i < first.length; i++) {
        let char = first[i];
        
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }
    return true;
}


 //console.log(validAnagram('first', 'tsrif')); //true
 //console.log(validAnagram('Mean', 'TIME')); // false 
 //console.log(validAnagram('instagram', 'margatsni')); // true
 //console.log(validAnagram('dog', 'human'));// false
// console.log(validAnagram('problems', 'solution')) // false