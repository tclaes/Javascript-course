window.onload = function(){

	

	var eKnop = document.getElementById('hoofdknop');
	var eImgs = document.querySelectorAll('.toggle');

	// Array voor talen
	var aKnoppen = [
		[nederlands = ["Sluiten", "Openen"]], 
		[frans = ["Fermer", "Ouvrir" ]]
	];

	// veranderen van taal
	// 0 = nederlands
	// 1 = frans
	var language = aKnoppen[0];

	addButtons(eImgs, language);
	
	eKnop.addEventListener('click', function(e){
		e.preventDefault();
		hideImgs(eImgs, language);
	});

	document.addEventListener("click", function(event){
        var targetElement = event.srcElement;
        var eHide = targetElement.previousSibling.previousSibling;
        //console.log(targetElement.className);
        if(targetElement.className === "btn" && targetElement.innerHTML === language[0][0]){
        	var eHide = targetElement.previousSibling.previousSibling;
        eHide.style.display = "none";
        targetElement.innerHTML = language[0][1];
        //console.log(targetElement.previousSibling.previousSibling);
        }
        else if(targetElement.innerHTML === language[0][1]){
        	eHide.style.display = "block";
        	targetElement.innerHTML = language[0][0];
        }
    });
		
}

function hideImgs(eImgs, language){

	aImgs = eImgs.length;
	console.log(language);

	for(var i=0; i<aImgs; i++){
		eImgs[i].style.display="none";
		var button = document.getElementById('knop' + i);
		console.log(button.id);
		button.innerHTML= language[0][1];
	}
}

function addButtons(eImgs, language){

	for (var i=0; i<eImgs.length; i++){
		var button = document.createElement("button");
		button.innerHTML = language[0][0];
		button.id = "knop" + i;
		button.className = "btn";
		eImgs[i].parentNode.appendChild(button);
	};
}
