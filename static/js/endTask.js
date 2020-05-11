




var endRedirectSPICE = function() {

	// Load the questionnaire snippet 
	psiTurk.showPage('postTask.html');
	
	$("#next").click(function () {
		psiTurk.saveData({
			success: function(){
				psiTurk.computeBonus('compute_bonus',
					function(response){
						//psiTurk.completeHIT();
						location.replace(redirect_link+
									'?WorkerID='+response['workerId']+'&bG='+response['gb']+'&bP='+response['pb']+'&Group='+response['group']+'&id='+response['sid']);

			});
            }, 
           // error: prompt_resubmit
        });
	});
};