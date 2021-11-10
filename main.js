//1-Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//2-Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//3-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//1- mostro i 5 numeri randomici nell'html
const num1 = document.querySelector('.num-1').innerHTML = Math.floor(Math.random() * 51);
const num2 = document.querySelector('.num-2').innerHTML = Math.floor(Math.random() * 51);
const num3 = document.querySelector('.num-3').innerHTML = Math.floor(Math.random() * 51);
const num4 = document.querySelector('.num-4').innerHTML = Math.floor(Math.random() * 51);
const num5 = document.querySelector('.num-5').innerHTML = Math.floor(Math.random() * 51);

const randomNumb = [num1, num2, num3, num4, num5];

//2- eseguo un timer di 30 sec
/*const timeLeft = 30;
const timer = setInterval(function() {
    document.getElementById("timer").innerHTML = timeLeft + " secondi rimanenti";
    timeLeft -= 1;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "end"
    }
}, 1000)


//2.1 allo scadere del timer i numeri spariscono
*/

//3- chiedi all'utente i 5 numeri apparsi
const numOne = prompt('inserisci il primo numero dei 5');
const numTwo = prompt('inserisci il secondo numero dei 5');
const numThree = prompt('inserisci il terzo numero dei 5');
const numFour = prompt('inserisci il quarto numero dei 5');
const numFive = prompt('inserisci il quinto numero dei 5');

const userNumbers = [numOne, numTwo, numThree, numFour, numFive];
console.log(userNumbers);

//4- segnalare all'utente quanti e quali numeri ha indovinato
if (userNumbers === randomNumb) {
    alert('hai azzeccato tutti e 5 i numeri');
} else {
    alert('non hai azzeccato alcun numero');
};