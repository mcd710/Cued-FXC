// function equivalent to linspace in matlab - generates an array of n evenly spaced numbers between min and max (inclusive for both) 
function linspace(min,max,nBins) {
	var i;
	ret = Array(nBins);
	nBins--;
	for (i = nBins; i >= 0; i--) {
		ret[i] = (i*max+(nBins-i)*min)/nBins; 
	}
	return ret;
}