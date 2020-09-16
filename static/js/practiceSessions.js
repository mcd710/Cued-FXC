



practiceBlocksGarden =(practiceType,nextPractice) =>()=>{

		var configParams = {space:false,accFeedback:false,washout:false,tally:true};

		/*** The cues are specified as [path,cueType] ***/
		var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numGainLossPractice/intervalDurations.length)));
		var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numGainLossPractice/itiDurations.length)));
		var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numGainLossPractice/isiDurations.length)));

		switch(practiceType) {
			case 'gain':
		    	subCueSet = cues['Personal_Gain'];
		   
		    break;
		    case 'Personal_Gain':
		    	subCueSet = cues['Personal_Gain'];
		   
		    break;
		     case 'Group_Gain':
		    	subCueSet = cues['Group_Gain'];
		   
		    break;
		  	case 'loss':
		    subCueSet = cues['loss'];

		    break;
		}


		var cueSet = _.shuffle(repmat(subCueSet,Math.ceil(numGainLossPractice/subCueSet.length)));
		var intervalID = 0;
		var interval = 0;


		var displayFeedback = function(tag,interval)
		{
			var counter = interval.getCounter();
			var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
			if(numSign[interval.cueType]<0) score = Math.max(score,0);
			$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html("+ $"+
				score.toFixed(2)));
			$("#intervalMsg").css({'margin-top':'0px','border':'dashed', 'background': 'white','font-size':"25px"});
		}

		var cleanFeedback = function(){$("#intervalMsg").remove();}

		var showScore = function(tag,cueType)
		{
			var showScoreInTag = function(counter){
				$("#scoreCounter").remove();
				var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
				if(numSign[cueType]<0) score = Math.max(score,0);
				$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text("+ $" +score.toFixed(2)));
				//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
				$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});

			};
			return showScoreInTag;
		}

		var cleanTally = function(){
			$('#scoreCounter').remove();
		}



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
				if(practiceType == 'gain')
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
				recordStimCallback:recordStimPWI,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};

			var cue = cueSet.shift();
			
			if(intervalID > numGainLossPractice) 
			{
				blockPartGarden(nextPractice)

			}
			else
			{
				var stimSet = generateStimSetImage(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stages/stage.html");
				showBoard()
				interval.initiate();
			}
		}
		Loop();

}




practiceBlocksGardenPoints =(practiceType,nextPractice) =>()=>{

		var configParams = {space:false,accFeedback:false,washout:false,tally:true};

		/*** The cues are specified as [path,cueType] ***/
		var intervalDurationSet = _.shuffle(repmat(intervalDurations,Math.ceil(numGainLossPractice/intervalDurations.length)));
		var itiDurationSet = _.shuffle(repmat(itiDurations,Math.ceil(numGainLossPractice/itiDurations.length)));
		var isiDurationSet = _.shuffle(repmat(isiDurations,Math.ceil(numGainLossPractice/isiDurations.length)));

		switch(practiceType) {
			case 'gain':
		    	subCueSet = cues['Personal_Gain'];
		   
		    break;
		    case 'Personal_Gain':
		    	subCueSet = cues['Personal_Gain'];
		   
		    break;
		     case 'Group_Gain':
		    	subCueSet = cues['Group_Gain'];
		   
		    break;
		  	case 'loss':
		    subCueSet = cues['loss'];

		    break;
		}


		var cueSet = _.shuffle(repmat(subCueSet,Math.ceil(numGainLossPractice/subCueSet.length)));
		var intervalID = 0;
		var interval = 0;


		var displayFeedback = function(tag,interval)
		{
			var counter = interval.getCounter();
			var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
			if(numSign[interval.cueType]<0) score = Math.max(score,0);
			$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html("+ "+
				score.toFixed(2)));//0
			$("#intervalMsg").css({'margin-top':'0px','border':'dashed', 'background': 'white','font-size':"25px"});
		}

		var cleanFeedback = function(){$("#intervalMsg").remove();}

		var showScore = function(tag,cueType)
		{
			var showScoreInTag = function(counter){
				$("#scoreCounter").remove();
				var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
				if(numSign[cueType]<0) score = Math.max(score,0);
				$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text("+ " +score.toFixed(2)));//0
				//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
				$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});

			};
			return showScoreInTag;
		}

		var cleanTally = function(){
			$('#scoreCounter').remove();
		}



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
				if(practiceType == 'gain')
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
				recordStimCallback:recordStimPWI,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};

			var cue = cueSet.shift();
			
			if(intervalID > numGainLossPractice) 
			{
				blockPartGarden(nextPractice)

			}
			else
			{
				var stimSet = generateStimSetImage(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stages/stage.html");
				showBoard()
				interval.initiate();
			}
		}
		Loop();

}
