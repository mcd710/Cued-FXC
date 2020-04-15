// Sets the cues depending on the task 

//cues for collector protector cover story gems and bombs
cuesProtect= ()=> {

console.log("inside cuesProtect")
	const cues = {
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

	return cues


}

// money cues low and high
cuesMoney= ()=> {

console.log("inside cuesMoney")
	const cues = {
	gain:
		[['/static/images/cues/Reward/Rew1.png','gain_low'],
		 ['/static/images/cues/Reward/Rew2.png','gain_high']],
	loss:
		[['/static/images/cues/rewardPunish/Pun1_small.png','loss_low'],
		 ['/static/images/cues/rewardPunish/Pun2.png','loss_high']],
	};

	return cues


}


// money cues low and high
cuesMoneyGroup= ()=> {

console.log("inside cuesMoney")
	const cues = {
	Personal_Gain:
		[['/static/images/cues/Reward/Rew1.png','gain_low'],
		 ['/static/images/cues/Reward/Rew2.png','gain_high']],
	Group_Gain:
		[['/static/images/cues/Reward/Rew1.png','gain_low'],
		 ['/static/images/cues/Reward/Rew2.png','gain_high']],
	};

	return cues


}

