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

var avgRewardWindow=[];
var avgRewardWindowLength=10;

const PLATFORM = getUrlVars()["PLATFORM"];
console.log(PLATFORM)

//const game = getUrlVars()["game"];
//console.log(game)
//
const gardenImageAll= '/static/images/BackgroundFarm.png'

const redirect_link = 'https://brown.co1.qualtrics.com/jfe/form/SV_2adEDYknu3WchEO'

var finalBonus =NaN


//set the appropriate instructions by calling a function from the instructions.js file
const {pages,questionnaireStart,
	AutomaticityInstructions,
	keyMappingInstructions,
	automaticityTestInstructions,
	keyMappingTestInstructions,
	interferenceInstructions,
	intervalInstructions,
	instructionEfficacyHighPages,
	instructionEfficacyLowPages,
	instructionEfficacyALLPages,
	startGameInstructionsOrder1,
	startGameInstructionsOrder0,
	BreakRandomHighPage,
	BreakPerformanceHighPage,
	BreakRandomLowPage,
	BreakPerformanceLowPage} = instructionsFXCICR();

//preload your pages 
psiTurk.preloadPages(pages);

//set whether you are in garden enviorment or not
var garden = true


//set appropriate stimuli 
const {paths,
	possibleStimsNeutral,
	possibleStimsAutomatic,
	possibleStimsCongruent,
	possibleStimsInCongruent,
	responses,
	responseKeyCodes,
	spaceKey}= setStroopStim();


psiTurk.preloadImages(paths);

var htmlParams = {
	title:'#title', // where to display the
	stim:'#m', // where to display the image
	tally:'#bm', // where to display the counter
	board:'#background' // for the garden task where to display the board
};


var intervalDurations = [6000,7000,8000,9000];
var itiDurations = [1000,1500,2000];
var isiDurations = [500,750];
var test = false; // tells you if you would like to run a short version for debugging


//set the appropriate trial numbers and test versus real mode 
//by calling a function from the trialNum.js file

const{numColorPracticeTrials, 	//set the number of keymapping practice  trials
	numStroopPracticeTrials, 	//set the number of interference practice trials
	numautomaticityTest,			// set number of automaticity test trials with no feedback
	numcolorTest, 					// set the number of key mapping with no feedback
	numIntervalTrials, 			//set the number of intervals 
	numIntervalPractice, 		//set the number of intervals to practice
	numGainLossPractice, 		//set the number of gains to practice
	numBlock, 					//set the number of blocks 
	numIntervalPerBlock,		//set the number of intervals per block
	selectPerBlock, 			//how many intervals to select per block
	initialFundForLoss} = setTrialNumByMode(test); // set the intial fund for loss


var initialLoss = 300; //the amount of loss 
var price = 0.01; // set the price  for each item so 10 points= .01 cent *10 = 10 cents
var conversion= 1;

var trialTimingParams = {
	itiDuration:0,  
	feedbackDur:2000,
	thresholdRT:250,
	deadline:2000
};


var intervalTimingParams = {
	intervalDur:NaN,
	itiDuration:NaN,
	cueDuration:750,
	feedbackDur:1750,
	isiDuration:NaN
};


var incorrect1 = 0;
var incorrect2 = 0;
var incorrect3 = 0;
var incorrect4 = 0;
var incorrect5 = 0;


//set the appropriate cues by calling a function from the cues.js file
const cues = cuesEfficacy(); 

//set the appropriate blocks by calling a function from the blocks.js file
const {blockSequence, // order of blocks= all gain
	highValue, // highvalue = 100 pts
	lowValue, // lowValue = 10 pts
	values,// values = lowValue & highValue
	heading, // heading = '+ $'...whatever the bonus was example: "You gained + $0.60"
	tallyHeading, // what to display on the tally while they are working
	numSign, // numSign  = 1 
	initialBonus, // initialBonus = 0 
	breakForBlockType
} = blocksEfficacyRewardMDDOnline(mycondition); 

var practiceavgRewardWindow=[];
var practiceavgRewardWindowLength=avgRewardWindowLength;
/***Global variables tracked in the main task***/


var blockID = 0;
var sessionID = 0;
var returnToInstructCallback = 0;
var returnToInstructCallbackMain =0;
var returnToInstructCallbackBreak = 0;

