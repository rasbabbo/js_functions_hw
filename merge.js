var arr1 = [3, 6, 11];
var arr2 = [2, 4, 5, 8, 9];
var arrMerged = [];

// var merge = function(arr1, arr2) {
// 	var arrMerged = [];
// 	for (var i = 0, j = 0, k = 0; j < arr1.length || arr2.length; i++) {
// 		if (arr1[j] < arr2[k] || arr2[k] === undefined) {
// 			arrMerged[i] = arr1[j];
// 			j++;
// 		} else if (arr2[k] < arr1[j] || arr1[j] === undefined) {
// 			arrMerged[i] = arr2[k];
// 		}
// 		return arrMerged
// 		}
// 	}

// var results = merge(arr1, arr2);
// console.log(results);




var merge = function(arr1, arr2) {
	while(arr1.length !== 0 && arr2.length !== 0) {
		if (arr1[0] < arr2[0]) {
			var smallest = arr1.shift();
			arrMerged.push(smallest);
		}
		else {
			var smallest = arr2.shift();
			arrMerged.push(smallest);
		}
	}

	if (arr1.length < arr2.length){
		var last = arr2.shift();
		arrMerged.push(last);

	} else {
		var last = arr1.shift();
		arrMerged.push(last);
	}
	return arrMerged;
}

merge(arr1, arr2);
console.log(arrMerged)