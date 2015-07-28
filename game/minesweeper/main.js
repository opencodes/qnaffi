var MineSweeper = function (n, b) {
    "use strict";
    
	var grid = [];
	
	/**
	 * [getGrid description]
	 * @param  {[type]} x [description]
	 * @param  {[type]} y [description]
	 * @return {[type]}   2d Array
	 */
	function getGrid(x, y) {
		var arr = [], i, temp, j;
		//Preparing original array with y length for the same row
		for (i = 0; i < x; i++) {
			temp = [];
			for (j = 0; j < y; j++) {
				temp.push(0);
			}
			arr.push(temp);
		}
		return arr;
	}
	/**
	 * [getRandomArbitrary description]
	 * @param  {[type]} min 
	 * @param  {[type]} max 
	 * @return {[type]} random number between min and max
	 */
	function getRandomArbitrary(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}
	/**
	 * [getTwoDCoordinate description]
	 * @param  {[type]} r [description]
	 * @return {[type]}   [description]
	 */
	function getTwoDCoordinate(r) {
		return {
			x : Math.floor(r  / n) ,
			y : (r % n)
		};
	}
	/**
	 * [placeBomb description]
	 * @param  {[type]} b [description]
	 * @return {[type]}   [description]
	 */
	function placeBomb(b) {
		//Place b no of bombs on random place
		for (var i = 0; i < b; i++) {
			var rndNum = getRandomArbitrary(0, n*n);
			var bombCoordinate = getTwoDCoordinate(rndNum);
			//console.log(grid)
			grid[bombCoordinate.x][bombCoordinate.y] = -1;
			incrementAdjacentGrid(bombCoordinate.x, bombCoordinate.y);
		};
	}
	/**
	 * [initializeGame description]
	 * @return {[type]} [description]
	 */
	function initializeGame() {
		grid = getGrid(n, n);
		placeBomb(b);
	}
	function incrementAdjacentGrid(x, y) {
		for (var i = x-1; i <= x+1; i++) {
			for (var j = y-1; j <= y + 1; j++) {
				if(i >= 0 && i < n && j >= 0 && j < n && grid[i][j]!= -1){
						grid[i][j] += 1;					
				}
				
			};
		};

	}

	initializeGame();

	return {
		/**
		 * [grid description]
		 * @type {[type]}
		 */
		grid : grid,
		/**
		 * [printGrid description]
		 * @param  {[type]} argument [description]
		 * @return {[type]}          [description]
		 */
		printGrid : function() {
			var _this = this;

			for(var k in _this.grid){
				//console.log(_this.grid[k].toString());
			}
		}

	}
}

var ms = MineSweeper(10,10);
ms.printGrid();

$(document).ready(function() {
	var html = '<table class="table table-bordered">';
	for (var i = 0; i < ms.grid.length; i++) {
		html += '<tr>';
		for (var j = 0; j < ms.grid[i].length; j++) {
			var item = ms.grid[i][j];
			html += '<td class="grid-item '+ ((item == -1) ? "bomb" : "number") +'" style="width:'+ 100/ms.grid.length +'%" data-val="'+ item +'"></td>';
		};
		html += '</tr>';
	};
	html += '</table>';

	$('#grid').css('width',40 * ms.grid.length).html(html);

	$('#grid').on('click', '.grid-item.number', function(e) {
		e.preventDefault();
		var itemVal = $(this).attr('data-val');
		if (itemVal !== -1  && !$('.grid').hasClass('complete')) {
			$(this).addClass('bg-success').text($(this).attr('data-val'));
		}		
	})
    $('#grid').on('click', '.grid-item.bomb', function(e) {
		e.preventDefault();
		$('#grid').addClass('complete')
		
	})

	window.onbeforeunload = "Are you";

})