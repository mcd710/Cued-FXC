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
	"gardenGainsInstructions/breakPersonal.html"
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



instructionsEfficacyGardenPoints = ()=>{
	const pages = [
	"gardenLFXCInstructions/instruct-qualtrics.html",
	"gardenLFXCInstructions/instruct-Welcome.html",
	"gardenLFXCInstructions/instruct-KeyMapping1.html",
	"gardenLFXCInstructions/instruct-KeyMappingStroop1.html",
	"gardenLFXCInstructions/instruct-KeyMapping2.html",
	"gardenLFXCInstructions/instruct-KeyMapping3.html",
	"gardenLFXCInstructions/instruct-interference.html",
	"gardenLFXCInstructions/instruct-interferenceQ.html",
	"gardenLFXCInstructions/instruct-interval.html",

	"gardenLFXCInstructions/instruct-GainCoins0.html",


	"gardenLFXCInstructions/instruct-efficacyIntro.html",
	"gardenLFXCInstructions/instruct-efficacyHigh1.html",
	"gardenLFXCInstructions/instruct-efficacyHigh2.html",
	"gardenLFXCInstructions/instruct-efficacyHighQ.html",

	"gardenLFXCInstructions/instruct-efficacyLow1.html",
	"gardenLFXCInstructions/instruct-efficacyLow2.html",
	"gardenLFXCInstructions/instruct-efficacyLow3.html",
	"gardenLFXCInstructions/instruct-efficacyLowQ.html",


	"gardenLFXCInstructions/instruct-PaymentStartCoins.html",
	"gardenLFXCInstructions/instruct-ready.html",
	"gardenLFXCInstructions/break-random.html",
	"gardenLFXCInstructions/break-performance.html",
	"gardenLFXCInstructions/break-large.html",
	"gardenLFXCInstructions/break-small.html",
	"gardenLFXCInstructions/break.html",
	"stages/stage.html",
	"postTask.html"
	];

	psiTurk.preloadPages(pages);

	const questionnaireStart = [
	"gardenLFXCInstructions/instruct-qualtrics.html",
	];

	const keyMappingInstructions = [
	"gardenLFXCInstructions/instruct-Welcome.html",
	"gardenLFXCInstructions/instruct-KeyMappingStroop1.html",
	//"gardenLFXCInstructions/instruct-KeyMapping2.html",
	//"gardenLFXCInstructions/instruct-KeyMapping3.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];
	const interferenceInstructions = [
	"gardenLFXCInstructions/instruct-interference.html",
	"gardenLFXCInstructions/instruct-interferenceQ.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];
	const intervalInstructions = [
	"gardenLFXCInstructions/instruct-interval.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];

	const instructionGainPages = [
	"gardenLFXCInstructions/instruct-GainCoins0.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];

	const instructionEfficacyHighPages = [
	"gardenLFXCInstructions/instruct-efficacyIntro.html",
	"gardenLFXCInstructions/instruct-efficacyHigh1.html",
	"gardenLFXCInstructions/instruct-efficacyHigh2.html",
	"gardenLFXCInstructions/instruct-efficacyHighQ.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];

	const instructionEfficacyLowPages = [
	"gardenLFXCInstructions/instruct-efficacyLow1.html",
	"gardenLFXCInstructions/instruct-efficacyLow2.html",
	"gardenLFXCInstructions/instruct-efficacyLow3.html",
	"gardenLFXCInstructions/instruct-efficacyLowQ.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];

	
	const startGameInstructions = [
	"gardenLFXCInstructions/instruct-PaymentStartCoins.html",
	"gardenLFXCInstructions/instruct-ready.html"
	];


	const BreakPage = [
	"gardenLFXCInstructions/breakF.html"
	];


	const BreakRandomHighPage = [
		"gardenLFXCInstructions/break-random.html"
		
		];
		
		
		const BreakPerformanceHighPage = [
		"gardenLFXCInstructions/break-performance.html"
		];
		
		
		const BreakRandomLowPage = [
		"gardenLFXCInstructions/break-small.html"
		];
		
		
		const BreakPerformanceLowPage = [
		"gardenLFXCInstructions/break-large.html"
		];

	return {pages,questionnaireStart,
		keyMappingInstructions,
		interferenceInstructions,
		intervalInstructions,
		instructionGainPages,
		instructionEfficacyHighPages,
		instructionEfficacyLowPages,
		startGameInstructions,
		BreakPage,
		BreakRandomHighPage,
		BreakPerformanceHighPage,
		BreakRandomLowPage,
		BreakPerformanceLowPage
	}



}




instructionsFXCICR = ()=>{
	const pages = [
	
	"FXCICRInstructions/instruct-Welcome.html",
	"FXCICRInstructions/instruct-Automaticity1.html",
	"FXCICRInstructions/instruct-Automaticity2.html",
	"FXCICRInstructions/instruct-AutomaticityReady.html",

	"FXCICRInstructions/instruct-KeyMapping1.html",
	"FXCICRInstructions/instruct-KeyMapping2.html",
	"FXCICRInstructions/instruct-KeyMappingReady.html",


	"FXCICRInstructions/instruct-AutomaticityTest1.html",

	"FXCICRInstructions/instruct-KeyMappingTest1.html",	

	"FXCICRInstructions/instruct-interference1.html",
	"FXCICRInstructions/instruct-interference2.html",
	"FXCICRInstructions/instruct-interference3.html",
	"FXCICRInstructions/instruct-interferenceQ.html",

	"FXCICRInstructions/instruct-interval1.html",

	"FXCICRInstructions/instruct-efficacyHigh1.html",
	"FXCICRInstructions/instruct-efficacyHigh2.html",
	"FXCICRInstructions/instruct-efficacyHighQ.html",

	"FXCICRInstructions/instruct-efficacyLow1.html",
	"FXCICRInstructions/instruct-efficacyLow2.html",
	"FXCICRInstructions/instruct-efficacyLowQ.html",

	"FXCICRInstructions/instruct-EfficacyAll1.html",
	"FXCICRInstructions/instruct-EfficacyAll2.html",
	"FXCICRInstructions/instruct-EfficacyAll3.html",
	"FXCICRInstructions/instruct-EfficacyAllQ.html",

	"FXCICRInstructions/instruct-MainStart1.html",
	"FXCICRInstructions/instruct-MainStart2.html",

	"FXCICRInstructions/instruct-break-LowEfficacyHighReward.html",
	"FXCICRInstructions/instruct-break-HighEfficacyHighReward.html",

	"FXCICRInstructions/instruct-break-LowEfficacyLowReward.html",
	"FXCICRInstructions/instruct-break-HighEfficacyLowReward.html",

	"FXCICRInstructions/instruct-ready.html",

	"stages/stage.html",
	"postTask.html",
	"bonusDisplay.html"
	];

	psiTurk.preloadPages(pages);

	const questionnaireStart = [
	"gardenLFXCInstructions/instruct-qualtrics.html",
	];

	const AutomaticityInstructions = [
	"FXCICRInstructions/instruct-Welcome.html",
	"FXCICRInstructions/instruct-Automaticity1.html",
	"FXCICRInstructions/instruct-Automaticity2.html",
	"FXCICRInstructions/instruct-AutomaticityReady.html"
	];


	const keyMappingInstructions = [
	"FXCICRInstructions/instruct-KeyMapping1.html",
	"FXCICRInstructions/instruct-KeyMapping2.html",
	"FXCICRInstructions/instruct-KeyMappingReady.html"
	];
	const automaticityTestInstructions = [
	"FXCICRInstructions/instruct-AutomaticityTest1.html",
	"FXCICRInstructions/instruct-AutomaticityReady.html"
	];
	

	const keyMappingTestInstructions = [
		"FXCICRInstructions/instruct-KeyMappingTest1.html",
		"FXCICRInstructions/instruct-KeyMappingReady.html"
	
	];
	

	const interferenceInstructions = [
	"FXCICRInstructions/instruct-interference1.html",
	"FXCICRInstructions/instruct-interference2.html",
	"FXCICRInstructions/instruct-interference3.html",
	"FXCICRInstructions/instruct-interferenceQ.html",
	"FXCICRInstructions/instruct-ready.html"
	];


	const intervalInstructions = [
	"FXCICRInstructions/instruct-interval1.html",
	"FXCICRInstructions/instruct-ready.html"
	];

	const instructionEfficacyHighPages = [	
	"FXCICRInstructions/instruct-efficacyHigh1.html",
	"FXCICRInstructions/instruct-efficacyHigh2.html",
	"FXCICRInstructions/instruct-efficacyHighQ.html",
	"FXCICRInstructions/instruct-ready.html"
	];

	const instructionEfficacyLowPages = [
	"FXCICRInstructions/instruct-efficacyLow1.html",
	"FXCICRInstructions/instruct-efficacyLow2.html",
	"FXCICRInstructions/instruct-efficacyLowQ.html",
	"FXCICRInstructions/instruct-ready.html"
	];

	const instructionEfficacyALLPages = [
		"FXCICRInstructions/instruct-EfficacyAll1.html",
		"FXCICRInstructions/instruct-EfficacyAll2.html",
		"FXCICRInstructions/instruct-EfficacyAll3.html",
		"FXCICRInstructions/instruct-EfficacyAllQ.html",
		"FXCICRInstructions/instruct-ready.html"
		];
	
		
		
			const startGameInstructionsOrder1 = [
				"FXCICRInstructions/instruct-MainStart1.html",
				"FXCICRInstructions/instruct-MainStart2.html",
				"FXCICRInstructions/instruct-break-HighEfficacyLowReward.html",
				"FXCICRInstructions/instruct-ready.html"
			];
			//return startGameInstructionsOrder
	
			const startGameInstructionsOrder0 = [
				"FXCICRInstructions/instruct-MainStart1.html",
				"FXCICRInstructions/instruct-MainStart2.html",
				"FXCICRInstructions/instruct-break-HighEfficacyHighReward.html",
				"FXCICRInstructions/instruct-ready.html"
			];
			//return startGameInstructionsOrder

		
	


	


	const BreakRandomHighPage = [
		"FXCICRInstructions/instruct-break-LowEfficacyHighReward.html",
		"FXCICRInstructions/instruct-ready.html"
		
		];
		
		
		const BreakPerformanceHighPage = [
			"FXCICRInstructions/instruct-break-HighEfficacyHighReward.html",
			"FXCICRInstructions/instruct-ready.html"
		];
		
		
		const BreakRandomLowPage = [
		"FXCICRInstructions/instruct-break-LowEfficacyLowReward.html",
		"FXCICRInstructions/instruct-ready.html"
		];
		
		
		const BreakPerformanceLowPage = [
		"FXCICRInstructions/instruct-break-HighEfficacyLowReward.html",
		"FXCICRInstructions/instruct-ready.html"
		];

	return {pages,questionnaireStart,
		AutomaticityInstructions,
		keyMappingInstructions,
		automaticityTestInstructions,
		keyMappingTestInstructions,
		interferenceInstructions,
		intervalInstructions,
		instructionEfficacyHighPages,
		instructionEfficacyLowPages,
		instructionEfficacyALLPages,
		startGameInstructionsOrder1,
		startGameInstructionsOrder0,
		BreakRandomHighPage,
		BreakPerformanceHighPage,
		BreakRandomLowPage,
		BreakPerformanceLowPage
	}



}




