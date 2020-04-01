 // functions for the differnt blocks


blocksGroups= (mycondition)=> {
	console.log("inside blocksProtect")

	var blockseq1 = _.shuffle(['Group','Individual']);
	var blockseq2 = _.shuffle(['Group','Individual']);

	if(mycondition==1)
	{
		
		const blockSequence = blockseq1.concat(blockseq2);

		return blockSequence
	}
	else
	{
		
		const blockSequence = blockseq2.concat(blockseq1);

		return blockSequence
	}



}


blocksGardenGain= (mycondition)=> {
	console.log("inside blocksGardenGain")

	var blockseq1 = _.shuffle(['gain','gain']);
	var blockseq2 = _.shuffle(['gain','gain']);

	if(mycondition==1)
	{
		
		const blockSequence = blockseq1.concat(blockseq2);

		return blockSequence
	}
	else
	{
		
		const blockSequence = blockseq2.concat(blockseq1);

		return blockSequence
	}



}