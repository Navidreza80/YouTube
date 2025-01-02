
function searchBooks(){
	result.className = "show";
	overlay.className = "show";
	
	var filteredData = videos.filter(function (el) {
										  return el.videoDiscription.indexOf(search.value)	!= -1 && search.value!=''									 
										});
									
	fill_search(filteredData);	
	
}
	
	
function fill_search(jsonData){
	result.innerHTML = "";

	for(let i=0; i<jsonData.length;i++){
	 
		let sr = document.createElement('div');

		let viddisk = document.createElement('span');
		viddisk.innerHTML = jsonData[i].videoDiscription;
		
		sr.appendChild(viddisk);	

		result.appendChild(sr);
	}
}		
