var numero = 0;
var opcion1 = "";
var opcion2 = "";

function inicio() {
    // Resultado
    var result = document.getElementById("result");

    // Numeros
    var cerocero = document.getElementById("cerocero");
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

    // Coma
    var coma = document.getElementById("coma");

    // Opciones
    var pascal = document.getElementById("pascal");
    var bar = document.getElementById("bar");
    var atmosfera = document.getElementById("atmosfera");
    var mmhg = document.getElementById("mmhg");
    var pascal2 = document.getElementById("pascal2");
    var bar2 = document.getElementById("bar2");
    var atmosfera2 = document.getElementById("atmosfera2");
    var mmhg2 = document.getElementById("mmhg2");

    // Reset
    var borrar = document.getElementById("borrar");

    // Mostrar en pantalla el boton que pulsas
    cerocero.onclick = function (e) {
        result.textContent = result.textContent + "00";
    }

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

    // Coma
    coma.onclick = function (e) {
        result.textContent = result.textContent + ".";
    }

    // Borrar pantalla
    borrar.onclick = function (e) {
        resetearValores();
    }

    // Soluciones
    pascal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "pa";
    }

    bar.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "bar";
    }

    atmosfera.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "atm";
    }

    mmhg.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "mmhg";
    }

    pascal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "pa";
        resolver();
    }

    bar2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "bar";
        resolver();
    }

    atmosfera2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "atm";
        resolver();
    }

    mmhg2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "mmhg";
        resolver();
    }

    // Funciones
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
            case "pabar":
                fin = numero / 1e-5;
                break;

            case "paatm":
                fin = numero / 101325;
                break;

            case "pammhg":
                fin = numero / 133;
                break;

            case "barpa":
                fin = numero * 1e5;
                break;

            case "baratm":
                fin = numero / 1.013;
                break;

            case "barmmhg":
                fin = numero * 750;
                break;
            
            case "atmpa":
                fin = numero * 101325;
                break;

            case "atmbar":
                fin = numero * 1.013;
                break;

            case "atmmmhg":
                fin = numero * 760;
                break;

            case "mmhgpa":
                fin = numero * 133;
                break;

            case "mmhgbar":
                fin = numero / 750;
                break;

            case "mmhgatm":
                fin = numero / 760;
                break;

            default:
                fin = numero;
                break;
        }
        resetearValores();
        result.textContent = fin;
    }
}