//file for the functions to call for interference practice




StroopPractice = ()=>(){

	console.log('inside the StroopPractice')
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
		//what to do next
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
