function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
   str1 = perform(str1);
   str2 = perform(str2);

    // Check if the sorted strings are equal
    return str1===str2;
}

function perform(str){

    return str.replace(/\s/g,'').toLowerCase().split('').sort().join('');
}


// Example usage:
const string1 = "School    MASTER";
const string2 = "The ClassROOM";

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
