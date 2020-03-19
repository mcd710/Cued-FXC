setTrialNumByMode= (mode)=>{

	if(test)
	{
		console.log("inside testmode")
		const numColorPracticeTrials = 2;
		const numStroopPracticeTrials = 2;

		const numIntervalTrials = 30;
		const numIntervalPractice = 2;
		const numGainLossPractice = 2;
		
		const numBlock = 4;
		const numIntervalPerBlock = 4;
		const selectPerBlock = 1;
		const initialFundForLoss = 600;
		
		return{
		numColorPracticeTrials,
		numStroopPracticeTrials,
		numIntervalTrials, 
		numIntervalPractice,
		numGainLossPractice,
		numBlock, 
		numIntervalPerBlock,
		selectPerBlock, 
		initialFundForLoss}
	}
	else
	{
		console.log("inside realmode")
		const numColorPracticeTrials = 80;
		const numStroopPracticeTrials = 60;

		const numIntervalTrials = 30;
		const numIntervalPractice = 4;
		const numGainLossPractice = 4;
		
		const numBlock = 4;
		const numIntervalPerBlock = 16;
		const selectPerBlock = 2;
		const initialFundForLoss = 1200;

		return{
		numColorPracticeTrials,
		numStroopPracticeTrials,
		numIntervalTrials, 
		numIntervalPractice,
		numGainLossPractice,
		numBlock, 
		numIntervalPerBlock,
		selectPerBlock, 
		initialFundForLoss}
	}
	console.log("outside modes")
	

}