const efficacyProbability= 0.8; 

// handler function that controls the order of the task
var blockPartGarden = function(practiceNext){
	openFullscreen();

	// call function to set background
	gardenWorld(gardenImageAll)
	
	

	// what to do at the end of the task
	if(blockID == numBlock) {
		endRedirectFXCICR();
		return;
	}

	if(blockID > numBlock) {sessionID++;blockID = 1;}


		switch(practiceNext) {

		case 'Untimedkeymapping': 
			practiceNext = 'timedKeymapping'
			psiTurk.doInstructions(keyMappingInstructions,ColorMappingPractice('keymappingTest'));

		break;

		case 'timedKeymapping': 
		   	practiceNext = 'keymappingTest'
		    psiTurk.doInstructions(keyMappingInstructions,ColorMappingPractice('keymappingTest'));

			break;

		case 'keymappingTest': 
			practiceNext = 'interference'
			psiTurk.doInstructions(keyMappingTestInstructions,ColorMappingTest('interference'));

			 break;
		  case 'interference':
		    practiceNext = 'interval'
		    psiTurk.doInstructions(interferenceInstructions,StroopPractice('interval'));

		    break;
		  case 'interval':
		    practiceNext = 'performancePractice'
		    psiTurk.doInstructions(intervalInstructions,intervalPracticeGardenStroop('performancePractice'));

		    break;
		  case 'performancePractice':
		    practiceNext = 'randomPractice' 
		    psiTurk.doInstructions(instructionEfficacyHighPages,practiceBlocksGardenPointsStroop('performancePractice','randomPractice'));

			break;
		 case 'randomPractice':
		    practiceNext = 'practiceAll' 
		    psiTurk.doInstructions(instructionEfficacyLowPages,practiceBlocksGardenPointsStroop('randomPractice','practiceAll'));

			break;
		case 'practiceAll':
			practiceNext = 'mainStart' 
			psiTurk.doInstructions(instructionEfficacyALLPages,practiceBlocksGardenPointsStroop('practiceAll','mainStart'));
	
			break;
		  case 'mainStart':
		  	practiceNext = 'MainTask'
			blockID++;
			if (practiceavgRewardWindow.length!=avgRewardWindowLength){
				dif=avgRewardWindowLength-practiceavgRewardWindow.length
				addition=[]
				for (z=0; z< dif; z++){
					randAddition=practiceavgRewardWindow[Math.floor(Math.random()*practiceavgRewardWindow.length)]
					addition.push(randAddition)
				}
				practiceavgRewardWindow=practiceavgRewardWindow.concat(addition)
			}
			avgRewardWindow=avgRewardWindow.concat(practiceavgRewardWindow)
			var blockType = blockSequence.shift();
			var cueSubset = cues[blockType];
			if (game==1){
				psiTurk.doInstructions(startGameInstructionsOrder1,MainPartGardenGroupPointsStroopFXC(blockType,cueSubset,'MainTask'))

			}else{
				psiTurk.doInstructions(startGameInstructionsOrder0,MainPartGardenGroupPointsStroopFXC(blockType,cueSubset,'MainTask'))
			}
		    
		    break;
		  case 'MainTask':
		  	blockID++;
		  	practiceNext = 'MainTask'
		  	var blockType = blockSequence.shift();
			var cueSubset = cues[blockType];

			psiTurk.doInstructions(breakForBlockType[blockType],MainPartGardenGroupPointsStroopFXC(blockType,cueSubset,'MainTask'));
		    
		    break;

		}
	}





// what to start the experiment with 
$(window).load( function(){
		blockPartGarden('automaticity')
 	}
);






/*****************************************
*            OTHER FUNCTIONS             *
******************************************/

showBoard = function(){
	//console.log("inside showBoard")
	var element_stimuli = $("<img></img>").attr({src: "/static/images/Farmboard.png",id:'farmboard'});
	addElement(element_stimuli,'#background',center=true);

}

gardenWorld = function (gardenImage) {
	if(garden){
		document.body.style.backgroundImage = "url('"+ gardenImage+ "')" ;
		document.body.style.backgroundSize = "cover"
		document.body.style.backgroundRepeat= 'no-repeat'
	}
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	    vars[key] = value;
	});
	return vars;
}
