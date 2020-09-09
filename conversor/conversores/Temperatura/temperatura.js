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

    // Coma y menos
    var coma = document.getElementById("coma");
    var menos = document.getElementById("menos");

    // Opciones
    var kelvin = document.getElementById("kelvin");
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit")
    var kelvin2 = document.getElementById("kelvin2");
    var celsius2 = document.getElementById("celsius2");
    var fahrenheit2 = document.getElementById("fahrenheit2")

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

    // Coma y menos
    coma.onclick = function (e) {
        result.textContent = result.textContent + ".";
    }

    menos.onclick = function (e) {
        result.textContent = result.textContent + "-";
    }

    // Borrar pantalla
    borrar.onclick = function (e) {
        resetearValores();
    }

    // Soluciones
    kelvin.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "k";
    }

    celsius.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "c";
    }

    fahrenheit.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "f";
    }

    kelvin2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "k";
        resolver();
    }

    celsius2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "c";
        resolver();
    }

    fahrenheit2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "f";
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
            case "kc":
                if (numero < 0) {
                    limpiar();
                    fin = "Error#CeroAbsoluto"
                } else {
                    fin = numero - 273.15;
                }
                break;

            case "kf":
                if (numero < 0) {
                    limpiar();
                    fin = "Error#CeroAbsoluto"
                } else {
                    fin = ((numero - 273.15) * (9 / 5)) + 32;
                }
                break;

            case "ck":
                fin = parseInt(numero) + 272.15;
                break;

            case "cf":
                fin = (numero * (9 / 5)) + 32;
                break;

            case "fk":
                fin = ((numero - 32) * (5 / 9)) + 273, 15;
                break;

            case "fc":
                fin = (numero - 32) * (5 / 9);
                break;

            default:
                fin = numero;
                break;
        }
        resetearValores();
        result.textContent = fin;
    }
}