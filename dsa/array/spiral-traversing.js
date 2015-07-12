var spiralArray  = [['a1', 'b1', 'c1', 'd1'], 
					['a2', 'b2', 'c2', 'd2'],
					['a3', 'b3', 'c3', 'd3'],
					['a4', 'b4', 'c4', 'd4']];

//Qusetion : Traverse array in clock wise or anticlock wise ?
var result = [];

function spiralTraversing (i, j, l) {

	if(l <= 1){
		return true;
	}
	console.log("Traversing " + i + j + l)
	//traverse 1st wall
	
	result.push(spiralArray[i][j]);
	
	if(i )
		spiralTraversing(i, j, l);
}

console.log(spiralTraversing(0, 0, 3).join(','))
$(document).ready(function() {
	//$('#result').text(spiralTraversing(3, 3, 3).join(','));
})