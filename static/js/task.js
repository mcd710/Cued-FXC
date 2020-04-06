/***********************************************
*  		 	   v101 TSS PARADIGM  			   *
************************************************/

/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to

const garden = true;
//set the appropriate instructions by calling a function from the instructions.js file
const {pages, 
	keyMappingInstructions,
	interferenceInstructions,
	intervalInstructions,
	instructionGainPages,
	instructionLossPages,
	startGameInstructions,
	BreakPage} = instructionsGardenGains();

//preload your pages 
psiTurk.preloadPages(pages);




//set appropriate stimuli 
const {
	words,
	images,
	paths,
	fontColors,
	possibleStimsNeutral,
	possibleStimsCongruent,
	possibleStimsInCongruent,
	responses,
	responseKeyCodes,
	spaceKey}= setGardenStim();


psiTurk.preloadImages(paths);

var htmlParams = {
	title:'#title',
	stim:'#m', //stimImage
	tally:'#query',
	board:'#background'
};


var intervalDurations = [6000,7000,8000,9000];
var itiDurations = [1000,1500,2000];
var isiDurations = [500,750];
var test = true;


//set the appropriate trial numbers and test versus real mode 
//by calling a function from the trialNum.js file

const{numColorPracticeTrials, 	//set the number of keymapping practice  trials
	numStroopPracticeTrials, 	//set the number of interference practice trials
	numIntervalTrials, 			//set the number of intervals 
	numIntervalPractice, 		//set the number of intervals to practice
	numGainLossPractice, 		//set the number of gains to practice
	numBlock, 					//set the number of blocks 
	numIntervalPerBlock,		//set the number of intervals per block
	selectPerBlock, 			//how many intervals to select per block
	initialFundForLoss} = setTrialNumByMode(test); // set the intial fund for loss


var initialLoss = 300; //the amount of loss 
var price = 0.01; // set the prioce 


var trialTimingParams = {
	itiDuration:0, 
	feedbackDur:500,
	thresholdRT:250,
	deadline:2000
};


var intervalTimingParams = {
	intervalDur:NaN,
	itiDuration:NaN,
	cueDuration:1500,
	feedbackDur:1500,
	isiDuration:NaN
};


var incorrect1 = 0;
var incorrect2 = 0;
var incorrect3 = 0;
var incorrect4 = 0;
var incorrect5 = 0;


//set the appropriate cues by calling a function from the cues.js file
const cues = cuesMoney(); 

//set the appropriate blocks by calling a function from the blocks.js file
const {blockSequence, // order of blocks= all gain
	highValue, // highvalue = .10
	lowValue, // lowValue =.01
	values,// values = lowValue & highValue
	heading, // heading = '+ $'...whatever the bonus was example: "+ $0.60"
	numSign, // numSign  = 1 
	initialBonus, // initialBonus = 0 
	breakForBlockType
} = blocksGain(mycondition); 


//Set the group vs individual of  blocks if SPICE
const groupblockSequence= blocksGroups(mycondition)

/***Global variables tracked in the main task***/


var blockID = 0;
var sessionID = 0
var returnToInstructCallback = 0;
var returnToInstructCallbackMain =0;
var returnToInstructCallbackBreak = 0;

// handler function that controls the order of the task
var blockPartGarden = function(practiceNext){
	
	
	if(blockID == numBlock) {
		Questionnaire_Gain_Low();
		return;
	}

	if(blockID > numBlock) {sessionID++;blockID = 1;}


		switch(practiceNext) {

		  case 'keymapping':
		   	practiceNext = 'interference'
		    psiTurk.doInstructions(keyMappingInstructions,FruitMappingPractice('interference'));

		    break;
		  case 'interference':
		    practiceNext = 'interval'
		    psiTurk.doInstructions(interferenceInstructions,FruitInterferencePractice('interval'));

		    break;
		  case 'interval':
		    practiceNext = 'gain'
		    practiceType = 'gain'
		    psiTurk.doInstructions(intervalInstructions,intervalPracticeGarden('gain'));

		    break;
		  case 'gain':
		    practiceNext = 'mainStart'
		    psiTurk.doInstructions(instructionGainPages,practiceBlocksGarden('gain','mainStart'));

		    break;
		  case 'loss':
		    practiceNext = 'mainStart'
		    psiTurk.doInstructions(instructionLossPages,practiceBlocksGarden('loss','mainStart'));

		    break;
		  case 'mainStart':
		  	practiceNext = 'MainTask'
		  	blockID++;
			var blockType = blockSequence.shift();
			var cueSubset = cues[blockType];
		    psiTurk.doInstructions(startGameInstructions,MainPartGarden(blockType,cueSubset,'MainTask'))
		    
		    break;
		  case 'MainTask':
		  	blockID++;
		  	practiceNext = 'MainTask'
		  	var blockType = blockSequence.shift();
			var cueSubset = cues[blockType];

			psiTurk.doInstructions(breakForBlockType[blockType],MainPartGarden(blockType,cueSubset,'MainTask'));
		    
		    break;

		}
	}





// what to start the experiment with 
$(window).load( function(){
		blockPartGarden('keymapping')
 	}
);






/*****************************************
*            OTHER FUNCTIONS             *
******************************************/

showBoard = function(){
	console.log("inside showBoard")
	var element_stimuli = $("<img></img>").attr({src: "/static/images/Farmboard.png",id:'farmboard'});
	addElement(element_stimuli,'#background',center=true);

}




// function equivalent to linspace in matlab - generates an array of n evenly spaced numbers between min and max (inclusive for both) 
function linspace(min,max,nBins) {
	var i;
	ret = Array(nBins);
	nBins--;
	for (i = nBins; i >= 0; i--) {
		ret[i] = (i*max+(nBins-i)*min)/nBins; 
	}
	return ret;
}


// function equivalent to randi in matlab - generates a random integer between min and max (inclusive for both) 
function randi(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}


// function equivalent to repmat in matlab - repeats a given array nReps times
function repmat(array, nReps) {
	var result = [];
	while (nReps--) {
		result = result.concat(array);
	}
	return result;
}