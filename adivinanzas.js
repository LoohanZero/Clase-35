// Adivinanzas

// Crear un programa que muestre una adivinanza (entre 4 o 5 posibles) al azar, y permita al usuario ingresar la respuesta. Mostrarle un mensaje indicándole si acertó o no.

let random = Math.round(Math.random() * 4) + 1;


// Dos pinzas tengo, hacia atrás camino, en el agua vivo, en el mar o en el río.
// El cangrejo

if (random === 1) {
    const adivinanza = prompt("Mi tía Cuca tiene una mala racha, ¿quién será esta muchacha?")

    if (adivinanza === "la cucaracha") {
        alert("¡Usted ha acertado! La respuesta era la cucaracha.")
    } else {
        alert("Usted no ha adivinado, la respuesta era la cucaracha.")
    }
} 
else if (random === 2) {
    const adivinanza = prompt("Canto en la orilla, vivo en el agua, no soy pescado, ni soy cigarra.")

    if (adivinanza === "la rana") {
        alert("¡Usted ha acertado! La respuesta era la rana.")
    } else {
        alert("Usted no ha adivinado, la respuesta era la rana.")
    }
}
else if (random === 3) {
    const adivinanza = prompt("Soy pequeño y blandito y mi casa llevo sobre el lomito.")

    if (adivinanza === "el caracol") {
        alert("¡Usted ha acertado! La respuesta era el caracol.")
    } else {
        alert("Usted no ha adivinado, la respuesta era el caracol.")
    }
}
else if (random === 4) {
    const adivinanza = prompt("Porque tengo sangre fría aparezco en primavera en piedras encaramada siempre al sol que más calienta.")

    if (adivinanza === "la lagartija") {
        alert("¡Usted ha acertado! La respuesta era la lagartija.")
    } else {
        alert("Usted no ha adivinado, la respuesta era la lagartija.")
    }
}
else if (random === 5) {
    const adivinanza = prompt("Dos pinzas tengo, hacia atrás camino, en el agua vivo, en el mar o en el río.")

    if (adivinanza === "el cangrejo") {
        alert("¡Usted ha acertado! La respuesta era el cangrejo.")
    } else {
        alert("Usted no ha adivinado, la respuesta era el cangrejo.")
    }
}