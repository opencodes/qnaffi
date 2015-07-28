var sorting = (function () {
	return {
		/**
		 * [bubbleSort description]
		 * @param  {[type]} arr [description]
		 * @param  {[type]} k   [description]
		 * @return {[type]}     [description]
		 */
		bubbleSort : function (arr, k) {
			var i, temp, flag = 0;

			for (var i = 0; i < arr.length - k; i++) {
				if (arr[i] > arr[i+1]) {
					temp = arr[i+1];
					arr[i+1] = arr[i];
					arr[i] = temp;
					swapCount++;
					flag = 1;
				};
				loopCount++;
			};

			k++;


			if (k < arr.length -1 && flag) {
				return bubbleSort(arr, k);
			}else{
				return arr;
			}
			
		},
		insertionSort : function (arr) {
			var i, j, key;

			for (var i = 1; i < arr.length; i++) {
				key = a[i];
				j = i -1;
				while(j > 0 && key < a[j]){
					a[j + 1] = a[j];
					a[j + 1] = key;
					j--;
				}
			};
		}
	}
})();




//Sort the given array using bubble sort algo
var arr = [32, 51, 27, 85, 66, 23, 13, 57];
var sorted =  [ 23, 27, 32, 51, 57, 66, 85, 13];
var swapCount = 0, loopCount = 0;


console.log(bubbleSort(arr, 0));
console.log("Loop : "+ loopCount, " Swap : "+ swapCount);

//(n-1)+(n-2)+(n-3)+.....+3+2+1
//Sum = n(n-1)/2
//i.e O(n2)