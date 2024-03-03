/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


//replace(/\s/g,'')-> replacing all the white space characters


/*SOLVED*/


function isAnagram(str1, str2) {
 
 str1 = perform(str1);
 str2 = perform(str2);

  // Check if the sorted strings are equal
  return str1===str2;
}

function perform(str){

  return str.replace(/\s/g,'').toLowerCase().split('').sort().join('');
}



module.exports = isAnagram;
