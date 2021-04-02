/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Array voor alle kaarten, als string gebruik ik de namen van de img's van de kaarten.  */      
var plaatjesArray = ["card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card6.png", "card7.png", "card8.png", "card9.png", "card10.png", "card11.png", "card12.png", "card13.png", "card14.png", "card15.png", "card16.png", "card17.png", "card18.png", "card19.png", "card20.png", "card21.png", "card22.png", "card23.png", "card24.png", "card25.png", "card26.png", "card27.png", "card28.png", "card29.png", "card30.png", "card31.png", "card32.png", "card33.png", "card34.png", "card35.png", "card36.png", "card37.png", "card38.png", "card39.png", "card40.png", "card41.png", "card42.png", "card43.png", "card44.png", "card45.png", "card46.png", "card47.png", "card48.png", "card49.png", "card50.png", "card51.png", "card52.png", "card53.png",  "card54.png", "card55.png", "card56.png", "card57.png", "card58.png", "card59.png", "card60.png", "card61.png", "card62.png", "card63.png", "card64.png", "card65.png"];
    
/*Een variabele die staat voor de img die in de html staat*/
var naamAfbeelding = document.getElementById("card");


/*Een functie die eerst een random getal genereert en dat getal uit de array haalt. Vervolgens wordt de string uit de array, dus de naam van de img, ingevuld in het deel van de functie die de source van de img veranderd naar de naam die uit de array is gehaald. Nu veranderd de image van de html dus in de image die random is uitgekozen uit de array. */
function volgendeAfbeelding() {
    var randomGetal = Math.random() * 65;
    var aantalOgen = Math.floor(randomGetal);
    naamAfbeelding.src = "cards/" + plaatjesArray[aantalOgen];
    
    console.log(aantalOgen);
    
    /* variabele voor het html element die ik wil aanpassen bij sommige kaarten */
    var ishetGelukt = document.querySelector("#gelukt");
    
    /* Ik gebruik if statements om ervoor te zorgen dat de tekst "is het gelukt?" zich bij sommige kaarten aanpast, omdat het een ander soort vraag is en een andere vraag er beter bij past. Ook leek het me wat speelser om het af en toe te veranderen. Ook heb ik ervoor gezorgd dat als het niet die uitzonderingen zijn, het gewoon "is het gelukt?" blijft. */
    if (aantalOgen === 28) {
        ishetGelukt.textContent = "Gekozen?";
    }
    else if (aantalOgen === 31) {
        ishetGelukt.textContent = "Shotje uitgedeeld?";
    }
    else if (aantalOgen === 53) {
        ishetGelukt.textContent = "Keuze gemaakt?";
    }
    else if (aantalOgen === 47) {
        ishetGelukt.textContent = "Goed gegokt?";
    }
    else if (aantalOgen === 48) {
        ishetGelukt.textContent = "Goed gegokt?";
    }
    else if (aantalOgen === 49) {
        ishetGelukt.textContent = "Genomen?";
    }
    else {
        ishetGelukt.textContent = "Is het gelukt?";
    }
}

/*De volgende regel code zorgt ervoor dat de knop "next" in de html de functie "volgendeAfbeelding" activeert, zodra je op de knop klikt. */
document.getElementById("next").addEventListener("click", volgendeAfbeelding);

function wegTekst() {
    document.getElementById("tekst").innerHTML = " ";
}

function nextText() {
    document.getElementById("next").innerHTML = "Next ";
}
document.getElementById("next").addEventListener("click", nextText);
document.getElementById("next").addEventListener("click", wegTekst)

/*De volgende functie zorgt ervoor dat wanneer je op de knop "ja" klikt, er een tekst in beeld verschijnt die aangeeft hoeveel slokken je mag uitdelen. De hoeveelheid slokken wordt bepaald met een randomizer. */
function jaa() {
    var getal = Math.random() * 8;
    var cijfer = Math.floor(getal);
    document.getElementById("tekst").innerHTML = "Goedzo! U mag " + cijfer + " slokken uitdelen";
    
/*De volgende regel code zorgt ervoor dat wanneer er op de knop "ja" wordt geklikt, de p in de html groen wordt. Want als je op ja klikt heb je het goed gedaan en mag je slokken uitdelen en de kleur groen staat voor goed. */
    document.getElementById("tekst").style.color = "limegreen";
}

/*De volgende regel code zorgt ervoor dat bij klikken op de knop "ja", de functie "jaa" wordt geactiveerd. */
document.getElementById("ja").addEventListener("click", jaa);

/*De volgende functie zorgt ervoor dat als je op de knop "nee" klikt, er een tekst in beeld verschijnt die aangeeft hoeveel slokken je zelf moet nemen. Als je de vraag niet beantwoord hebt, moet je namelijk zelf drinken. De hoeveelheid slokken wordt bepaald met een randomizer. */
function nee() {
    var getal = Math.random() * 8;
    var cijfer = Math.floor(getal);
    document.getElementById("tekst").innerHTML = "Helaas, neem " + cijfer + " slokken";

    /*De volgende regel code zorgt ervoor dat wanneer er op de knop "nee" wordt geklikt, de p in de html rood wordt. Want als je op nee klikt heb je het niet goed gedaan en moet je slokken nemen en de kleur rood staat voor fout. */
    document.getElementById("tekst").style.color = "darkred";
}

/*De volgende regel code zorgt ervoor dat bij klikken op de knop "nee", de functie "nee" wordt geactiveerd. */
document.getElementById("nee").addEventListener("click", nee);

/*variabele die staat voor de logo image. */
var logo = document.getElementById("logocard");

/* functie die ervoor zorgt dat het logo roteert, voor een speels effect.*/
function shadow() {
    logo.style.transform = "rotate(-50deg)"; 
}

/* De volgende regel code zorgt ervoor dat de functie "shadow" wordt aangeroepen zodra de gebruiker met zijn/haar muis over het logo beweegt. */
logo.addEventListener("mouseover", shadow);