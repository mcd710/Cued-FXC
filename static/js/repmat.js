

// function equivalent to repmat in matlab - repeats a given array nReps times
function repmat(array, nReps) {
	var result = [];
	while (nReps--) {
		result = result.concat(array);
	}
	return result;
}