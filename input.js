"use strict";
// 1-Calcolatrice semplice: Scrivi un programma TypeScript che simuli una calcolatrice. L'utente dovrebbe essere in grado di inserire due numeri e selezionare un'operazione (addizione, sottrazione, moltiplicazione, divisione) da eseguire su di essi.
document.addEventListener("DOMContentLoaded", function () {
    const calculate = document.getElementById('calculate');
    const printResults = document.getElementById('results');
    calculate.addEventListener('click', function () {
        const input1 = document.getElementById('input_1');
        const input2 = document.getElementById('input_2');
        const operator = document.getElementById('operators');
        const selectedValue = operator.value;
        if (input1 === null) {
            alert("Input non valido. Inserisci un numero valido.");
        }
        else {
            const number_1 = parseFloat(input1.value);
            if (input2 === null) {
                alert("Input non valido. Inserisci un numero valido.");
            }
            else {
                const number_2 = parseFloat(input2.value);
                if (operator === null) {
                    alert("Selezione non valida. Seleziona un'operazione valida.");
                }
                else {
                    let results;
                    // CREO UNO SWITCH PER LE VARIE OPERAZIONI
                    switch (selectedValue) {
                        case "+":
                            results = number_1 + number_2;
                            break;
                        case "-":
                            results = number_1 - number_2;
                            break;
                        case "*":
                            results = number_1 * number_2;
                            break;
                        case "/":
                            if (number_2 !== 0) {
                                results = number_1 / number_2;
                            }
                            else {
                                alert("Impossibile dividere per zero");
                                results = NaN;
                            }
                            break;
                        default:
                            alert("Operazione non valida. Seleziona un'operazione valida: + - * /");
                            results = NaN;
                            break;
                    }
                    if (!isNaN(results)) {
                        printResults.innerText = `Il risultato di ${number_1} ${selectedValue} ${number_2} è ${results}`;
                    }
                }
            }
        }
    });
});
