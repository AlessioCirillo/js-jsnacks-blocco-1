//JSNACK1

var numero1 = parseInt( prompt ('inserisci numero 1') );
var numero2 = parseInt( prompt ('inserisci numero 2') );

if (numero1 > numero2){
    document. getElementById ('jsnack-1').innerHTML= 'numero maggiore ' + numero1;
} else if (numero2 > numero1) {
    document. getElementById ('jsnack-1').innerHTML= 'numero maggiore ' + numero2;
} else {
    document. getElementById ('jsnack-1').innerHTML= 'i numeri sono uguali';
}


//JSNACK2

var parola1= prompt ('inserisci la prima parola');
var parola2= prompt ('inserisci la seconda parola');

if (parola1.length > parola2.length) {
    document.getElementById ('jsnack-2').innerHTML= parola2 + ' più lunga di ' + parola1;

} else if (parola2.length > parola1.length) {
    document.getElementById ('jsnack-2').innerHTML= parola1 + ' più lunga di ' + parola2;

} else {
     document.getElementById ('jsnack-2').innerHTML= 'le parole sono della stessa lunghezza';
}


//JSNACK3

var somma = 0;

for ( var i = 0; i < 5; i++){
    var numeri = parseInt(prompt ('inserisci un numero'));
  
    somma += numeri;
}

document.getElementById ('jsnack-3').innerHTML = 'la somma dei numeri è ' + somma;


//JSNACK4

var invitati = [ 'Paolo', 'Fabio', 'Lorenzo', 'Alessio' ];

var nome = prompt ('inserisci il tuo nome');
console.log(nome);

var found = false;

for (var i = 0; i < invitati.length; i++) {
        var item = invitati[i];

        if ( nome.toLowerCase() == item.toLowerCase() ){
            
            found = true;
        }
            
}

if ( found === true) {
    document.getElementById ('jsnack-4').innerHTML = 'nome trovato';
} else {
    document.getElementById ('jsnack-4').innerHTML = 'nome non trovato';
}


//JSNACK5

var array = [];

for ( var i = 0; i < 6; i++) {
    var askNumber = parseInt ( prompt ('inserisci un numero'));
    console.log(askNumber);

    if ( askNumber % 2 != 0){
        array.push(askNumber);
    }
}

console.log(array);