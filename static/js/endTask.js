




var endRedirectSPICE = function() {

	// Load the questionnaire snippet 
	psiTurk.showPage('postTask.html');
	psiTurk.recordUnstructuredData('EndTask', 1);

	psiTurk.recordUnstructuredData('incorrect1', incorrect1);
 	psiTurk.recordUnstructuredData('incorrect2', incorrect2);
 	psiTurk.recordUnstructuredData('incorrect3', incorrect3);
  	psiTurk.recordUnstructuredData('incorrect4', incorrect4);
 	psiTurk.recordUnstructuredData('incorrect5', incorrect5);
	
	$("#next").click(function () {
		psiTurk.saveData({
			success: function(){
				psiTurk.computeBonus('compute_bonus',
					function(response){
						psiTurk.completeHIT();
						location.replace(redirect_link+
									'?workerId='+response['workerId']+'&bG='+response['gb']+'&bP='+response['pb']+'&Group='+response['group']+'&PLATFORM='+response['PLATFORM']+'&assignmentId='+response['assignmentId']+'&order='+condition);

			});
            }, 
           // error: prompt_resubmit
        });
	});
};