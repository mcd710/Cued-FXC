






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
			 	Record.groupID = testGroup;
			 	Record.sonaID = sonid;
			 	Record.sessionNum = sessionID;
			 	Record.blockNum = blockID;
			 	Record.groupType = blockType;
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









MainPartGardenGroupPoints =(blockType,cueSubset,nextPractice) =>()=>{

	var configParams = {space:false,accFeedback:false,washout:false,tally:true};
		
	var displayFeedback = function(tag,interval)
	{
		var counter = interval.getCounter();
		
	}

	var cleanFeedback = function(){$("#intervalMsg").remove();}
	
	var showScore = function(tag,cueType)
	{
		var showScoreInTag = function(counter){
			$("#scoreCounter").remove();
			var score = initialBonus[cueType] + numSign[cueType] * values[cueType] * counter[0];
			if(numSign[cueType]<0) score = Math.max(score,0);
			$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(tallyHeading[blockType] + score.toFixed(0))); //0
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
			 	Record.groupID = testGroup;
			 	Record.PLATFORM = PLATFORM;
			 	Record.sessionNum = sessionID;
			 	Record.blockNum = blockID;
			 	Record.groupType = blockType;
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




	MainPartGardenGroupPointsStroopFXC =(blockType,cueSubset,nextPractice) =>()=>{

		var configParams = {space:false,accFeedback:false,washout:false,tally:true};
		console.log("at the start of mainGarden")
		//var intervalScore=NaN;
		//var intervalProbability=NaN;
		//var scoreDetermined=NaN;
		var displayFeedback = function(tag,interval)
		{
			var counter = interval.getCounter();
			//var prob= (randi(0,100))/100
			//intervalProbability=prob
			console.log("interval.cueType is" + interval.cueType)
			//console.log("prob is "+ prob)
			if (interval.cued==true){ // if it is instructed
				if (interval.cueType == 'performance_low'||interval.cueType == 'performance_high'){ //if this is a performance interval 
					if (intervalEfficacy==1){
					//if (prob>= 1-efficacyProbability){ // if the random probability falls within the majority ex if .8 and it is anything = or greater than .2 score based on performance
						//console.log("prob is "+ prob +"and is greater than"+ 1-efficacyProbability)
						var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
						if (avgRewardWindow.length==avgRewardWindowLength){
								avgRewardWindow.shift();
								//var intervalRewRate=((interval.counter[0])/(interval.intervalDur-((interval.isiDuration)*(interval.counter[0]+interval.counter[1]))))
								var intervalRewRate=((interval.counter[0])/(interval.intervalDur))
		
								avgRewardWindow.push(intervalRewRate)
							}else{ 
								//var intervalRewRate=((interval.counter[0])/(interval.intervalDur-((interval.isiDuration)*(interval.counter[0]+interval.counter[1]))))
								var intervalRewRate=((interval.counter[0])/(interval.intervalDur))
								avgRewardWindow.push(intervalRewRate)
							}
						var FeedbackHeading= 'Performance: + '
					//	scoreDetermined="Performance"
					}else{// otherwise score based on random
						//console.log("prob is "+ prob +"and is less than"+ 1-efficacyProbability)
						var randomWindom = avgRewardWindow[Math.floor(Math.random()*avgRewardWindow.length)];
						var windowReward= Math.round(interval.intervalDur*randomWindom)
						var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * windowReward;
						var FeedbackHeading= 'Random: + '
					//	scoreDetermined="Random"
					}
				}else{ //this is a random interval
					//if (prob>= 1-efficacyProbability){ // common would be based on random selection
					if (intervalEfficacy==1){
						//var windowMean= mean(...avgRewardWindow)
					//	console.log("prob is "+ prob +"and is greater than"+ 1-efficacyProbability)
						var randomWindom = avgRewardWindow[Math.floor(Math.random()*avgRewardWindow.length)];
						var windowReward= Math.round(interval.intervalDur*randomWindom)
						var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * windowReward;
						var FeedbackHeading= 'Random: + '
					//	scoreDetermined="Random"
					}else{ // otherwise based on performance
					//	console.log("prob is "+ prob +"and is less than"+ 1-efficacyProbability)
						var FeedbackHeading= 'Performance: + '
					//	scoreDetermined="Performance"
						var score = initialBonus[interval.cueType] + numSign[interval.cueType] * values[interval.cueType] * interval.counter[0];
					}

				}
				if(numSign[interval.cueType]<0) score = Math.max(score,0);
				$(tag).append($("<p></p>").attr({id:'intervalMsg'}).html(FeedbackHeading +
						score.toFixed(0))); //0
				$("#intervalMsg").css({"position": "absolute",
				"left":"50%","top":"50%",
				"transform":"translate(-50%, -50%)","font-size":"40px"});
	
			}
		intervalScore=score	;
		}
	
		var cleanFeedback = function(){$("#intervalMsg").remove();}
		
		var showScore = function(tag,cueType)
		{
			var showScoreInTag = function(counter){
				$("#scoreCounter").remove();
				var score = initialBonus[cueType] + numSign[interval.cueType] * values[interval.cueType] * counter[0];
				if(numSign[cueType]<0) score = Math.max(score,0);
				$(tag).append($("<p></p>").attr({id:'scoreCounter'}).text(tallyHeading[cueType] + score.toFixed(0))); //0
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
		var numefficacyProbabilityMajor = Math.round(efficacyProbability*numIntervalPerBlock)
		console.log("numefficacyProbabilityMajor is "+ numefficacyProbabilityMajor)
		
		var numefficacyProbabilityMinor=numIntervalPerBlock-numefficacyProbabilityMajor
		console.log("numefficacyProbabilityMinor is "+ numefficacyProbabilityMinor)

		var numefficacyProbabilityMajorArray = repmat([1],numefficacyProbabilityMajor)
		console.log("numefficacyProbabilityMajorArray is "+ numefficacyProbabilityMajorArray)

		var numefficacyProbabilityMinorArray =repmat([2], numefficacyProbabilityMinor )
		console.log("numefficacyProbabilityMinorArray is "+ numefficacyProbabilityMinorArray)

		var efficacyProbabilityArray= _.shuffle(numefficacyProbabilityMajorArray.concat(numefficacyProbabilityMinorArray))
		console.log("efficacyProbabilityArray is "+ efficacyProbabilityArray)
		//var efficacyProbabilityMinorArray= repmat(numefficacyProbabilityMinor)
		var intervalScore;
	
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
				intervalEfficacy = efficacyProbabilityArray.shift();
				console.log("intervalEfficacy is "+ intervalEfficacy)
				var selected;
				var cue;
				var bonused;
				var scoreDetermined;
				


				//console.log(selectedMask);
				
				intervalID++;
				if(intervalID <= numIntervalPerBlock){
					selected = indexList.shift()
					cue = cueList[selected];
					intervalTimingParams.intervalDur = intervalDurationList[selected];
					bonused = selectedMask[selected];
					if(intervalEfficacy==1){
						if (cue[1] == 'performance_low'||cue[1] == 'performance_high'){
							scoreDetermined="Performance"
						}else{
							scoreDetermined="Random"
						}
					}else{
						if (cue[1] == 'performance_low'||cue[1] == 'performance_high'){
							scoreDetermined="Random"
						}else{
							scoreDetermined="Performance"
						}
					}

					
					

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
					console.log("inside the record")
					console.log("mycondition is "+ mycondition)
					//console.log("intervalProbability is "+ intervalProbability)
					console.log("intervalEfficacy is "+ intervalEfficacy)

					console.log("intervalScore is "+ intervalScore)
					console.log("scoreDetermined is "+ scoreDetermined)
					 Record.phase = "MainBlock";
					 Record.PLATFORM = PLATFORM;
					 Record.order = game;
					 Record.sessionNum = sessionID;
					 Record.blockNum = blockID;
					 Record.blockType = blockType;
					 Record.intervalNum = intervalID;
					 Record.intervalType = cue[1];
					 Record.intervalLength = intervalTimingParams.intervalDur;
					 Record.intervalEfficacyType=intervalEfficacy;
					 Record.intervalScorePoints = intervalScore;
					 Record.scoreDetermined=scoreDetermined;
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
	
	
	
				if(intervalID > numIntervalPerBlock) {
					blockPartGarden(nextPractice);
				}
				else {
					console.log("at the start of the interval")
				
					//console.log("mycondition is "+ mycondition)
					console.log("intervalScore is "+ intervalScore)
					intervalScore= NaN
					console.log("intervalScore is "+ intervalScore)

					console.log("scoreDetermined is "+ scoreDetermined)
					//var scoreDetermined=NaN;
					console.log("scoreDetermined is "+ scoreDetermined)

					var stimSet = generateStimSet(possibleStimsInCongruent,possibleStimsCongruent,numIntervalTrials);
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