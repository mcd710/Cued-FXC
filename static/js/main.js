






MainPartGarden =(blockType,cueSubset,nextPractice) =>()=>{

	var configParams = {space:false,accFeedback:false,washout:false,tally:true};
		
	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
		if(numSign[interval.cueType]<0) score = Math.max(score,0);
		$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(heading[blockType] +
				score.toFixed(2))); //0
		$("#intervalMsg").css({'margin-top':'0px','border':'dashed', 'background': 'white','font-size':"25px" });
	}

	var cleanFeedback = function(){$("#intervalMsg").remove();}
	
	var showScore = function(tag,cueType)
	{
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();
			var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
			if(numSign[cueType]<0) score = Math.max(score,0);
			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(tallyHeading[blockType] + score.toFixed(2))); //0
			//$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(counter[0].toFixed(0)));
			$("#scoreCounter").css({'margin-top':'0px', 'border':'dashed', 'background': 'white', 'font-size':"25px"});
		};
		return showScoreInTag;
	}


	var cleanTally = function(){
		$('#scoreCounter').remove();
	}

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
				recordStimCallback:recordStimPWI,
				writeRecord:writeRecord,
				calculateBonus:calculateBonus,
				cleanTally:cleanTally
			};



			if(intervalID > numIntervalPerBlock) {
				blockPartGarden(nextPractice);
			}
			else {
				var stimSet = generateStimSetImage(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
				interval = new Interval(intervalTimingParams,htmlParams,cue,trialTimingParams,configParams,stimSet,callbacks);
				psiTurk.showPage("stages/stage.html");
				showBoard()
				interval.initiate();
			}
		}

		returnToInstructCallbackBreak = function(){psiTurk.doInstructions(breakForBlockType[blockType],Loop);};
		//psiTurk.doInstructions(breakForBlockType[blockType],Loop);
		Loop();

	}