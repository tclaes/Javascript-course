// Image_gallery_versie1.js
// een Javascript_PF project
var versie = " versie 3.0";

window.onload = function () {

     //noscript verbergen
     var eNoScript = document.getElementById('noscript');
     eNoScript.style.display = "none";

     //array geladen
     if(aModernArt == "undefined"){
          throw new Error("array aModernArt niet gevonden");
     }
     else{
          console.log(aModernArt[0][0]); //is aModernArt aanwezig?

          //versie info
          var eKop = document.querySelector('h1');
          eKop.innerHTML = eKop.innerHTML + versie;

          var eImg = document.getElementById('plaatshouder');
          //nieuwe eventhandler voor alle hyperlinks in de menubalk
          //var eSidebar = document.querySelector('sidebar');
          //var eLinks = eSidebar.getElementsByTagName('a');
          var eKeuzelijst = maakKeuzeLijst(aModernArt);
          var eSidebar = document.querySelector('sidebar');
          eSidebar.appendChild(eKeuzelijst);

          eKeuzelijst.addEventListener('change',function(e){
               var waarde = this.value;

               if(waarde!="" && waarde!=null){
               toonFoto(waarde,eImg)
               }
          });

          
     }

          
}

function toonFoto(nIndex,eImg){
/* wisselt de bron van het src attribuut van de img#beeld
@ eLink, een hyperlink element
@ eImg, plaatshouder img
*/
     //console.log(eLink.href);
     aArt = aModernArt[nIndex];
     sPad = aArt[0];
     sInfo = aArt[1];
     sNaam = aArt[2];

     eImg.src = "art/" + sPad;

     
     var eInfo = document.getElementById('info');
     
     if(eInfo){
          eInfo.innerHTML = sInfo;
     }
     else{
          var eInfo = document.createElement('p');
          eInfo.id = "info";
          eInfo.innerHTML = sInfo;
          //eImg.parentNode.appendChild(eInfo);
          eImg.parentNode.insertBefore(eInfo,eImg.parentNode.firstChild);
     }   
}

function maakKeuzeLijst(a){
     /*
     return SELECT element
     @a array van images
     */

     var nArt = a.length;
     console.log(nArt);
     var eSelect = document.createElement('select');
     eSelect.id = "keuzelijst";
     // Standaard option
     var eOption  = document.createElement('option');
     eOption.innerHTML = "Maak een keuze";
     eOption.setAttribute('value', "");
     eSelect.appendChild(eOption);
     //Andere option elementen
     for(var i=0;i<nArt;i++){

          var eOption = document.createElement('option');
          eOption.innerHTML = a[i][2];
          eOption.value = i;
          eSelect.appendChild(eOption);
     }
     return eSelect;
}