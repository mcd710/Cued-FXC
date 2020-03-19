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



//set the appropriate instructions by calling a function from the instructions.js file
const {pages, 
	keyMappingInstructions,
	interferenceInstructions,
	gainsIntervalInstructions,
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
	stim:'#stim',
	tally:'#query'
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

console.log("possibleStimsNeutral is" + possibleStimsNeutral)

var initialLoss = 300;
var price = 0.01;


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
const cues = cuesProtect(); 

//set the appropriate blocks by calling a function from the blocks.js file
const blockSequence = blocksProtect(mycondition); 


var highValue = 10;
var lowValue = 1;
var values = {gain_low:lowValue,gain_high:highValue,loss_low:lowValue,loss_high:highValue};
var heading = {gain_low:'Gem: ',gain_high:'Gem: ',loss_low:'Bomb: ',loss_high:'Bomb: '};
var numSign = {gain_low:1,gain_high:1,loss_low:-1,loss_high:-1};
var initialBonus = {gain_low:0,gain_high:0,loss_low:initialLoss,loss_high:initialLoss};
//var breakForBlockType = {collector:BreakCollectorPage,protector:BreakProtectorPage,
//	small:BreakSmallPage,large:BreakLargePage};


/***Global variables tracked in the main task***/


var blockID = 0;
var sessionID = 0;
var returnToInstructCallback = 0;
var returnToInstructCallbackMain =0;
var returnToInstructCallbackBreak = 0;




/***End of global variables***/
var blockPart = function(){



	var configParams = {space:false,accFeedback:false,washout:false,tally:true};

	if(blockID == numBlock) {
		Questionnaire_Gain_Low();
		return;
	}

	blockID++;
	var blockType = blockSequence.shift();
	var cueSubset = cues[blockType];

	if(blockID > numBlock) {sessionID++;blockID = 1;}

	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
		if(numSign[interval.cueType]<0) score = Math.max(score,0);
		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(heading[interval.cueType] +
			score.toFixed(0)));
		$("#intervalMsg").css('margin-top','0px');
	}

	var cleanFeedback = function(){$("#intervalMsg").remove();}

	var showScore = function(tag,cueType)
	{
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();
			var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
			if(numSign[cueType]<0) score = Math.max(score,0);
			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(heading[cueType] + score.toFixed(0)));
			//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
			$("#scoreCounter").css('margin-top','0px');
		};
		return showScoreInTag;
	}

	var cleanTally = function(){
		$('#scoreCounter').remove();
	}


	var PracticeSession = function(isGain){
		/*** The cues are specified as [path,cueType] ***/
		var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numGainLossPractice/intervalDurations.length)));
		var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numGainLossPractice/itiDurations.length)));
		var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numGainLossPractice/isiDurations.length)));
		if(isGain == 1)
			subCueSet = cues['collector'];
		else
			subCueSet = cues['protector'];

		var cueSet = _.shuffle(repmat(subCueSet,Math.ceil(numGainLossPractice/subCueSet.length)));
		var intervalID = 0;
		var interval = 0;

		var Loop = function(){

			intervalID++;
			

			var calculateBonus = function(Interval)
			{
				var bonus = 0;
				return bonus;
			};

			intervalTimingParams.intervalDur = intervalDurationSet.shift();
			intervalTimingParams.itiDuration = itiDurationSet.shift();
			intervalTimingParams.isiDuration = isiDurationSet.shift();

			var writeRecord = function(Record){
				if(isGain == 1)
					Record.phase = "GainPractice";
				else
					Record.phase = "LossPractice";
			 	
			 	Record.sessionNum = NaN;
			 	Record.blockNum = NaN;
			 	Record.intervalNum = intervalID;
			 	Record.intervalType = cue[1];
			 	Record.intervalLength = intervalTimingParams.intervalDur;
			 	psiTurk.recordTrialData(Record);
			};

			var callbacks = {
				endCallback:Loop,
				displayFeedback:displayFeedback,
				cleanFeedback:cleanFeedback,
				tallyCallback:showScore,
				recordStimCallback:recordStimStroop,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};

			var cue = cueSet.shift();
			
			if(intervalID > numGainLossPractice) 
			{
				if(isGain == 1)
				{
					returnToInstructCallback = function(){psiTurk.doInstructions(instructionLossPages,LossPractice);};
					psiTurk.doInstructions(instructionLossPages,LossPractice);
				}
				else psiTurk.doInstructions(postPracticeBreak,MainPart);

			}
			else
			{
				var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stage.html");
				interval.initiate();
			}
		}
		Loop();
	}

	var GainPractice = function(){
		returnToInstructCallback = function(){psiTurk.doInstructions(instructionGainPages,GainPractice);};
		PracticeSession(1);
	}

	var LossPractice = function(){
		returnToInstructCallback = function(){psiTurk.doInstructions(instructionLossPages,LossPractice);};
		PracticeSession(0);
	}

	var MainPart = function(){

		var intervalID = 0;
		var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numIntervalPerBlock/itiDurations.length)));
		var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numIntervalPerBlock/isiDurations.length)));

		//Set up the sequence within the block.
		var indexList = [];
		var cueList = [];
		var intervalDurationList = [];

		for(var m = 0; m < numIntervalPerBlock/(cueSubset.length * intervalDurations.length); m++)
		{
			for(var j = 0; j < intervalDurations.length; j++)
			{
				for(var i = 0; i < cueSubset.length; i++)
				{
					cueList.push(cueSubset[i]);
					intervalDurationList.push(intervalDurations[j]);
				}
			}
		}
		if(blockID%2==0)
		{
			var selectedMask = [1,1];
			selectedMask = selectedMask.concat(repmat([0],numIntervalPerBlock - 2));
		}
		else
		{
			var selectedMask = [1,1];
			selectedMask = selectedMask.concat(repmat([0],numIntervalPerBlock - 2));			
		}



		for(var n = 0; n < numIntervalPerBlock; n++)
		{
			indexList.push(n);
		}

		indexList = _.shuffle(indexList);

		//var partSelected = selectedBlockList.shift();
		//cueList = _.shuffle(cueList);
		//intervalDurationList = _.shuffle(intervalDurationList);

		var Loop = function(){
			//intervalTimingParams.intervalDur = intervalDurationSet.shift();
			intervalTimingParams.itiDuration = itiDurationSet.shift();
			intervalTimingParams.isiDuration = isiDurationSet.shift();
			var selected;
			var cue;
			var bonused;

			//console.log(selectedMask);
			
			intervalID++;
			if(intervalID <= numIntervalPerBlock){
				selected = indexList.shift()
				cue = cueList[selected];
				intervalTimingParams.intervalDur = intervalDurationList[selected];
				bonused = selectedMask[selected];
				//console.log(selected)
				//console.log(bonused);
			}
			//console.log(bonused)

			

			var calculateBonus = function(Interval)
			{
				var counter = Interval.getCounter();
				var bonus = counter[0] * values[Interval.cueType] * bonused * price;
				//console.log(bonused);
				//console.log(bonus);
				return bonus;
			};

			var writeRecord = function(Record){

			 	Record.phase = "MainBlock";
			 	Record.sessionNum = sessionID;
			 	Record.blockNum = blockID;
			 	Record.intervalNum = intervalID;
			 	Record.intervalType = cue[1];
			 	Record.intervalLength = intervalTimingParams.intervalDur;
			 	psiTurk.recordTrialData(Record);
			};



			var callbacks = {
				endCallback:Loop,
				displayFeedback:displayFeedback,
				cleanFeedback:cleanFeedback,
				tallyCallback:showScore,
				recordStimCallback:recordStimStroop,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};



			if(intervalID > numIntervalPerBlock) blockPart();
			else {
				var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stage.html");
				interval.initiate();
			}
		}

		returnToInstructCallbackBreak = function(){psiTurk.doInstructions(breakForBlockType[blockType],Loop);};
		psiTurk.doInstructions(breakForBlockType[blockType],Loop);

	}
	if(blockID == 1) {
		returnToInstructCallback = function(){psiTurk.doInstructions(instructionGainPages,GainPractice);};
		returnToInstructCallbackMain = function(){psiTurk.doInstructions(postPracticeBreak,MainPart);};
		psiTurk.doInstructions(instructionGainPages,GainPractice);
	}
	else MainPart();
}


