default_side = 20;
MAXSIDE = 64;
MINSIDE = 2;

sketch_colour = "#000000";

$(document).ready(function(){

	freshGrid(default_side);

	sketch();

});


function freshGrid(sideLength) {
	$cont = $('#container');

	var num_pixels = sideLength * sideLength;
	for(var i = 0; i <num_pixels;i++) {
		$cont.append("<div class='pixel'></div>");
	}
	the_pixel_wiggle(sideLength);
}


function resizeGrid() {
	// Prompt user for new size
	var newside = 0;
	do{
		newside = window.prompt(
		"Select a new n value for your n x n grid\n(Select a value between 2 and 64):",
		""+default_side+"");
	} while (newside < MINSIDE || newside > MAXSIDE);
	clear_container();

	freshGrid(newside);

	sketch();
}


function resetGrid() {
	$('.pixel').css({'background-color':'transparent'});
}

function clear_container() {
	$('#container').empty();
}	

function sketch(){
	$('.pixel').hover( function() {
		$(this).css({'background-color': sketch_colour});
	});
}

function the_pixel_wiggle(sideLength) {

	//default_container
	var cont_side = 500;

	var container_excess = cont_side%sideLength;

	cont_side = cont_side-container_excess;

	// Correct container size 
	$('#container').css({
		'width': cont_side,
		'height': cont_side
	});

	$('.pixel').css({
		'width': cont_side / sideLength,
		'height': cont_side / sideLength
	});

}

function toggle_colour() {
	sketch_colour = '#'+Math.floor(Math.random()*16777215).toString(16);
}