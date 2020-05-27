//file containing the instruction functions 




instructionsProtect= () => {


	const pages =  [
	"instructions/instruct-story1.html",
	"instructions/instruct-story2.html",
	"instructions/instruct-0.html",
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-2Q.html",
	"instructions/instruct-3P.html",
	"instructions/instruct-3G1.html",
	"instructions/instruct-3G2.html",
	"instructions/instruct-3GB.html",
	"instructions/instruct-3GQ1.html",
	"instructions/instruct-3GQ2.html",
	"instructions/instruct-3L1.html",
	"instructions/instruct-3L2.html",
	"instructions/instruct-3LB.html",
	"instructions/instruct-3LQ1.html",
	"instructions/instruct-3LQ2.html",
	"instructions/instruct-3MQ.html",
	"instructions/instruct-3M2.html",
	"instructions/instruct-Main-Sample.html",
	"instructions/instruct-ready.html",
	"instructions/instruct-ready-space.html",
	"instructions/break-remind.html",
	"instructions/break.html",
	"instructions/break-protector.html",
	"instructions/break-collector.html",
	"instructions/break-small.html",
	"instructions/break-large.html",
	"stages/stage.html",
	"postquestionnaire.html",
	"postquestionnaire_gain_low.html",
	"postquestionnaire_gain_high.html",
	"postquestionnaire_loss_low.html",
	"postquestionnaire_loss_high.html",
	];

	const instruction1Pages =[
	//"instructions/instruct-0.html",
	"instructions/instruct-story1.html",
	"instructions/instruct-1.html",
	"instructions/instruct-ready.html",
	];



const instruction2Pages = [
"instructions/instruct-2.html",
"instructions/instruct-2Q.html",
"instructions/instruct-ready.html"
];

const instruction3Pages = [
"instructions/instruct-3P.html",
"instructions/instruct-ready.html",
];

const instructionLossPages = [
"instructions/instruct-3L1.html",
"instructions/instruct-3LB.html",
"instructions/instruct-3LQ1.html",
"instructions/instruct-3LQ2.html",
"instructions/instruct-3L2.html",
"instructions/instruct-ready.html"
];

const instructionGainPages = [
"instructions/instruct-story2.html",
"instructions/instruct-3G1.html",
"instructions/instruct-3GB.html",
"instructions/instruct-3GQ1.html",
"instructions/instruct-3GQ2.html",
"instructions/instruct-3G2.html",
"instructions/instruct-ready.html"
];


const postPracticeBreak = [
"instructions/instruct-Main-Sample.html",
"instructions/instruct-3MQ.html",
"instructions/instruct-3M2.html"
]


const BreakCollectorPage = [
"instructions/break-collector.html",
"instructions/break-remind.html"
];


const BreakProtectorPage = [
"instructions/break-protector.html",
"instructions/break-remind.html"
];


const BreakSmallPage = [
"instructions/break-small.html",
"instructions/break-remind.html"
];


const BreakLargePage = [
"instructions/break-large.html",
"instructions/break-remind.html"
];


const BreakPage = [
"instructions/break.html"
];

	return {pages, instruction1Pages,
		instruction2Pages,instruction3Pages,
		instructionLossPages,instructionGainPages,
		postPracticeBreak,BreakCollectorPage,
		BreakProtectorPage,BreakSmallPage,
		BreakLargePage,BreakPage
	}

}



