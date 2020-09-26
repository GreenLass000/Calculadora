var numero = "0";
var opcion1 = "";
var opcion2 = "";
var aDecim;

function inicio() {
    // Resultado
    var result = document.getElementById("result");

    // Numeros
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    // Letras
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var f = document.getElementById("f");

    // Opciones
    var binario = document.getElementById("binario");
    var decimal = document.getElementById("decimal");
    var hexadecimal = document.getElementById("hexadecimal");
    var octal = document.getElementById("octal");
    var binario2 = document.getElementById("binario2");
    var decimal2 = document.getElementById("decimal2");
    var hexadecimal2 = document.getElementById("hexadecimal2");
    var octal2 = document.getElementById("octal2");

    // Reset
    var borrar = document.getElementById("borrar");

    // Mostrar en pantalla el boton que pulses
    cero.onclick = function (e) {
        result.textContent = result.textContent + "0";
    }

    uno.onclick = function (e) {
        result.textContent = result.textContent + "1";
    }

    dos.onclick = function (e) {
        result.textContent = result.textContent + "2";
    }

    tres.onclick = function (e) {
        result.textContent = result.textContent + "3";
    }

    cuatro.onclick = function (e) {
        result.textContent = result.textContent + "4";
    }

    cinco.onclick = function (e) {
        result.textContent = result.textContent + "5";
    }

    seis.onclick = function (e) {
        result.textContent = result.textContent + "6";
    }

    siete.onclick = function (e) {
        result.textContent = result.textContent + "7";
    }

    ocho.onclick = function (e) {
        result.textContent = result.textContent + "8";
    }

    nueve.onclick = function (e) {
        result.textContent = result.textContent + "9";
    }

    // Letras
    a.onclick = function (e) {
        result.textContent = result.textContent + "A";
    }

    b.onclick = function (e) {
        result.textContent = result.textContent + "B";
    }

    c.onclick = function (e) {
        result.textContent = result.textContent + "C";
    }

    d.onclick = function (e) {
        result.textContent = result.textContent + "D";
    }

    e.onclick = function (e) {
        result.textContent = result.textContent + "E";
    }

    f.onclick = function (e) {
        result.textContent = result.textContent + "F";
    }

    borrar.onclick = function (e) {
        resetearValores();
    }

    // Soluciones
    binario.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "b";
    }

    decimal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "d";
    }

    hexadecimal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "h";
    }

    octal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "o";
    }

    binario2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "b";
        resolver();
    }

    decimal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "d";
        resolver();
    }

    hexadecimal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "h";
        resolver();
    }

    octal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "h";
        resolver();
    }
}

function limpiar() {
    result.textContent = "";
}

function resetearValores() {
    result.textContent = "";
    numero = 0;
    opcion = "";
}

function resolver() {
    var fin = 0;

    switch (opcion2) {
        case "db":
            fin = (+numero).toString(2)
            break;

        case "dh":
            fin = (+numero).toString(16);
            fin = fin.toUpperCase();
            break;

        case "do":
            fin = (+numero).toString(8);
            break;

        case "bd":
            fin = parseInt(numero, 2);
            break;

        case "bh":
            aDecim = parseInt(numero, 2);
            fin = (+aDecim).toString(16);
            fin = fin.toUpperCase();
            break;

        case "bo":
            aDecim = parseInt(numero, 2);
            fin = (+aDecim).toString(8);
            break;

        case "hd":
            fin = parseInt(`0x${numero}`, 16);
            break;

        case "hb":
            aDecim = parseInt(`0x${numero}`, 16);
            fin = (+aDecim).toString(2);
            break;

        case "ho":
            aDecim = parseInt(`0x${numero}`, 16);
            fin = (+aDecim).toString(8);
            break;

        case "od":
            fin = parseInt(numero, 8);
            break;

        case "ob":
            aDecim = parseInt(numero, 8);
            fin = (+aDecim).toString(2);
            break;

        case "oh":
            aDecim = parseInt(numero, 8);
            fin = (+aDecim).toString(16);
            fin = fin.toUpperCase();
            break;

        default:
            fin = numero;
            break;
    }
    resetearValores();
    result.textContent = fin;
}