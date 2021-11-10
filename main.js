//1-Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//2-Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//3-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//1- mostro i 5 numeri randomici nell'html
const num1 = document.querySelector('.num-1').innerHTML = Math.floor(Math.random() * 51);
const num2 = document.querySelector('.num-2').innerHTML = Math.floor(Math.random() * 51);
const num3 = document.querySelector('.num-3').innerHTML = Math.floor(Math.random() * 51);
const num4 = document.querySelector('.num-4').innerHTML = Math.floor(Math.random() * 51);
const num5 = document.querySelector('.num-5').innerHTML = Math.floor(Math.random() * 51);