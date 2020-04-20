




var endRedirectSPICE = function() {

	// Load the questionnaire snippet 
	psiTurk.showPage('postTask.html');
	
	$("#next").click(function () {
		record_responses();
		psiTurk.saveData({
			success: function(){
				psiTurk.computeBonus('compute_bonus',function(response){
				psiTurk.completeHIT();
				location.replace(redirect_link+'?WorkerID='+response['workerId']+response['group']+'&Bonus='+response['bonus'].toFixed(2));
			});
            }, 
            error: prompt_resubmit});
	});
};