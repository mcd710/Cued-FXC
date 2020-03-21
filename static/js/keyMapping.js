//file for the functions to call for keyMapping practice




ColorMappingPractice = ()=>{

	console.log('inside the ColorMappingPractice')
	var configParams = {space:false,accFeedback:true,washout:true};
	console.log("possibleStimsNeutral is" + possibleStimsNeutral)
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
		//what to do after the Color mapping practice
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



FruitMappingPractice = ()=>{

	console.log('inside the FruitMappingPractice')
	var configParams = {space:false,accFeedback:true,washout:true};
	console.log("possibleStimsNeutral is" + possibleStimsNeutral)

	var stimSet = _.shuffle(repmat(possibleStimsNeutral,Math.ceil(numColorPracticeTrials/possibleStimsNeutral.length)));
	
	var writeRecord = function(Record){

	 	Record.phase = "FruitMappingPractice";
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
		//what to do after the Color mapping practice
		psiTurk.doInstructions(instruction2Pages,StroopPractice);
	}

	var callbacks = {
		endOfSetCallback:nextAction,
		tallyCallback:0,
		recordStimCallback:recordStimPWI,
		completeRecordCallback:writeRecord
	};
	
	trialTimingParams.itiDuration = 500;

	var trial = new timedTrial(stimSet,[false],[0,0],trialTimingParams,'#stim',callbacks,configParams);
	psiTurk.showPage("stages/stageGarden.html");
	$("body").unbind("keydown").focus().keydown(trial.responseListener.bind(trial));
	trial.initiation();
}