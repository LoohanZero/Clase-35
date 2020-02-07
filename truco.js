// Truco

// Crear un programa que permita ingresar una carta del truco (mazo español, sin ochos y nueves) ingresando número y palo por separado. Hacer que el programa elija aleatoriamente otra carta. Mostrar un mensaje con ambas cartas, indicando cuál gana a cuál (o si empatan).

// Orden de las cartas, de mayor valor a menor:

// 1 de espadas
// 1 de bastos
// 7 de espadas
// 7 de oros
// 3
// 2
// 1 de copa y 1 de oro
// 12
// 11
// 10
// 7 de copas y 7 de bastos
// 6
// 5
// 4
// // Ejemplo
// Ingrese el número de la carta: 7
// Ingrese el palo de la carta: espada

// Has elegido: 7 de espada
// Computadora eligió: 3 de copa

// ¡Has ganado!

let numero = Math.round(Math.random() * 11) + 1;
let palo1 = Math.round(Math.random() * 3) + 1;

const numeroJugador = Number(prompt("Ingrese el número de su carta"));
const paloJugador = prompt("Ingrese el palo de su carta");

const palo = paloJugador === "basto" || paloJugador === "espada" || paloJugador === "oro" || paloJugador ==="copa";   
                

const noMazo = numeroJugador === 8 || numeroJugador === 9 &&
               numero === 8 || numero === 9;


if (palo1 === 1) {
    palo1 = "oro";
}
else if (palo1 === 2) {
    palo1 = "espada";
}
else if (palo1 === 3) {
    palo1 = "copa";
}
else {
    palo1 = "basto";
}; 


if (noMazo) {
    alert("Sacá los ochos y los nueves del mazo");
} 
else if (!palo) {
    alert("Ingresá un palo válido");
} 
else if (numeroJugador === numero && paloJugador === palo1) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Han empatado!`)
} 
else if (numeroJugador === 1 && paloJugador === "espadas") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 1 && palo1 === "espadas") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 1 && paloJugador === "basto") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 1 && palo1 === "basto") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 7 && paloJugador === "espadas") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 7 && palo1 === "espadas") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 7 && paloJugador === "oro") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 7 && palo1 === "oro") {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 3) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 3) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
} 
else if (numeroJugador === 2) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 2) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 1) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 1) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 12) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 12) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 11) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 11) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 10) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 10) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 7) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 7) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 6) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 6) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 5) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 5) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}
else if (numeroJugador === 4) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has ganado!`)
} 
else if (numero === 4) {
    alert(`Has elegido el ${numeroJugador} de ${paloJugador}
La computadora eligió ${numero} de ${palo1}.
¡Has perdido!`)
}