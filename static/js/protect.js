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
	"stage.html",
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

