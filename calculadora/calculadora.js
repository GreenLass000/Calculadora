var numero1 = 0;
var numero2 = 0;
var signo = "";

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

    // Operaciones
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var resto = document.getElementById("resto");
    var raizCuadrada = document.getElementById("raizCuadrada");
    var raizX = document.getElementById("raizX");
    var cuadrado = document.getElementById("cuadrado");
    var cubo = document.getElementById("cubo");
    var elevadoX = document.getElementById("elevadoX");
    var logaritmo10 = document.getElementById("logaritmo10");
    var logaritmoNeperiano = document.getElementById("logaritmoNeperiano");
    var logaritmoX = document.getElementById("logaritmoX");

    // Igual y Reset
    var igual = document.getElementById("igual");
    var borrar = document.getElementById("borrar");

    // Mostrar en pantalla el boton que pulses
    cero.onclick = function(e) {
        result.textContent = result.textContent + "0";
    }

    cerocero.onclick = function(e) {
        result.textContent = result.textContent + "00";
    }

    uno.onclick = function(e) {
        result.textContent = result.textContent + "1";
    }
    
    dos.onclick = function(e) {
        result.textContent = result.textContent + "2";
    }

    tres.onclick = function(e) {
        result.textContent = result.textContent + "3";
    }

    cuatro.onclick = function(e) {
        result.textContent = result.textContent + "4";
    }

    cinco.onclick = function(e) {
        result.textContent = result.textContent + "5";
    }

    seis.onclick = function(e) {
        result.textContent = result.textContent + "6";
    }

    siete.onclick = function(e) {
        result.textContent = result.textContent + "7";
    }

    ocho.onclick = function(e) {
        result.textContent = result.textContent + "8";
    }

    nueve.onclick = function(e) {
        result.textContent = result.textContent + "9";
    }

    // Operaciones
    suma.onclick = function(e) {
        numero1 = result.textContent;
        signo = "+";
        limpiar();
    }

    resta.onclick = function(e) {
        numero1 = result.textContent;
        signo = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e) {
        numero1 = result.textContent;
        signo = "*";
        limpiar();
    }

    division.onclick = function(e) {
        numero1 = result.textContent;
        signo = "/";
        limpiar();
    }

    resto.onclick = function(e) {
        numero1 = result.textContent;
        signo = "%";
        limpiar();
    }

    raizCuadrada.onclick = function(e) {
        numero1 = result.textContent;
        signo = "R2";
        resolver();
    }

    raizX.onclick = function(e) {
        numero1 = result.textContent;
        signo = "Rx";
        limpiar();
    }

    cuadrado.onclick = function(e) {
        numero1 = result.textContent;
        signo = "^2";
        resolver();
    }

    cubo.onclick = function(e) {
        numero1 = result.textContent;
        signo = "^3";
        resolver();
    }

    elevadoX.onclick = function(e) {
        numero1 = result.textContent;
        signo = "^x";
        limpiar();
    }

    logaritmo10.onclick = function(e) {
        numero1 = result.textContent;
        signo = "log10";
        resolver();
    }

    logaritmoNeperiano.onclick = function(e) {
        numero1 = result.textContent;
        signo = "loge";
        resolver();
    }

    logaritmoX.onclick = function(e) {
        numero1 = result.textContent;
        signo = "logX";
        limpiar();
    }

    // Igual y reset
    igual.onclick = function(e) {
        numero2 = result.textContent;
        resolver();
    }

    borrar.onclick = function(e) {
        resetearValores();
    }
}

function limpiar() {
    result.textContent = "";
}

function resetearValores() {
    result.textContent = "";
    numero1 = 0;
    numero2 = 0;
    signo = "";
}

function resolver() {
    var fin = 0;

    switch(signo) {
        case "+":
            fin = parseFloat(numero1) + parseFloat(numero2);
            break;

        case "-":
            fin = parseFloat(numero1) - parseFloat(numero2);
            break;

        case "*":
            fin = parseFloat(numero1) * parseFloat(numero2);
            break;

        case "/":
            fin = parseFloat(numero1) / parseFloat(numero2);
            break;

        case "%":
            fin = parseFloat(numero1) % parseFloat(numero2);
            break;

        case "R2":
            fin = Math.sqrt(numero1);
            break;

        case "Rx":
            fin = Math.pow(numero2, Math.pow(numero1, (-1)));
            break;

        case "^2":
            fin = Math.pow(numero1, 2);
            break;

        case "^3":
            fin = Math.pow(numero1, 3);
            break;

        case "^x":
            fin = Math.pow(numero1, numero2);
            break;

        case "log10":
            fin = Math.log10(numero1);
            break;

        case "loge":
            fin = Math.log(numero1);
            break;

        case "logX":
            fin = Math.log(numero2) / Math.log(numero1);
            break;

        default:
            if(numero1 == 0) {
                fin = numero2;

            } else {
                fin = numero1;
            }
            break;
    }
    resetearValores();
    result.textContent = fin;
}