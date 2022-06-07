/*Write a JavaScript function that accepts a string as a 
parameter and counts the number of vowels within the string.*/

//Write a function that accepts a string as a parameter
function findingNumOfVowels(str) {

//Declare a variable for an array of vowels
const arrayOfVowels = ["a", "e", "i", "o", "u"];

//Declare a variable for number of vowels
let numOfVowels = 0;

//Converting a string into lowercase and returning an array of letters
const arrayOfLetters = str.toLowerCase().split("");

//Creating a For loop to iterate through the array of letters
for (let counter =  0; counter < arrayOfLetters.length; counter++) {

//Creating a conditional statement for the number of occurrences of vowels in the arrayOfLetters
if (arrayOfVowels.includes(arrayOfLetters[counter])){
//Adding one to number of vowels after every occurence
	numOfVowels += 1
	}
	}
//Returning the number of vowels
	return numOfVowels;
}
console.log(findingNumOfVowels("Strive not to be a success, but rather to be of value."));