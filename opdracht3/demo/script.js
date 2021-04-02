const header = document.querySelector('header');
const section = document.querySelector('section');
const section2 = document.getElementById('section2');


let json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json"
let request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();

request.addEventListener("load", function() {
console.log("hebbes");
console.log(request.response);
    
var list1 = document.createElement('ul');
section.appendChild(list1);

var listItem0 = document.createElement('li');
list1.appendChild(listItem0);
var listCover0 = document.createElement('img');
listCover0.src = request.response[0].cover;
listItem0.appendChild(listCover0);

var listItem1 = document.createElement('li');
list1.appendChild(listItem1);
var listCover1 = document.createElement('img');
listCover1.src = request.response[1].cover;
listItem1.appendChild(listCover1);

var listItem2 = document.createElement('li');
list1.appendChild(listItem2);
var listCover2 = document.createElement('img');
listCover2.src = request.response[2].cover;
listItem2.appendChild(listCover2);

var listItem3 = document.createElement('li');
list1.appendChild(listItem3);
var listCover3 = document.createElement('img');
listCover3.src = request.response[3].cover;
listItem3.appendChild(listCover3);

var listItem4 = document.createElement('li');
list1.appendChild(listItem4);
var listCover4 = document.createElement('img');
listCover4.src = request.response[4].cover;
listItem4.appendChild(listCover4);

var listItem5 = document.createElement('li');
list1.appendChild(listItem5);
var listCover5 = document.createElement('img');
listCover5.src = request.response[5].cover;
listItem5.appendChild(listCover5);

var list2 = document.createElement('ul');
section2.appendChild(list2);

var listItem01 = document.createElement('li');
list2.appendChild(listItem01);
var listCover01 = document.createElement('img');
listCover01.src = request.response[4].cover;
listItem01.appendChild(listCover01);

var listItem11 = document.createElement('li');
list2.appendChild(listItem11);
var listCover11 = document.createElement('img');
listCover11.src = request.response[3].cover;
listItem11.appendChild(listCover11);

var listItem21 = document.createElement('li');
list2.appendChild(listItem21);
var listCover21 = document.createElement('img');
listCover21.src = request.response[5].cover;
listItem21.appendChild(listCover21);

var listItem31 = document.createElement('li');
list2.appendChild(listItem31);
var listCover31 = document.createElement('img');
listCover31.src = request.response[0].cover;
listItem31.appendChild(listCover31);

var listItem41 = document.createElement('li');
list2.appendChild(listItem41);
var listCover41 = document.createElement('img');
listCover41.src = request.response[2].cover;
listItem41.appendChild(listCover41);

var listItem51 = document.createElement('li');
list2.appendChild(listItem51);
var listCover51 = document.createElement('img');
listCover51.src = request.response[1].cover;
listItem51.appendChild(listCover51);

/* button aanmaken met img erin als hartje op elke film */
var button0 = document.createElement('button');
button0.classList.add('favo');
listItem0.appendChild(button0);

var img0 = document.createElement('img');
img0.src = ('images/hart1.png');
img0.classList.add('hartje')
button0.appendChild(img0); 

/* button voor film 2 */
var button1 = document.createElement('button');
button1.classList.add('favo');
listItem1.appendChild(button1);

var img1 = document.createElement('img');
img1.src = ('images/hart1.png');
img1.classList.add('hartje')
button1.appendChild(img1); 

/* button voor film 3 */
var button2 = document.createElement('button');
button2.classList.add('favo');
listItem2.appendChild(button2);

var img2 = document.createElement('img');
img2.src = ('images/hart1.png');
img2.classList.add('hartje')
button2.appendChild(img2); 

/* button voor film 4 */
var button3 = document.createElement('button');
button3.classList.add('favo');
listItem3.appendChild(button3);

var img3 = document.createElement('img');
img3.src = ('images/hart1.png');
img3.classList.add('hartje')
button3.appendChild(img3); 

/* button voor film 5 */
var button4 = document.createElement('button');
button4.classList.add('favo');
listItem4.appendChild(button4);

var img4 = document.createElement('img');
img4.src = ('images/hart1.png');
img4.classList.add('hartje')
button4.appendChild(img4); 

/* button voor film 6 */
var button5 = document.createElement('button');
button5.classList.add('favo');
listItem5.appendChild(button5);

var img5 = document.createElement('img');
img5.src = ('images/hart1.png');
img5.classList.add('hartje')
button5.appendChild(img5); 

/* button voor film 1 rij 2 */
var button6 = document.createElement('button');
button6.classList.add('favo');
listItem01.appendChild(button6);

var img6 = document.createElement('img');
img6.src = ('images/hart1.png');
img6.classList.add('hartje')
button6.appendChild(img6); 

/* button voor film 2 rij 2 */
var button7 = document.createElement('button');
button7.classList.add('favo');
listItem11.appendChild(button7);

var img7 = document.createElement('img');
img7.src = ('images/hart1.png');
img7.classList.add('hartje')
button7.appendChild(img7); 

/* button voor film 3 rij 2 */
var button8 = document.createElement('button');
button8.classList.add('favo');
listItem21.appendChild(button8);

var img8 = document.createElement('img');
img8.src = ('images/hart1.png');
img8.classList.add('hartje')
button8.appendChild(img8); 

/* button voor film 4 rij 2 */
var button9 = document.createElement('button');
button9.classList.add('favo');
listItem31.appendChild(button9);

var img9 = document.createElement('img');
img9.src = ('images/hart1.png');
img9.classList.add('hartje')
button9.appendChild(img9); 

/* button voor film 5 rij 2 */
var button10 = document.createElement('button');
button10.classList.add('favo');
listItem41.appendChild(button10);

var img10 = document.createElement('img');
img10.src = ('images/hart1.png');
img10.classList.add('hartje')
button10.appendChild(img10); 

/* button voor film 4 rij 2 */
var button11 = document.createElement('button');
button11.classList.add('favo');
listItem51.appendChild(button11);

var img11 = document.createElement('img');
img11.src = ('images/hart1.png');
img11.classList.add('hartje')
button11.appendChild(img11); 

/* klik microinteractie op de favorietenknop1 */
button0.addEventListener('click', favoHart0);

function favoHart0(){
    console.log('hoi')
    img0.src = ('images/hart2.png');    
}
/* dubbelklik microinteractie favorietenknop1 > uit */
button0.addEventListener('dblclick', favoHartout0);

function favoHartout0(){
    console.log('hoi')
    img0.src = ('images/hart1.png');    
}

/* klik microinteractie op de favorietenknop2 */
button1.addEventListener('click', favoHart1);

function favoHart1(){
    console.log('hoi')
    img1.src = ('images/hart2.png');    
}
/* dubbelklik microinteractie favorietenknop2 > uit */
button1.addEventListener('dblclick', favoHartout1);

function favoHartout1(){
    console.log('hoi')
    img1.src = ('images/hart1.png');    
}

/* klik microinteractie op de favorietenknop3 */
button2.addEventListener('click', favoHart2);

function favoHart2(){
    console.log('hoi')
    img2.src = ('images/hart2.png');    
}
/* dubbelklik microinteractie favorietenknop3 uit */
button2.addEventListener('dblclick', favoHartout2);

function favoHartout2(){
    console.log('hoi')
    img2.src = ('images/hart1.png');    
}
/* klik microinteractie op de favorietenknop4 */
button3.addEventListener('click', favoHart3);

function favoHart3(){
    console.log('hoi')
    img3.src = ('images/hart2.png');    
}
/* dubbelklik microinteractie favorietenknop4 uit */
button3.addEventListener('dblclick', favoHartout3);

function favoHartout3(){
    console.log('hoi')
    img3.src = ('images/hart1.png');    
}

/* klik microinteractie op de favorietenknop 5 */
button4.addEventListener('click', favoHart4);

function favoHart4(){
    console.log('hoi')
    img4.src = ('images/hart2.png');    
}
/* dubbelklik microinteractie favorietenknop 5 uit */
button4.addEventListener('dblclick', favoHartout4);

function favoHartout4(){
    console.log('hoi')
    img4.src = ('images/hart1.png');    
}

/* klik microinteractie op de favorietenknop6 */
button5.addEventListener('click', favoHart5);

function favoHart5(){
    console.log('hoi')
    img5.src = ('images/hart2.png');    
}
/* dubbelklik microinteractie favorietenknop6 > uit */
button5.addEventListener('dblclick', favoHartout5);

function favoHartout5(){
    console.log('hoi')
    img5.src = ('images/hart1.png'); 
}
/* klik microinteractie op de favorietenknop1.1 */
button6.addEventListener('click', favoHart6);

function favoHart6(){
    console.log('hoi')
    img6.src = ('images/hart2.png');    
}
 /*dubbelklik microinteractie favorietenknop1.1 > uit */
button6.addEventListener('dblclick', favoHartout6);

function favoHartout6(){
    console.log('hoi')
    img6.src = ('images/hart1.png');  
}
/* klik microinteractie op de favorietenknop1.1 */
button7.addEventListener('click', favoHart);

function favoHart(){
    console.log('hoi')
    img7.src = ('images/hart2.png');    
}
 /*dubbelklik microinteractie favorietenknop1.1 > uit */
button7.addEventListener('dblclick', favoHartout);

function favoHartout(){
    console.log('hoi')
    img7.src = ('images/hart1.png');  
}
/*klik microinteractie op de favorietenknop2.1 */
button8.addEventListener('click', favoHart8);

function favoHart8(){
   console.log('hoi')
   img8.src = ('images/hart2.png');    
}
/*dubbelklik microinteractie favorietenknop2.1 > uit */
button8.addEventListener('dblclick', favoHartout8);

function favoHartout8(){
   console.log('hoi')
   img8.src = ('images/hart1.png');    
} 

/*klik microinteractie op de favorietenknop2.1 */
button9.addEventListener('click', favoHart9);

function favoHart9(){
   console.log('hoi')
   img9.src = ('images/hart2.png');    
}
/*dubbelklik microinteractie favorietenknop2.1 > uit */
button9.addEventListener('dblclick', favoHartout9);

function favoHartout9(){
   console.log('hoi')
   img9.src = ('images/hart1.png');    
} 
/*klik microinteractie op de favorietenknop2.1 */
button10.addEventListener('click', favoHart10);

function favoHart10(){
   console.log('hoi')
   img10.src = ('images/hart2.png');    
}
/*dubbelklik microinteractie favorietenknop2.1 > uit */
button10.addEventListener('dblclick', favoHartout10);

function favoHartout10(){
   console.log('hoi')
   img10.src = ('images/hart1.png');    
} 
/*klik microinteractie op de favorietenknop2.1 */
button11.addEventListener('click', favoHart11);

function favoHart11(){
   console.log('hoi')
   img11.src = ('images/hart2.png');    
}
/*dubbelklik microinteractie favorietenknop2.1 > uit */
button11.addEventListener('dblclick', favoHartout11);

function favoHartout11(){
   console.log('hoi')
   img11.src = ('images/hart1.png');    
} 
var Zoek = document.querySelector("#zoekicon");

Zoek.addEventListener('click', zoekAnimatie);

function zoekAnimatie () {
  var balk = document.querySelector("#zoekbalk");
  console.log("zoekbalk");
  balk.classList.toggle("balkanimatie");
}
var rechtsKnop = document.getElementById("buttonrechts");
var linksKnop = document.getElementById("buttonlinks");
var links = document.getElementById("links");
var rechts = document.getElementById("rechts");
rechtsKnop.addEventListener('click', schuifLinks)

function schuifLinks(){
    list1.classList.toggle("schuiflinks");
    links.classList.toggle("zichtbaar");
    rechts.classList.toggle("weg");

}
linksKnop.addEventListener('click', schuifTerug)

function schuifTerug(){
    list1.classList.toggle("schuifTerug");
    links.classList.toggle("weg");
    rechts.classList.toggle("zichtbaar");
}
var rechtsKnop2 = document.getElementById("buttonrechts2");
var linksKnop2 = document.getElementById("buttonlinks2");
var links2 = document.getElementById("links2");
var rechts2 = document.getElementById("rechts2");
rechtsKnop2.addEventListener('click', schuifLinks2)

function schuifLinks2(){
    list2.classList.toggle("schuiflinks");
    links2.classList.toggle("zichtbaar");
    rechts2.classList.toggle("weg");

}
linksKnop2.addEventListener('click', schuifTerug2)

function schuifTerug2(){
    list2.classList.toggle("schuifTerug2");
    links2.classList.toggle("weg");
    rechts2.classList.toggle("zichtbaar");
}

})
