// JavaScript libary
 
/**************** DOM functies *******************/
 
function leegNode(objNode){
/* verwijdert alle inhoud/children van een Node
     @ objNode: node, verplicht, de node die geleegd wordt
*/
     while(objNode.hasChildNodes()){
          objNode.removeChild(objNode.firstChild)
     }
}

/**************** Datum, tijd functies *************/
 
//globale datum objecten
var vandaag = new Date();

function getVandaagStr(){
//returnt een lokale datumtijdstring
 
var strNu = "Momenteel: " + vandaag.toLocaleDateString() + ", ";
strNu += vandaag.toLocaleTimeString();
return strNu;
}
//---------------------------------------------

//----------datum arrays----------------------
 
//dagen volgens getDay() volgorde
var arrWeekdagen= new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
 
//vervang feb dagen voor een schrikkeljaar
var arrMaanden= new Array(['januari',31], ['februari',28], ['maart',31], ['april',30], ['mei',31], ['juni',30], ['juli',31],
['augustus',31], ['september',30], ['oktober',31], ['november',30], ['december',31]);

//globale datum objecten te gebruiken in je pagina
var vandaag = new Date();
var huidigeDag = vandaag.getDate(); //dag van de maand
var huidigeWeekDag = vandaag.getDay(); //weekdag
var huidigeMaand = vandaag.getMonth();
var huidigJaar = vandaag.getFullYear();

//---------------------------------------------

function isSchrikkeljaar(jaar){
/* test voor schrikkeljaar
jaar: number, verplicht
return: boolean
*/
eindwaarde=false;
 
if (!isNaN(jaar)){
   if (jaar%4===0){
      eindwaarde=true;
      if(jaar%100===0){
         eindwaarde=false;
         if(jaar%400===0){
            eindwaarde=true;
         }
      }
   }
}
return eindwaarde;
}

//----------------------------------------
function dagAanduiden(oDatum,CSS_Class){
   /*
   nodig: CSS class in stylesheet
   id in element
   @ oDatum: Datum object van aan te duiden dag
   @ CSS_Class: CSS class dient aanwezig te zijn
   */
 
   //welk jaar, maand en dag?
   var dDag = oDatum.getDate();
   var dMaand = oDatum.getMonth();
   var dJaar = oDatum.getFullYear();
 
   //construeer id voor cel
   var strId = dJaar+"_"+dMaand+"_"+dDag;
   var dCel = document.getElementById(strId);
   if (dCel){
        dCel.className = CSS_Class;
   }
}
