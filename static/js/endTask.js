




var endRedirectSPICE = function() {

	// Load the questionnaire snippet 
	psiTurk.showPage('postTask.html');
	
	$("#next").click(function () {
		psiTurk.saveData({
			success: function(){
				psiTurk.computeBonus('compute_bonus',function(response){
				psiTurk.completeHIT();
				location.replace(redirect_link);
				//location.replace(redirect_link+'?WorkerID='+response['workerId']+'&group='+response['group']+'&Bonus='+response['bonus'].toFixed(2));
			});
            }, 
            error: prompt_resubmit});
	});
};