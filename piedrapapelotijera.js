// Piedra, papel o tijera

// Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.


let random = Math.round(Math.random() * 300);
const jugador = prompt("Ingrese piedra, papel o tijera");


if (random > 200) {
    random = "piedra"
} 
else if (random > 100) {
    random = "papel"
}
else {
    random = "tijera"
};

if (jugador === random){
    alert(`La máquina y usted han empatado, usted eligió ${jugador} y la máquina eligió ${random}`);
}
else {
    if (jugador === "tijera" && random === "papel") {
        alert(`Usted ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`)
    } 
    else if (jugador === "tijera" && random === "piedra") {
        alert(`La máquina ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`)
    }
    else if (jugador === "piedra" && random === "papel") {
        alert(`La máquina ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`)
    }
    else if (jugador === "piedra" && random === "tijera") {
        alert(`Usted ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`)
    }
    else if (jugador === "papel" && random === "tijera") {
        alert(`Usted ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`)
    }
    else if (jugador === "papel" && random === "piedra") {
        alert(`La máquina ha ganado, usted eligió ${jugador} y la máquina eligió ${random}`)
    }
    else {
        alert("Usted no ha ingresado las opciones correctas, inténtelo nuevamente.")
    }
}