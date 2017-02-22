window.onload = function(){

	var eKnop = document.getElementById('hoofdknop');
	var eImgs = document.querySelectorAll('.toggle');

	eKnop.addEventListener('click', function(e){
		e.preventDefault();
		hideImgs(eImgs);
	})

	console.log(eImgs);
}

function hideImgs(eImgs){

	aImgs = eImgs.length;

	for(var i=0; i<aImgs; i++){
		eImgs[i].style.display="none";
	}githugithubit
}