/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

/*SOLVED*/

 function isVowel(char){


  return ['a','e','i', 'o', 'u'].includes(char);
 }
function countVowels(str) {
    str = str.toLowerCase();
    let count=0;

    for(let a of str){

      if(isVowel(a)){
        count++;
      }
    }

    return count;


}



module.exports = countVowels;