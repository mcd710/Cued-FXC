//This is the file for commonly-used parameters and functions for Picture-Word-Interference task



//word used as stimuli
//last cell is for the neutral trials where there is no word displayed over the image
var words = ["APPLE","LEMON","PEAR","PEACH", ""]


//images used as stimuli
var images = ["apple","lemon","pear","peach"]


//paths to the images
var paths = [
"url(/static/images/stimuli/apple_grey.png)",
"url(/static/images/stimuli/pear_grey.png)",
"url(/static/images/stimuli/lemon_grey.png)",
"url(/static/images/stimuli/peach_grey.png)"]

psiTurk.preloadImages(paths);

//color for the font 
var fontColors = "red"


//Define the neutral trials: there are no words displayed so use the last cell of the 
var possibleStimsNeutral = [
	{word:words[4], image:images[0], congruency:"neutral", path:paths[0],fontColor:fontColors},
	{word:words[4], image:images[1], congruency:"neutral", path:paths[1],fontColor:fontColors},
	{word:words[4], image:images[2], congruency:"neutral", path:paths[2],fontColor:fontColors},
	{word:words[4], image:images[3], congruency:"neutral", path:paths[3],fontColor:fontColors}
	];

//Define the congruent trials
var possibleStimsCongruent = [
	{word:words[0], image:images[0], congruency:"congruent", path:paths[0],fontColor:fontColors},
	{word:words[1], image:images[1], congruency:"congruent", path:paths[1],fontColor:fontColors},
	{word:words[2], image:images[2], congruency:"congruent", path:paths[2],fontColor:fontColors},
	{word:words[3], image:images[3], congruency:"congruent", path:paths[3],fontColor:fontColors}
	];

//Define the incongruent trials
var possibleStimsInCongruent= [
	 //always show the image in images[0] and corresponding paths[0] but with other words on top
	{word:words[1], image:images[0], congruency:"incongruent", path:paths[0],fontColor:fontColors},
	{word:words[2], image:images[0], congruency:"incongruent", path:paths[0],fontColor:fontColors},
	{word:words[3], image:images[0], congruency:"incongruent", path:paths[0],fontColor:fontColors},

 	//always show the image in images[1] and corresponding paths[1] but with other words on top
	{word:words[0], image:images[1], congruency:"incongruent", path:paths[1],fontColor:fontColors},
	{word:words[2], image:images[1], congruency:"congruent", path:paths[1],fontColor:fontColors},
	{word:words[3], image:images[1], congruency:"incongruent", path:paths[1],fontColor:fontColors},
 	
 	//always show the image in images[2] and corresponding paths[2] but with other words on top
	{word:words[0], image:images[2], congruency:"incongruent", path:paths[2],fontColor:fontColors},
	{word:words[1], image:images[2], congruency:"incongruent", path:paths[2],fontColor:fontColors},
	{word:words[3], image:images[2], congruency:"incongruent", path:paths[2],fontColor:fontColors},

	 //always show the image in images[3] and corresponding paths[3] but with other words on top
	{word:words[0], image:images[3], congruency:"incongruent", path:paths[3],fontColor:fontColors},
	{word:words[1], image:images[3], congruency:"incongruent", path:paths[3],fontColor:fontColors},
	{word:words[2], image:images[3], congruency:"incongruent", path:paths[3],fontColor:fontColors},
	
    ];

//what are individuals responding to- should be the image 
var responses = images

//The keys that participants are using to play "D":68, "F":70, "J":74, "K":75
var responseKeyCodes = [68, 70, 74, 75];

var spaceKey = 32;


var recordStimPWI = function(stimuli){
	var newRecord = {};
	if(!isNaN(stimuli))
	{
		newRecord.word = NaN;
		newRecord.image = NaN;
		newRecord.type = NaN;
	}
	else{
		newRecord.word = stimuli.word;
		newRecord.image = stimuli.image;
		newRecord.type = stimuli.congruency;
	}
	return newRecord;
}

