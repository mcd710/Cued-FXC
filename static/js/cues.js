// Sets the cues depending on the task 



var setCues = function(instructionName){


	var cueSet= instructionName;

	switch (instructionSet){

		case SPICEGains:
		
		

		break;

		case ProtectorvCollector:

		var cues = {
	collector:
		[['/static/images/cues/GL_story/Rew1.png','gain_low'],
		 ['/static/images/cues/GL_story/Rew2.png','gain_high']],
	protector:
		[['/static/images/cues/GL_story/Pun1.png','loss_low'],
		 ['/static/images/cues/GL_story/Pun2.png','loss_high']],
	small:
		[['/static/images/cues/GL_story/Rew1.png','gain_low'],
		 ['/static/images/cues/GL_story/Pun1.png','loss_low']],
	large:
		[['/static/images/cues/GL_story/Rew2.png','gain_high'],
		 ['/static/images/cues/GL_story/Pun2.png','loss_high']]
};

		break;



	}


}