 // functions for the differnt blocks


blocksGroups= (mycondition)=> {
	console.log("inside blocksGroups")

	var groupblockseq1= _.shuffle(['Group_Gain','Personal_Gain']);
	var groupblockseq2 = _.shuffle(['Group_Gain','Personal_Gain']);

	const highValue = .10;
	const lowValue = .01;
	const values = {gain_low:lowValue,gain_high:highValue};
	const heading = {Personal_Gain:'You gained + $',Group_Gain: testGroup + ' gained + $'};
	const tallyHeading = {Personal_Gain:'You: + $',Group_Gain: testGroup + ': + $'};
	const numSign = {gain_low:1,gain_high:1};
	const initialBonus = {gain_low:0,gain_high:0};
	const breakForBlockType = {Personal_Gain:BreakPagePersonal,Group_Gain:BreakPageGroup};

	if(mycondition==1)
	{
		
		const blockSequence = groupblockseq1.concat(groupblockseq2);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			tallyHeading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}
	else
	{
		
		const blockSequence = groupblockseq2.concat(groupblockseq1);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			tallyHeading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}



}


blocksGroupsPoints= (mycondition)=> {
	console.log("inside blocksGroups")

	var groupblockseq1= _.shuffle(['Group_Gain','Personal_Gain']);
	var groupblockseq2 = _.shuffle(['Group_Gain','Personal_Gain']);

	const highValue = 100;
	const lowValue = 1;
	const values = {gain_low:lowValue,gain_high:highValue};
	const heading = {Personal_Gain:'You gained + ',Group_Gain: testGroup + ' gained + '};
	const tallyHeading = {Personal_Gain:'You: + ',Group_Gain: testGroup + ': + '};
	const numSign = {gain_low:1,gain_high:1};
	const initialBonus = {gain_low:0,gain_high:0};
	const breakForBlockType = {Personal_Gain:BreakPagePersonal,Group_Gain:BreakPageGroup};

	if(mycondition==1)
	{
		
		const blockSequence = groupblockseq1.concat(groupblockseq2);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			tallyHeading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}
	else
	{
		
		const blockSequence = groupblockseq2.concat(groupblockseq1);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			tallyHeading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}



}


blocksGain= (mycondition)=> {
	console.log("inside blocksGardenGain")

	var blockseq1 = _.shuffle(['gain','gain']);
	var blockseq2 = _.shuffle(['gain','gain']);

	const highValue = .10;
	const lowValue = .01;
	const values = {gain_low:lowValue,gain_high:highValue};
	const heading = {gain_low:'You gained + $',gain_high:'You gained + $'};
	const tallyHeading = {gain_low:'+ $',gain_high:'+ $'};
	const numSign = {gain_low:1,gain_high:1};
	const initialBonus = {gain_low:0,gain_high:0};
	const breakForBlockType = {gain:BreakPage};


	if(mycondition==1)
	{
		
		const blockSequence = blockseq1.concat(blockseq2);
		
		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			tallyHeading,
			numSign,
			initialBonus,
			breakForBlockType
		}

	}
	else
	{
		
		const blockSequence = blockseq2.concat(blockseq1);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			tallyHeading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}



}

blocksLoss= (mycondition)=> {
	console.log("inside blocksGardenGain")

	var blockseq1 = _.shuffle(['loss','loss']);
	var blockseq2 = _.shuffle(['loss','loss']);

	const highValue = .10;
	const lowValue = .01;
	const values = {loss_low:lowValue,loss_high:highValue};
	const heading = {loss_low:'- $',loss_high:'- $'};
	const numSign = {loss_low:-1,loss_high:-1};
	const initialBonus = {loss_low:initialLoss,loss_high:initialLoss};
	const breakForBlockType = {loss:BreakPage};


	if(mycondition==1)
	{
		
		const blockSequence = blockseq1.concat(blockseq2);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}
	else
	{
		
		const blockSequence = blockseq2.concat(blockseq1);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}



}



blocksGainLoss= (mycondition)=> {
	console.log("inside blocksGardenGain")

	var blockseq1 = _.shuffle(['gain','loss']);
	var blockseq2 = _.shuffle(['gain','loss']);

	const highValue = .10;
	const lowValue = .01;
	const values = {gain_low:lowValue,gain_high:highValue,loss_low:lowValue,loss_high:highValue};
	const heading = {gain_low:'+ $',gain_high:'+ $',loss_low:'- $',loss_high:'- $'};
	const numSign = {gain_low:1,gain_high:1,loss_low:-1,loss_high:-1};
	const initialBonus = {gain_low:0,gain_high:0,loss_low:initialLoss,loss_high:initialLoss};
	const breakForBlockType = {gain:BreakPage, loss:BreakPage};


	if(mycondition==1)
	{
		
		const blockSequence = blockseq1.concat(blockseq2);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}
	else
	{
		
		const blockSequence = blockseq2.concat(blockseq1);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}



}

blocksCollectorProtector= (mycondition)=> {
	
	var blockseq1 = _.shuffle(['collector','protector']);
	var blockseq2 = _.shuffle(['small','large']);

	const highValue = 10;
	const lowValue = 1;
	const values = {gain_low:lowValue,gain_high:highValue,loss_low:lowValue,loss_high:highValue};
	const heading = heading = {gain_low:'Gem: ',gain_high:'Gem: ',loss_low:'Bomb: ',loss_high:'Bomb: '};
	const numSign = {gain_low:1,gain_high:1,loss_low:-1,loss_high:-1};
	const initialBonus = {gain_low:0,gain_high:0,loss_low:initialLoss,loss_high:initialLoss};
	var breakForBlockType = {collector:BreakCollectorPage,protector:BreakProtectorPage,
	small:BreakSmallPage,large:BreakLargePage};



	if(mycondition==1)
	{
		
		const blockSequence = blockseq1.concat(blockseq2);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}
	else
	{
		
		const blockSequence = blockseq2.concat(blockseq1);

		return {
			blockSequence,
			highValue,
			lowValue,
			values,
			heading,
			numSign,
			initialBonus,
			breakForBlockType
		}
	}



}