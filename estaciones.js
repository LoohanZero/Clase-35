// Estación del año

// Crear un programa que pregunte por el día, el mes, y el hemisferio (norte/sur) y devuelva la estación del año correspondiente

const dia = Number(prompt("Ingrese qué número de día es hoy"));
const mes = Number(prompt("Ingrese el mes actual en números"));
const hemisferio = prompt("Ingrese a qué hemisferio pertenece: norte o sur");

const meses123 = mes === 12 || mes === 1 || mes === 2|| mes===3;
const meses36 = mes === 3 || mes === 4 || mes === 5|| mes === 6;
const meses69 = mes === 6|| mes === 7 || mes === 8 || mes === 9;
const meses912 = mes === 9 || mes === 10|| mes === 11 || mes === 12;


if (hemisferio === "sur") {

    if (mes === 12) {

        if (dia >= 21) {
            alert("Usted está en verano");
        } else {
            alert("Usted está en primavera");
        };
    } 
    else if (mes === 3) {
        if (dia < 21) {
            alert("Usted está en verano");
        } else {
            alert("Usted está en otoño");
        };
    } 
    else if (mes === 6) {
        if (dia >= 21) {
            alert("Usted está en invierno");
        } else {
            alert("Usted está en otoño");
        };
    }
    else if (mes === 9) {
        if (dia >= 21) {
            alert("Usted está en primavera");
        } else {
            alert("Usted está en invierno");
        };
    }
    else if (meses123) {
        alert("Usted está en verano");
    }
    else if (meses36) {
        alert("Usted está en otoño");
    }
    else if (meses69) {
        alert("Usted está en invierno");
    }
    else if (meses912) {
        alert("Usted está en primavera");
    }
    else {
        alert("Ingrese una opción válida")
    };




} 
else if (hemisferio === "norte") {

    if (mes === 12) {

        if (dia >= 21) {
            alert("Usted está en invierno");
        } else {
            alert("Usted está en oteño");
        };
    } 
    else if (mes === 3) {
        if (dia < 21) {
            alert("Usted está en invierno");
        } else {
            alert("Usted está en primavera");
        };
    } 
    else if (mes === 6) {
        if (dia >= 21) {
            alert("Usted está en verano");
        } else {
            alert("Usted está en primavera");
        };
    }
    else if (mes === 9) {
        if (dia >= 21) {
            alert("Usted está en otoño");
        } else {
            alert("Usted está en verano");
        };
    }
    else if (meses123) {
        alert("Usted está en invierno");
    }
    else if (meses36) {
        alert("Usted está en primavera");
    }
    else if (meses69) {
        alert("Usted está en verano");
    }
    else if (meses912) {
        alert("Usted está en otoño");
    }
    else {
        alert("Ingrese una opción válida")
    };

};