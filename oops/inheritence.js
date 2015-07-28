/**
 * [Shape description]
 */
function Shape () {
	this.name = "Shape";
	/**
	 * [toString description]
	 * @return {[type]} [description]
	 */
	this.toString = function() {
		return this.name;
	}

}
/**
 * [TwoDShape description]
 */
function TwoDShape () {
	this.name = "2D Shape";
}
/**
 * [Triangle description]
 * @param {[type]} shape  [description]
 * @param {[type]} height [description]
 */
function Triangle (side, height) {
	this.name = "Triangle";
	this.side = side;
	this.height = height;
	/**
	 * [getArea description]
	 * @return {[type]} [description]
	 */
	this.getArea = function() {
		 return this.side * this.height / 2;
	}
}

//INHERITENCE
TwoDShape.prototype = new Shape(); // inherit Shape object to TwoDShape
Triangle.prototype = new TwoDShape(); //Inherit TwoDShape object to Triangle

var my = new Triangle(5, 10);
console.log(my.getArea());//Own method
console.log(my.toString());// inherit toString from Shape object



