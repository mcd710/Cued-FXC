
//file for the functions to call for interval practice



 intervalPracticeProtector = ()=>{
	/*** Step 1: Define how you want to display interval-end feedback ***/
	console.log("inside the intervalPracticeProtector")

	var qualified = false;
	trialTimingParams.itiDuration = 0;
	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).text('Correct: ' + interval.counter[0]));
		$("#intervalMsg").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
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
			$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
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
	psiTurk.showPage("stages/stage.html");
	Loop();
}

intervalPracticeGarden=(nextPractice) =>()=>{
	/*** Step 1: Define how you want to display interval-end feedback ***/
	console.log("inside the intervalPracticeGarden")

	var qualified = false;
	trialTimingParams.itiDuration = 0;
	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).text('Correct: ' + interval.counter[0]));
		$("#intervalMsg").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
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
			$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
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
			blockPartGarden(nextPractice);
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
			var stimSet = generateStimSetImage(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);

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
				recordStimCallback:recordStimPWI,
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
	psiTurk.showPage("stages/stage.html");
	showBoard()
	Loop();
}