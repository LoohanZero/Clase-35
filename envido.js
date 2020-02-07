// Envido

// Crear un programa que permita ingresar 3 cartas de truco (mazo español, sin ochos y nueves) una por una, ingresando número y palo por separado, y mostrar luego si se tiene puntos para hacer envido o no, y cuántos. Las reglas para el mismo son:
// Si se tiene dos cartas del mismo palo, de las cuales una (A) es un 10, un 11 o un 12, y la otra (B) un número distinto, los puntos de envido son: 20 + el número de la carta (B)
// Si se tienen dos cartas del mismo palo, de las cuales ambas son cualquiera de los siguientes números: 10, 11 o 12 (no hace falta que sean iguales), los puntos de envido son 20.
// Si se tienen dos cartas del mismo palo, y ninguna de ellas es un 10, un 11, o un 12, los puntos de envido son la suma de ambas cartas + 20
// // Por ejemplo
// Ingrese número primera carta: 7
// Ingrese palo primera carta: espada

// Ingrese número segunda carta: 4
// Ingrese palo segunda carta: copa

// Ingrese número tercera carta: 3
// Ingrese palo tercera carta: espada

// Sus puntos de envido son: 30


const carta1 = Number(prompt("Ingrese el número de la primera carta"));
const palo1 = prompt("Ingrese el palo de la primera carta");

const carta2 = Number(prompt("Ingrese el número de la segunda carta"));
const palo2 = prompt("Ingrese el palo de la segunda carta carta");
const palo = palo1 === "basto" || palo1 === "espada" || palo1 === "oro" || palo1 ==="copa" &&   
             palo2 === "basto" || palo2 === "espada" || palo2 === "oro" || palo2 ==="copa";    


const figuras1 = carta1 === 10 || carta1 === 11 || carta1 === 12;
const figuras2 = carta2 === 10 || carta2 === 11 || carta2 === 12;
                

const noMazo = carta1 === 8 || carta2 === 8 &&
               carta2 === 9 || carta2 === 8;

let suma = "";


if (noMazo) {
    alert("Saque los ochos y los nueves del mazo y reparta de nuevo");
}
else if (carta1 > 12 || carta2 > 12 ) {
    alert("Dejá de chamuyar y poné una carta válida");
}
else if (!palo) {
    alert("Ingresá un palo válido");
}
else if (palo1 === palo2) {

    if (figuras1 === true && figuras2 === true) {
        alert("La suma de sus cartas es de 20, tiene la menor cantidad de envido")
    }
    else if (figuras1 === true) {
        suma = 20 + carta2;
        alert(`La suma de sus cartas es de ${suma}`)
    } 
    else if (figuras2 === true) {
        suma = 20 + carta1;
        alert(`La suma de sus cartas es de ${suma}`)
    } else {
        suma = 20 + carta1 + carta2;
        alert(`La suma de sus cartas es de ${suma}`)
    }
} 
else if (noMazo) {
    alert("Saque los ochos y los nueves del mazo y reparta de nuevo");
}
else {
    alert("Usted no tiene envido, mienta y por ahí tiene algo de suerte.")
}