instructionsGardenGains = ()=>{
	const pages = [
	"gardenGainsInstructions/instruct-0.html",
	"gardenGainsInstructions/instruct-1F.html",
	"gardenGainsInstructions/instruct-1Fb.html",
	"gardenGainsInstructions/instruct-1Fc.html",
	"gardenGainsInstructions/instruct-1Fd.html",
	"gardenGainsInstructions/instruct-2F.html",
	"gardenGainsInstructions/instruct-2QF.html",
	"gardenGainsInstructions/instruct-3F.html",
	"gardenGainsInstructions/instruct-3Fb.html",
	"gardenGainsInstructions/instruct-3P.html",
	"gardenGainsInstructions/instruct-3Q.html",
	"gardenGainsInstructions/instruct-4F.html",
	"gardenGainsInstructions/instruct-Group.html",
	"gardenGainsInstructions/instruct-GroupQ.html",
	"instructions/instruct-3L1.html",
	"instructions/instruct-3LB.html",
	"instructions/instruct-3LQ1.html",
	"instructions/instruct-3LQ2.html",
	"instructions/instruct-3L2.html",
	"instructions/instruct-ready.html",
	"gardenGainsInstructions/instruct-readyF.html",
	"gardenGainsInstructions/breakF.html",
	"srm/DASS.html",
	"srm/GSE.html",
	"srm/ADDI.html",
	"srm/AMI.html",
	"stages/stage.html",
	"postquestionnaire.html",
	"postTask.html"
	];

	psiTurk.preloadPages(pages);

	const questionnaireStart = [
	"gardenGainsInstructions/instruct-0.html",
	];

	const keyMappingInstructions = [
	"gardenGainsInstructions/instruct-1F.html",
	"gardenGainsInstructions/instruct-1Fb.html",
	"gardenGainsInstructions/instruct-1Fc.html",
	"gardenGainsInstructions/instruct-1Fd.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];
	const interferenceInstructions = [
	"gardenGainsInstructions/instruct-2F.html",
	"gardenGainsInstructions/instruct-2QF.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];
	const intervalInstructions = [
	"gardenGainsInstructions/instruct-3P.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];

	const instructionGainPages = [
	"gardenGainsInstructions/instruct-3F.html",
	"gardenGainsInstructions/instruct-3Fb.html",
	"gardenGainsInstructions/instruct-3Q.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];

	const instructionGroupPages = [
	"gardenGainsInstructions/instruct-Group.html",
	"gardenGainsInstructions/instruct-GroupQ.html",
	];

	const instructionLossPages = [
	"instructions/instruct-3L1.html",
	"instructions/instruct-3LB.html",
	"instructions/instruct-3LQ1.html",
	"instructions/instruct-3LQ2.html",
	"instructions/instruct-3L2.html",
	"instructions/instruct-ready.html"
	];

	const startGameInstructions = [
	"gardenGainsInstructions/instruct-4F.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];
	const BreakPage = [
	"gardenGainsInstructions/breakF.html"
	];

	return {pages,questionnaireStart,
		keyMappingInstructions,
		interferenceInstructions,
		intervalInstructions,
		instructionGainPages,
		instructionGroupPages,
		instructionLossPages,
		startGameInstructions,
		BreakPage}



}

instructionsGardenGainsPoints = ()=>{
	const pages = [
	"gardenGainsInstructions/instruct-qualtrics.html",
	"gardenGainsInstructions/instruct-Welcome.html",
	"gardenGainsInstructions/instruct-KeyMapping1.html",
	"gardenGainsInstructions/instruct-KeyMapping2.html",
	"gardenGainsInstructions/instruct-KeyMapping3.html",
	"gardenGainsInstructions/instruct-interference.html",
	"gardenGainsInstructions/instruct-interferenceQ.html",
	"gardenGainsInstructions/instruct-interval.html",
	"gardenGainsInstructions/instruct-GainPoints1.html",
	"gardenGainsInstructions/instruct-GainPoints2.html",
	"gardenGainsInstructions/instruct-GainPointsQ.html",
	"gardenGainsInstructions/instruct-Group.html",
	"gardenGainsInstructions/instruct-GroupQ.html",
	"gardenGainsInstructions/instruct-PaymentStart.html",
	"gardenGainsInstructions/instruct-readyF.html",
	"gardenGainsInstructions/breakF.html",
	"gardenGainsInstructions/breakPersonal.html",
	"gardenGainsInstructions/breakGroup.html",
	"stages/stage.html",
	"postTask.html"
	];

	psiTurk.preloadPages(pages);

	const questionnaireStart = [
	"gardenGainsInstructions/instruct-qualtrics.html",
	];

	const keyMappingInstructions = [
	"gardenGainsInstructions/instruct-Welcome.html",
	"gardenGainsInstructions/instruct-KeyMapping1.html",
	"gardenGainsInstructions/instruct-KeyMapping2.html",
	"gardenGainsInstructions/instruct-KeyMapping3.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];
	const interferenceInstructions = [
	"gardenGainsInstructions/instruct-interference.html",
	"gardenGainsInstructions/instruct-interferenceQ.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];
	const intervalInstructions = [
	"gardenGainsInstructions/instruct-interval.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];

	const instructionGainPages = [
	"gardenGainsInstructions/instruct-GainPoints1.html",
	"gardenGainsInstructions/instruct-GainPoints2.html",
	"gardenGainsInstructions/instruct-GainPointsQ.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];

	const instructionGroupPages = [
	"gardenGainsInstructions/instruct-Group.html",
	"gardenGainsInstructions/instruct-GroupQ.html",
	];

	
	const startGameInstructions = [
	"gardenGainsInstructions/instruct-PaymentStart.html",
	"gardenGainsInstructions/instruct-readyF.html"
	];
	const BreakPagePersonal = [
	"gardenGainsInstructions/breakGroup.html"
	];

	const BreakPageGroup = [
	"gardenGainsInstructions/breakGroup.html"
	];

	return {pages,questionnaireStart,
		keyMappingInstructions,
		interferenceInstructions,
		intervalInstructions,
		instructionGainPages,
		instructionGroupPages,
		startGameInstructions,
		BreakPagePersonal,
		BreakPageGroup}



}

