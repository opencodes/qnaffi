var spiralArray = [['a1', 'b1', 'c1', 'd1'], ['a2', 'b2', 'c2', 'd2'],['a3', 'b3', 'c3', 'd3'],['a4', 'b4', 'c4', 'd4']];

//Qusetion : Traverse array in clock wise or anticlock wise ?
var result = [];

function spiralTraversing (i, j, h, v) {

	
	console.log(i, j, h, v, spiralArray[i][j]);
	result.push(spiralArray[i][j]);
	
	/*if(i >= h && h >= 0){
		i--;
		h --;
	}
	if(j >= v && v >= 0){
		j--;
		v --;
	}
	if(i <= h && j ){
		i++;
	}
	if(j <= v){
		v ++;
	}*/

	if(i < h && j < v){
		j++;
	}
	
	if(j == v){
		i = j;
		i --;
		v--;
	}


	if(h > 0 || v > 0 ){		
		spiralTraversing(i, j, h, v);
	}else{
		return result;
	}
	
	
	
}

console.log(spiralTraversing(0, 0, 3,3))
$(document).ready(function() {
	//$('#result').text(spiralTraversing(3, 3, 3).join(','));
})
