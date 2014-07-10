// letterCount(word)
// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1
// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.



var word = "buballicious bubble";
var count = {};
var letterCount = function(x) {
	var string = x.toLowerCase();

	for(i = 0; i < string.length; i++) {
		count[string[i]] = 0;

		for(j = 0; j < string.length; j++){
			if(string[i] === string[j]) {
				count[string[i]] += 1
			}
		}
	}
}

letterCount(word);
console.log(count);


