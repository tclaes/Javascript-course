window.onload = function(){

	

	var eKnop = document.getElementById('hoofdknop');
	var eImgs = document.querySelectorAll('.toggle');
	var eButtons = document.getElementsByTagName('button');

	var aKnoppen = [
		["Sluiten", "Openen"], 
		["Fermer", "Ouvrir" ]
	];

	var language = aKnoppen[0];

	console.log(language);

	addButtons(eImgs, languageClose);
	
	eKnop.addEventListener('click', function(e){
		e.preventDefault();
		hideImgs(eImgs);
	});

	document.addEventListener("click", function(event){
        var targetElement = event.srcElement;
        var eHide = targetElement.previousSibling.previousSibling;
        console.log(targetElement.className);
        if(targetElement.className === "btn" && targetElement.innerHTML === language){
        	var eHide = targetElement.previousSibling.previousSibling;
        eHide.style.display = "none";
        targetElement.innerHTML = "Openen";
        //console.log(targetElement.previousSibling.previousSibling);
        }
        else if(targetElement.innerHTML === "Openen"){
        	eHide.style.display = "block";
        	targetElement.innerHTML = "Sluiten";
        }
    });
	

	
	


	

	
}

function hideImgs(eImgs){

	aImgs = eImgs.length;

	for(var i=0; i<aImgs; i++){
		eImgs[i].style.display="none";
	}
}

function addButtons(eImgs, language){

	for (var i=0; i<eImgs.length; i++){
		var button = document.createElement("button");
		button.innerHTML = language;
		button.id = "knop" + i;
		button.className = "btn";
		eImgs[i].parentNode.appendChild(button);
		//alert(eImgs[i]);
	};

	//console.log(eImgs.length);
}
