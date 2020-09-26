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
    var kj = document.getElementById("kilojulios");
    var j = document.getElementById("julios");
    var kvh = document.getElementById("kilovatiosHora")
    var vh = document.getElementById("vatiosHora");
    var kcal = document.getElementById("kilocaloria");
    var cal = document.getElementById("caloria");
    var kj2 = document.getElementById("kilojulios2");
    var j2 = document.getElementById("julios2");
    var kvh2 = document.getElementById("kilovatiosHora2")
    var vh2 = document.getElementById("vatiosHora2");
    var kcal2 = document.getElementById("kilocaloria2");
    var cal2 = document.getElementById("caloria2");

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
    kj.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "kj";
    }

    j.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "j";
    }

    kvh.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "kvh";
    }

    vh.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "vh";
    }

    kcal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "kcal";
    }

    cal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "cal";
    }

    kj2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "kj";
        resolver();
    }

    j2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "j";
        resolver();
    }

    kvh2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "kvh";
        resolver();
    }

    vh2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "vh";
        resolver();
    }

    kcal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "kcal";
        resolver();
    }

    cal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "cal";
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
            case "kjj":
                fin = numero * 1000;
                break;

            case "kjkvh":
                fin = numero / 3600;
                break;

            case "kjvh":
                fin = numero / 3.6;
                break

            case "kjkcal":
                fin = numero / 4.184;
                break;

            case "kjcal":
                fin = numero * 239;
                break;

            case "jkj":
                fin = numero / 1000;
                break;

            case "jkvh":
                fin = numero / 3.6e+6;
                break;

            case "jvh":
                fin = numero / 3600;
                break;

            case "jkcal":
                fin = numero / 4184;
                break;

            case "jcal":
                fin = numero / 4, 184;
                break;

            case "kvhkj":
                fin = numero * 3600;
                break;

            case "kvhj":
                fin = numero * 3.6e+6;
                break;

            case "kvhvh":
                fin = numero * 1000;
                break;

            case "kvhkcal":
                fin = numero * 860;
                break;

            case "kvhcal":
                fin = numero * 860421;
                break;

            case "vhkj":
                fin = numero * 3.6;
                break;
            
            case "vhj":
                fin = numero * 3600;
                break;

            case "vhkvh":
                fin = numero / 1000;
                break;

            case "vhkcal":
                fin = numero / 1.162;
                break;

            case "vhcal":
                fin = numero * 860;
                break;

            case "kcalkj":
                fin = numero * 4.184;
                break;

            case "kcalj":
                fin = numero * 4184;
                break;

            case "kcalkvh":
                fin = numero / 860;
                break;

            case "kcalvh":
                fin = numero * 1.162;
                break;

            case "kcalcal":
                fin = numero * 1000;
                break;

            case "calkj":
                fin = numero / 239;
                break;

            case "calj":
                fin = numero * 4.184;
                break;

            case "calkvh":
                fin = numero / 860421;
                break;

            case "calvh":
                fin = numero / 860;
                break;

            case "calkcal":
                fin = numero / 1000;
                break;

            default:
                fin = numero;
                break;
        }
        resetearValores();
        result.textContent = fin;
    }
}