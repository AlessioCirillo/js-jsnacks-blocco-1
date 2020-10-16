/**JSNACK1
 * 
 *L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
 */

 var numero1 = parseInt( prompt ('inserisci numero 1') );
 var numero2 = parseInt( prompt ('inserisci numero 2') );

 if (numero1 > numero2){
     document.getElementById('stampa').innerHTML= 'il numero maggiore è ' + numero1;
 } else {
    document.getElementById('stampa').innerHTML= 'il numero maggiore è ' + numero2;
 }