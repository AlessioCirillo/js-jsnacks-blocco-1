
var numero1 = parseInt( prompt ('inserisci numero 1') );
var numero2 = parseInt( prompt ('inserisci numero 2') );

if (numero1 > numero2){
    document. getElementById ('jsnack-1').innerHTML= 'numero maggiore ' + numero1;
} else if (numero2 > numero1) {
    document. getElementById ('jsnack-1').innerHTML= 'numero maggiore ' + numero2;
} else {
    document. getElementById ('jsnack-1').innerHTML= 'i numeri sono uguali';
}



var parola1= prompt ('inserisci la prima parola');
var parola2= prompt ('inserisci la seconda parola');

if (parola1.length > parola2.length) {
    document.getElementById ('jsnack-2').innerHTML= parola2 + ' più lunga di ' + parola1;

} else if (parola2.length > parola1.length) {
    document.getElementById ('jsnack-2').innerHTML= parola1 + ' più lunga di ' + parola2;

} else {
     document.getElementById ('jsnack-2').innerHTML= 'le parole sono della stessa lunghezza';
}