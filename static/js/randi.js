// function equivalent to randi in matlab - generates a random integer between min and max (inclusive for both) 
function randi(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}