// functions for the differnt blocks


blocksProtect= (mycondition)=> {
	console.log("inside blocksProtect")

	var blockseq1 = _.shuffle(['Group','Individual']);
	var blockseq2 = _.shuffle(['small','large']);

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