var Baseline = function(endCallback){
	console.log("inside Baseline")
	var stimSet = generateStimSet(possibleStimsCongruent,possibleStimsInCongruent,numBaselineTrial);
	trialTimingParams.itiDuration = 500;

	var writeRecord = function(Record){

	 	Record.phase = "Baseline";
	 	Record.sessionNum = NaN;
	 	Record.blockNum = NaN;
	 	Record.intervalNum = NaN;
	 	Record.intervalType = NaN;
	 	Record.intervalLength = NaN;
	 	Record.moneyEarned = NaN;
	 	psiTurk.recordTrialData(Record);
	};

	var callbacks = {
		endOfSetCallback:endCallback,
		tallyCallback:0,
		recordStimCallback:recordStimStroop,
		completeRecordCallback:writeRecord
	};
	var configParams = {space:false,accFeedback:true,washout:false};

	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#stim',callbacks,configParams);
	psiTurk.showPage("stage.html");
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}



// what to start the experiment with 
$(window).load( function(){
		psiTurk.doInstructions(keyMappingInstructions,FruitMappingPractice);
 	}
);





/*****************************************
*             Questionnaire              *
******************************************/


var Questionnaire_Gain_Low = function() {

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'Questionnaire_Gain_Low', 'status':'submit'});

		$("input:radio:checked").each( function(i, val) {
			psiTurk.recordUnstructuredData(this.name, this.value);		
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('postquestionnaire_gain_low.html');
	psiTurk.recordTrialData({'phase':'Questionnaire_Gain_Low', 'status':'begin'});
	
	$("#next").click(function () {
		var answers = $("input:radio:checked").length;
		if(answers < 4)
		{
			alert("Please answer all the questions.");
		}
		else
		{
			record_responses();
		
		
			currentview = new Questionnaire_Gain_High;
		}

	});
};


var Questionnaire_Gain_High = function() {

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'Questionnaire_Gain_High', 'status':'submit'});
		$("input:radio:checked").each( function(i, val) {
			psiTurk.recordUnstructuredData(this.name, this.value);		
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('postquestionnaire_gain_high.html');
	psiTurk.recordTrialData({'phase':'Questionnaire_Gain_High', 'status':'begin'});
	
	$("#next").click(function () {
		var answers = $("input:radio:checked").length;
		if(answers < 4)
		{
			alert("Please answer all the questions.");
		}
		else
		{
			record_responses();
		
		currentview = new Questionnaire_Loss_Low;}

	});
};


var Questionnaire_Loss_Low = function() {

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'Questionnaire_Loss_Low', 'status':'submit'});
		$("input:radio:checked").each( function(i, val) {
			psiTurk.recordUnstructuredData(this.name, this.value);		
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('postquestionnaire_loss_low.html');
	psiTurk.recordTrialData({'phase':'Questionnaire_Loss_Low', 'status':'begin'});
	
	$("#next").click(function () {
		var answers = $("input:radio:checked").length;
		if(answers < 4)
		{
			alert("Please answer all the questions.");
		}
		else
		{
			record_responses();
		
		currentview = new Questionnaire_Loss_High;}

	});
};


var Questionnaire_Loss_High = function() {

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'Questionnaire_Loss_High', 'status':'submit'});
		$("input:radio:checked").each( function(i, val) {
			psiTurk.recordUnstructuredData(this.name, this.value);		
		});
	};

	// Load the questionnaire snippet 

	
	// $("#next").click(function () {
	// 	var answers = $("input:radio:checked").length;
	// 	if(answers < 4)
	// 	{
	// 		alert("Please answer all the questions.");
	// 	}
	// 	else
	// 	{
	// 		record_responses();
		
	// 		currentview = new Questionnaire;
	// 	}
	// });

	prompt_resubmit = function() {
		document.body.innerHTML = error_message;
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
		reprompt = setTimeout(prompt_resubmit, 10000);
		
		psiTurk.saveData({
			success: function() {
				clearInterval(reprompt); 
				//psiTurk.completeHIT();

				psiTurk.computeBonus('compute_bonus', function(){
                	 		psiTurk.completeHIT(); //Call compute_bonus function for automatic bonus calculation (By Jason)
                 }); 

            }, 
            error: prompt_resubmit
        });
	};

	psiTurk.showPage('postquestionnaire_loss_high.html');
	psiTurk.recordTrialData({'phase':'Questionnaire_Loss_High', 'status':'begin'});
	psiTurk.recordUnstructuredData('incorrectGQ1', incorrect1);
	psiTurk.recordUnstructuredData('incorrectGQ2', incorrect2);
	psiTurk.recordUnstructuredData('incorrectLQ1', incorrect3);
	psiTurk.recordUnstructuredData('incorrectLQ2', incorrect4);
	psiTurk.recordUnstructuredData('incorrectGQ3', incorrect5);
	
	$("#next").click(function () {
		record_responses();
		psiTurk.saveData({
			success: function(){
				psiTurk.computeBonus('compute_bonus',function(){
				psiTurk.completeHIT();});
            }, 
            error: prompt_resubmit});
	});
};




/*****************************************
*            OTHER FUNCTIONS             *
******************************************/

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