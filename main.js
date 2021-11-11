//1-Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//2-Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//3-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//trovo i contenitori html
const message = document.getElementById('message');
const display = document.getElementById('display');

//genero i 5 numeri
const randomNumbers = getRandomList(5);
console.log(randomNumbers);

display.innerHTML = randomNumbers;

//creo i 30 sec di timer e allo scadere chiedo i numeri all'utente
setTimeout(() => {
    //cancello i numeri a schermo
    display.innerHTML = '';
    message.innerHTML = 'inserisci i numeri che ti ricordi';


    setTimeout(() => {
        //chiedo i 5 numeri all'utente
        const userNumbers = getUserNumbers(randomNumbers.length);
        console.log(userNumbers);

        //controllo dei numeri
        const guessed = userNumbers.filter(number => randomNumbers.includes(number));
        console.log(guessed);

        //risultato
        message.innerHTML = `Hai indovinato ${guessed.length} numeri, su i numeri ${randomNumbers}`;
        display.innerHTML = guessed;
    }, 1000)



}, 30000);

function getRandomList(itemNumber) {
    const randomNumbers = [];

    while (randomNumbers.length < itemNumber) {
        const rand = getRandomNumber(1, 100);

        if (!randomNumbers.includes(rand)) {
            randomNumbers.push(rand);
        }
    }
    return randomNumbers;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getUserNumbers(askTimes) {
    const numbers = [];

    while (numbers.length < askTimes) {
        const userNumber = parseInt(prompt(`Inserisci il numero ${numbers.length + 1} di ${askTimes}`));

        if (!numbers.includes(userNumber) && !isNaN(userNumber)) {
            numbers.push(userNumber);
        }
    }
    return numbers;
}