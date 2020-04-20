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


const testGroup = getUrlVars()["group"];

var groupImage= _.shuffle(["url('/static/images/BackgroundFarmB.png')","url('/static/images/BackgroundFarmD.png')"]);


const gardenImageAll= "url('/static/images/BackgroundFarm.png')"

const gardenImagePersonal = groupImage[0];

const gardenImageGroup = groupImage[1];

const redirect_link = 'https://brown.co1.qualtrics.com/jfe/form/SV_0jihwS1Y1bTbjaR'

console.log("inside task and group is" + testGroup)

//set the appropriate instructions by calling a function from the instructions.js file
const {pages, 
	questionnaireStart,
	keyMappingInstructions,
	interferenceInstructions,
	intervalInstructions,
	instructionGainPages,
	instructionLossPages,
	startGameInstructions,
	BreakPage} = instructionsGardenGains();

//preload your pages 
psiTurk.preloadPages(pages);

//set whether you are in garden enviorment or not
var garden = true


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
	title:'#title', // where to display the
	stim:'#m', // where to display the image
	tally:'#bm', // where to display the counter
	board:'#background' // for the garden task where to display the board
};


var intervalDurations = [6000,7000,8000,9000];
var itiDurations = [1000,1500,2000];
var isiDurations = [500,750];
var test = true; // tells you if you would like to run a short version for debugging


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
var price = 0.01; // set the price 


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
const cues = cuesMoneyGroup(); 

//set the appropriate blocks by calling a function from the blocks.js file
const {blockSequence, // order of blocks= all gain
	highValue, // highvalue = .10
	lowValue, // lowValue =.01
	values,// values = lowValue & highValue
	heading, // heading = '+ $'...whatever the bonus was example: "You gained + $0.60"
	tallyHeading, // what to display on the tally while they are working
	numSign, // numSign  = 1 
	initialBonus, // initialBonus = 0 
	breakForBlockType
} = blocksGroups(mycondition); 


//Set the group vs individual of  blocks if SPICE
const groupblockSequence= blocksGroups(mycondition)

/***Global variables tracked in the main task***/


var blockID = 0;
var sessionID = 0;
var returnToInstructCallback = 0;
var returnToInstructCallbackMain =0;
var returnToInstructCallbackBreak = 0;

// handler function that controls the order of the task
var blockPartGarden = function(practiceNext){

	// call function to set background
	gardenWorld(gardenImageAll)
	
	blockID=4

	// what to do at the end of the task
	if(blockID == numBlock) {
		endRedirectSPICE();
		return;
	}

	if(blockID > numBlock) {sessionID++;blockID = 1;}


		switch(practiceNext) {

		case 'questionnaires': 
		   	practiceNext = 'keymapping'
		    psiTurk.doInstructions(questionnaireStart);

		    break;

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
			if (blockType=="Group_Gain"){
				gardenWorld(gardenImageGroup)
			}else{
				gardenWorld(gardenImagePersonal)
			}
			
		    psiTurk.doInstructions(startGameInstructions,MainPartGarden(blockType,cueSubset,'MainTask'))
		    
		    break;
		  case 'MainTask':
		  	blockID++;
		  	practiceNext = 'MainTask'
		  	var blockType = blockSequence.shift();
			var cueSubset = cues[blockType];
			if (blockType=="Group_Gain"){
				gardenWorld(gardenImageGroup)
			}else{
				gardenWorld(gardenImagePersonal)
			}

			psiTurk.doInstructions(breakForBlockType[blockType],MainPartGarden(blockType,cueSubset,'MainTask'));
		    
		    break;

		}
	}





// what to start the experiment with 
$(window).load( function(){
		blockPartGarden('MainTask')
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

gardenWorld = function (gardenImage) {
	if(garden){
		document.body.style.backgroundImage = gardenImage ;
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
