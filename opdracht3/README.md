# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Theatr.
Theatr is een streaming website waarop je films kan kijken. Je kan films aan je favorieten toevoegen en bewaren voor later. Ook kan je met de zoekfunctie zoeken door het rijkelijke aanbod aan films.

https://frederiqueisabel.github.io/frontend-voor-designers-2021/opdracht3/demo/

## interface
Je kan films aan je favorieten toevoegen door op het hartje te klikken en je kan zoeken naar films met de zoekbalk die tevoorschijn komt als je op het zoekicoon klikt. Je kan door middel van de pijltjesknoppen verschillende films ontdekken.

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

Ik heb de titel een erg opvallende kleur gegeven zodat dat erg opvalt. Verder zijn de titels boven de rijen films ook erg opvallend zodat je die daarna leest. Ik heb een zoekbalk gemaakt zodat de user zelf kan zoeken naar films en de user kan zelf films bewaren. Zo geef je de user het gevoel dat hij/zij in control is.
Ook is het best duidelijk voor de gebruiker hoe de site werkt. De gebruiker is al bekend met een hartje als favorietenknop en de pijltjes geven goed aan dat er meer is. Ook is het vrij duidelijk dat de gebruiker films ziet op de site en dat je daar op kan klikken om het te kijken.

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?

Ik heb een microinteractie gemaakt met de hartjes bij elke film. Als je eroverheen hovert worden ze ietsje groter en als je erop klikt vult het hartje zich, zodat de gebruiker weet dat het is gelukt. 
Ook heb ik pijltjesknoppen. Als de gebruiker hierop klikt, schuift de lijst met films als het ware verder en ziet de gebruiker meer films. De gebruiker kan dit uiteraard ook terugschuiven.
Ook heb ik een microinteractie gemaakt die de zoekbalk laat verschijnen als je op het zoekicoontje drukt.

IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?


## code
Ik heb 2 sections in de main. Daarin heb ik via javascript unordered lists aangemaakt met li's erin. Elke li staat voor een film. In javascript heb ik bij elke li met json data de covers ingeladen in een img. Daarna heb ik in elke li een button met een img gezet, om de hartjes images in te laden.

Daarna heb ik verschillende functies gemaakt binnen mijn grote functie die de json data inlaadt. Ik heb een functie die de hartjes onclick laat vullen, eentje die de filmlijst naar links en naar rechts verschuift als je op de pijltjesknoppen drukt en een functie die de zoekbalk laat verschijnen als je op het zoekicoontje drukt.
