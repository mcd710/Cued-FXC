// This file Contains the instructions for the task 




var setInstructionPages = function(instructionName){


	var instructionSet= instructionName;

	switch (instructionSet){

		case "SPICEGains":
		
		console.log("iside SPICEGains")

		var pagesGarden = [
			"instructions/SPICEGains/instruct-0.html",
			"instructions/SPICEGains/instruct-1F.html",
			"instructions/SPICEGains/instruct-1Fb.html",
			"instructions/SPICEGains/instruct-1Fc.html",
			"instructions/SPICEGains/instruct-1Fd.html",
			"instructions/SPICEGains/instruct-2F.html",
			"instructions/SPICEGains/instruct-2QF.html",
			"instructions/SPICEGains/instruct-3F.html",
			"instructions/SPICEGains/instruct-3Fb.html",
			"instructions/SPICEGains/instruct-3Q.html",
			"instructions/SPICEGains/instruct-4F.html",
			"instructions/SPICEGains/instruct-readyF.html",
			"instructions/SPICEGains/breakF.html",
			"stages/stageGarden.html",
			"postquestionnaire.html"
		];


		psiTurk.preloadPages(pagesGarden);

		var taskStage = "stages/stageGarden.html";

		var instruction1PagesGarden = [
		"instructions/instruct-1F.html",
		"instructions/instruct-1Fb.html",
		"instructions/instruct-1Fc.html",
		"instructions/instruct-1Fd.html",
		"instructions/instruct-readyF.html"
		];
		var instruction2PagesGarden = [
		"instructions/instruct-2F.html",
		"instructions/instruct-2QF.html",
		"instructions/instruct-readyF.html"
		];
		var instruction3PagesGarden = [
		"instructions/instruct-3F.html",
		"instructions/instruct-3Fb.html",
		"instructions/instruct-3Q.html",
		"instructions/instruct-readyF.html"
		];
		var instruction4PagesGarden = [
		"instructions/instruct-4F.html",
		"instructions/instruct-readyF.html"
		];
		var BreakPageGarden = [
		"instructions/breakF.html"
		];


		return taskStage
		return instruction1PagesGarden
		return instruction2PagesGarden
		return instruction3PagesGarden
		return instruction4PagesGarden
		return BreakPageGarden


		break;

		case "pagesProtectorvCollector":

		console.log("iside pagesProtectorvCollector")
		var pagesProtectorvCollector = [
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

		psiTurk.preloadPages(pagesProtectorvCollector);

		taskStage ="stages/stage.html";

		var instruction1Pages = [
		"instructions/instruct-0.html",
		"instructions/instruct-story1.html",
		"instructions/instruct-1.html",
		"instructions/instruct-ready.html",
		];

		var instruction2Pages = [
		"instructions/instruct-2.html",
		"instructions/instruct-2Q.html",
		"instructions/instruct-ready.html"
		];

		var instruction3Pages = [
		"instructions/instruct-3P.html",
		"instructions/instruct-ready.html",
		];

		var instructionLossPages = [
		"instructions/instruct-3L1.html",
		"instructions/instruct-3LB.html",
		"instructions/instruct-3LQ1.html",
		"instructions/instruct-3LQ2.html",
		"instructions/instruct-3L2.html",
		"instructions/instruct-ready.html"
		];

		var instructionGainPages = [
		"instructions/instruct-story2.html",
		"instructions/instruct-3G1.html",
		"instructions/instruct-3GB.html",
		"instructions/instruct-3GQ1.html",
		"instructions/instruct-3GQ2.html",
		"instructions/instruct-3G2.html",
		"instructions/instruct-ready.html"
		];


		var postPracticeBreak = [
		"instructions/instruct-Main-Sample.html",
		"instructions/instruct-3MQ.html",
		"instructions/instruct-3M2.html"
		]


		var BreakCollectorPage = [
		"instructions/break-collector.html",
		"instructions/break-remind.html"
		];


		var BreakProtectorPage = [
		"instructions/break-protector.html",
		"instructions/break-remind.html"
		];


		var BreakSmallPage = [
		"instructions/break-small.html",
		"instructions/break-remind.html"
		];


		var BreakLargePage = [
		"instructions/break-large.html",
		"instructions/break-remind.html"
		];


		var BreakPage = [
		"instructions/break.html"
		];
		
		return taskStage
		return instruction1Pages
		return instruction2Pages
		return instruction3Pages
		return instructionLossPages
		return instructionGainPages
		return postPracticeBreak
		return BreakCollectorPage
		return BreakProtectorPage
		return BreakSmallPage
		return BreakLargePage
		return BreakPage

		break;




	}


}