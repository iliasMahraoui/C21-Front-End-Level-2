let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _______Zodat Javascript weet dat ik een stuk text ga gebruiken_______ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________Zodat Javascript weet dat ik nummers ga gebruiken____________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _____Je moet een variabele eerst in rekening brengen_______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______17________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de ____Pointing device button______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____________ de waarde noemen we een Any__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ___melding____ op het scherm met de tekst ____je naam_____ deze tekst staan op regel ___17____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____nee______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ________de foto verdwijnt___________ en waar wordt deze in je HTML aangeroepen? _____regel 23_______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _____25______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _________het geeft een verwijzing naar het eerste object met de opgegeven waarde van het ID-atribute__________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ________als je op de foto klikt komt de foto tevoorschijn___________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______regel 32________ en wanneer wordt deze aangeroepen _____als je op de button drukt______ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ______integer (rekenen)________ en waar komt de waarde van getal vandaan? ____3________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ________Het geeft het eerste element dat een afstammeling is van een knoop die overeenkomt met selectors terug___________  Wat is antwoord hier? _____8_____ vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? __________+3___________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? __________het wordt plus of min het getal dat ik heb gekozen___________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______44________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ______Setcolor________ en waar komt de waarde van kleur vandaan? ______style.color______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _____style.fontsize_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _________Mijn lettertype en textkleur veranderd____________ vul je antwoord in op de lijn
}
getName(myStr);
// wat gebeurd er hierboven ____je geeft aan dat getname een text is_______ en wanneer gebeurt dat _____als je op de button drukt_____ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _________Niets veranderd__________ vul je antwoord in op de lijn.