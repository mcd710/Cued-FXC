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
// they are not used in the stroop code but may be useful to you
// All pages to be loaded


psiTurk.preloadPages(pagesProtectorvCollector);

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




var ColorMappingPractice = function(){
	var configParams = {space:false,accFeedback:true,washout:true};
	var stimSet = _.shuffle(repmat(possibleStimsNeutral,Math.ceil(numColorPracticeTrials/possibleStimsNeutral.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "ColorMappingPractice";
	 	Record.sessionNum = NaN;
	 	Record.blockNum = NaN;
	 	Record.intervalNum = NaN;
	 	Record.intervalType = NaN;
	 	Record.intervalLength = NaN;
	 	Record.moneyEarned = NaN;
	 	psiTurk.recordTrialData(Record);
	};

	var nextAction = function(trial){
		if(trial.counter[0] < 5){
			trial.stimSet = [possibleStimsNeutral[randi(0,possibleStimsNeutral.length-1)]];
			trial.initiation();
			return;
		}
		//psiTurk.completeHIT();
		psiTurk.doInstructions(instruction2Pages,StroopPractice);
	}

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimStroop,
		completeRecordCallback:writeRecord
	};
	
	trialTimingParams.itiDuration = 500;

	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#stim',callbacks,configParams);
	psiTurk.showPage("stage.html");
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}






var StroopPractice = function(){
	var stimSet = possibleStimsCongruent.concat(possibleStimsInCongruent);
	var stimSet = _.shuffle(repmat(stimSet,Math.ceil(numStroopPracticeTrials/stimSet.length)));

	var writeRecord = function(Record){

	 	Record.phase = "StroopPractice";
	 	Record.sessionNum = NaN;
	 	Record.blockNum = NaN;
	 	Record.intervalNum = NaN;
	 	Record.intervalType = NaN;
	 	Record.intervalLength = NaN;
	 	Record.moneyEarned = NaN;
	 	psiTurk.recordTrialData(Record);
	};

	var nextAction = function(trial){
		if(trial.counter[0] < 5){
			var tempset = possibleStimsCongruent.concat(possibleStimsInCongruent);
			trial.stimSet = [tempset[randi(0,tempset.length-1)]];
			trial.initiation();
			return;
		}
		psiTurk.doInstructions(instruction3Pages,intervalPractice);
	};

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimStroop,
		completeRecordCallback:writeRecord
	};
	var configParams = {space:false,accFeedback:true,washout:true};
	trialTimingParams.itiDuration = 500;
	psiTurk.showPage("stage.html");
	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#stim',callbacks,configParams);
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}



/*** Session for set Practice ***/




var intervalPractice = function(){
	/*** Step 1: Define how you want to display interval-end feedback ***/


	var qualified = false;
	trialTimingParams.itiDuration = 0;
	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).text('Correct: ' + interval.counter[0]));
		$("#intervalMsg").css('margin-top','0px');
	}
	/*** Step 2: Define how you want to clean up interval-end feedback ***/
	var cleanFeedback = function()
	{
		$("#intervalMsg").remove();
	}
	/*** Step 3: Define how you want to show the tally ***/
	var showScore = function(tag)
	{
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();	
			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0]));
			$("#scoreCounter").css('margin-top','0px');
		};
		return showScoreInTag;
	}

	var cleanTally = function(){
		$('#scoreCounter').remove();
	}

	var configParams = {space:false,accFeedback:false,washout:false,tally:true};
	var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numIntervalPractice/intervalDurations.length)));
	var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numIntervalPractice/itiDurations.length)));
	var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numIntervalPractice/isiDurations.length)));
	var intervalNum = 0;

	var Loop = function(){
		intervalNum++;
		if(intervalNum > numIntervalPractice & (qualified|intervalNum>6)) {
			blockPart();
		}
		else{
			if(intervalNum > numIntervalPractice)
			{
				intervalDurationSet = _.shuffle(intervalDurations);
				itiDurationSet = _.shuffle(itiDurations);
				isiDurationSet = _.shuffle(isiDurations);
			}

			var intervalDur = intervalDurationSet.shift();
			var itiDuration = itiDurationSet.shift();
			var isiDuration = isiDurationSet.shift();
			var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);

			var calculateBonus = function(I)
			{
				var bonus = NaN;
				if(I.counter[0]>=intervalDur/1000) qualified = true;
				return bonus;
			};

			var writeRecord = function(Record){

			 	Record.phase = "IntervalPractice";
			 	Record.sessionNum = NaN;
			 	Record.blockNum = NaN;
			 	Record.intervalNum = intervalNum;
			 	Record.intervalType = NaN;
			 	Record.intervalLength = intervalDur;
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

			intervalTimingParams.intervalDur = intervalDur;
			intervalTimingParams.itiDuration = itiDuration;
			intervalTimingParams.isiDuration = isiDuration;

			var interval = new Interval(intervalTimingParams,htmlParams,0,trialTimingParams,configParams,stimSet,callbacks);
			interval.initiate();
		}		

	}
	psiTurk.showPage("stage.html");
	Loop();
}



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




$(window).load( function(){
		psiTurk.doInstructions(instruction1Pages,ColorMappingPractice);
 	}
);


