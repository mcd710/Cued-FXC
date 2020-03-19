



var blockseq1 = _.shuffle(['Group','Individual']);
var blockseq2 = _.shuffle(['small','large']);

if(mycondition==1)
{
	
	var blockSequence = blockseq1.concat(blockseq2);
}
else
{
	
	var blockSequence = blockseq2.concat(blockseq1);
}