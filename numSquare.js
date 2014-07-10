var number = 25


var numSquare = function(maxNum) {
	var newArray = [];
	for (i = 1; i <= maxNum; i++) {
		if (i * i < maxNum) {
			newArray.push(i * i);
		}
	}
	return newArray;
}

console.log(numSquare(number))