// Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.
// // Ejemplo
// Simón dice: rojo, rojo, azul, verde, amarillo.

// Ingrese el primer color: rojo
// Ingrese el primer color: rojo
// Ingrese el primer color: azul
// Ingrese el primer color: verde
// Ingrese el primer color: amarillo

// Felicitaciones! Has ganado!

let simon1 = Math.round(Math.random() * 3) + 1;
let simon2 = Math.round(Math.random() * 3) + 1;
let simon3 = Math.round(Math.random() * 3) + 1;
let simon4 = Math.round(Math.random() * 3) + 1;
let simon5 = Math.round(Math.random() * 3) + 1;


if (simon1 === 1) {
    simon1 = "rojo";
}
else if (simon1 === 2) {
    simon1 = "verde";
}
else if (simon1 === 3) {
    simon1 = "azul";
}
else {
    simon1 = "amarillo";
}; 



if (simon2 === 1) {
    simon2 = "rojo";
}
else if (simon2 === 2) {
    simon2 = "verde";
}
else if (simon2 === 3) {
    simon2 = "azul";
}
else {
    simon2 = "amarillo";
}; 



if (simon3 === 1) {
    simon3 = "rojo";
}
else if (simon3 === 2) {
    simon3 = "verde";
}
else if (simon3 === 3) {
    simon3 = "azul";
}
else {
    simon3 = "amarillo";
}; 

if (simon4 === 1) {
    simon4 = "rojo";
}
else if (simon4 === 2) {
    simon4 = "verde";
}
else if (simon4 === 3) {
    simon4 = "azul";
}
else {
    simon4 = "amarillo";
}; 

if (simon5 === 1) {
    simon5 = "rojo";
}
else if (simon5 === 2) {
    simon5 = "verde";
}
else if (simon5 === 3) {
    simon5 = "azul";
}
else {
    simon5 = "amarillo";
}; 

alert(`Simón dice: ${simon1}, ${simon2}, ${simon3}, ${simon4} y ${simon5}`);

const jugador1 = prompt("Ingrese el primer color");
const jugador2 = prompt("Ingrese el segundo color");
const jugador3 = prompt("Ingrese el tercer color");
const jugador4 = prompt("Ingrese el cuarto color");
const jugador5 = prompt("Ingrese el quinto color");

const bien = jugador1 === simon1 && jugador2 === simon2 && jugador3 === simon3 && jugador4 === simon4 && jugador5 === simon5;

if (bien) {
    alert(`¡Felicitaciones! ¡Usted ha acertado todos los colores!
    Simón dijo: ${simon1}, ${simon2}, ${simon3}, ${simon4} y ${simon5}
    Y usted dijo: ${jugador1}, ${jugador2}, ${jugador3}, ${jugador4} y ${jugador5}.`)
} else {
    alert(`¡Ups, usted se ha equivocado!
    Simón dijo: ${simon1}, ${simon2}, ${simon3}, ${simon4} y ${simon5}
    Y usted dijo: ${jugador1}, ${jugador2}, ${jugador3}, ${jugador4} y ${jugador5}.`)
}
