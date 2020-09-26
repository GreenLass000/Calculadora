var numero = "0";
var opcion1 = "";
var opcion2 = "";
var aDecim;
var moneda = "";

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

    // Opciones
    var euro = document.getElementById("euro");
    var dolar = document.getElementById("dolar");
    var libra = document.getElementById("libra");
    var boliviano = document.getElementById("boliviano");
    var yen = document.getElementById("yen");
    var rublo = document.getElementById("rublo");
    var yuan = document.getElementById("yuan");
    var euro2 = document.getElementById("euro2");
    var dolar2 = document.getElementById("dolar2");
    var libra2 = document.getElementById("libra2");
    var boliviano2 = document.getElementById("boliviano2");
    var yen2 = document.getElementById("yen2");
    var rublo2 = document.getElementById("rublo2");
    var yuan2 = document.getElementById("yuan2");

    // Reset
    var borrar = document.getElementById("borrar");

    // Mostrar en pantalla el boton que pulses
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

    // Borrar
    borrar.onclick = function (e) {
        resetearValores();
    }

    // Soluciones
    euro.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "e";
    }

    dolar.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "d";
    }

    libra.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "l";
    }

    boliviano.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "b";
    }

    yen.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "Ye";
    }

    rublo.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "r";
    }

    yuan.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "Yu";
    }

    euro2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "e";
        resolver();
    }

    dolar2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "d";
        resolver();
    }

    libra2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "l";
        resolver();
    }

    boliviano2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "b";
        resolver();
    }

    yen2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "Ye";
        resolver();
    }

    rublo2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "r";
        resolver();
    }

    yuan2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "Yu";
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
        // Euro - ?
        case "ed":
            fin = numero * 1.19;
            moneda = "$";
            break;

        case "el":
            fin = numero * 0.89;
            moneda = "£";
            break;

        case "eb":
            fin = numero * 8.22;
            moneda = "Bs";
            break;

        case "eYe":
            fin = numero * 125.44;
            moneda = "¥";
            break;

        case "er":
            fin = numero * 88.21;
            moneda = "RUB";
            break;

        case "eYu":
            fin = numero * 8.17;
            moneda = "¥";
            break;

        // Dolar - ?
        case "de":
            fin = numero * 0.84;
            moneda = "€";
            break;

        case "dl":
            fin = numero * 0.75;
            moneda = "£";
            break;

        case "db":
            fin = numero * 6.91;
            moneda = "Bs";
            break;

        case "dYe":
            fin = numero * 106.24;
            moneda = "¥";
            break;

        case "dr":
            fin = numero * 75.35;
            moneda = "RUB";
            break;

        case "dYu":
            fin = numero * 6.84;
            moneda = "¥";
            break;

        // Libra - ?
        case "le":
            fin = numero * 1.12;
            moneda = "€";
            break;

        case "ld":
            fin = numero * 1.33;
            moneda = "$";
            break;

        case "lb":
            fin = numero * 9.19;
            moneda = "Bs";
            break;

        case "lYe":
            fin = numero * 141.19;
            moneda = "¥";
            break;

        case "lr":
            fin = numero * 100.14;
            moneda = "RUB";
            break;

        case "lYu":
            fin = numero * 9.09;
            moneda = "¥";
            break;

        // Boliviano - ?
        case "be":
            fin = numero * 0.12;
            moneda = "€";
            break;

        case "bd":
            fin = numero * 0.14;
            moneda = "$";
            break;

        case "bl":
            fin = numero * 0.11;
            moneda = "£";
            break;

        case "bYe":
            fin = numero * 15.38;
            moneda = "¥";
            break;

        case "br":
            fin = numero * 10.91;
            moneda = "RUB";
            break;

        case "bYu":
            fin = numero * 0.99;
            moneda = "¥";
            break;

        // Yen - ?
        case "Yee":
            fin = numero * 0.008;
            moneda = "€";
            break;

        case "Yed":
            fin = numero * 0.0094;
            moneda = "$";
            break;

        case "Yel":
            fin = numero * 0.0071;
            moneda = "£";
            break;

        case "Yeb":
            fin = numero * 0.065;
            moneda = "Bs";
            break;

        case "Yer":
            fin = numero * 0.71;
            moneda = "RUB";
            break;

        case "YeYu":
            fin = numero * 0.0064;
            moneda = "¥";
            break;

        // Rublo - ?
        case "re":
            fin = numero * 0.011;
            moneda = "€";
            break;

        case "rd":
            fin = numero * 0.013;
            moneda = "$";
            break;

        case "rl":
            fin = numero * 0.01;
            moneda = "£";
            break;

        case "rb":
            fin = numero * 0.092;
            moneda = "Bs";
            break;

        case "rYe":
            fin = numero * 1.41;
            moneda = "¥";
            break;

        case "rYu":
            fin = numero * 0.091;
            moneda = "¥";
            break;

        // Yuan - ?
        case "Yue":
            fin = numero * 0.12;
            moneda = "€";
            break;

        case "Yud":
            fin = numero * 0.15;
            moneda = "$";
            break;

        case "Yul":
            fin = numero * 0.11;
            moneda = "£";
            break;

        case "Yub":
            fin = numero * 1.01;
            moneda = "Bs";
            break;

        case "YuYe":
            fin = numero * 15.53;
            moneda = "¥";
            break;

        case "Yur":
            fin = numero * 11.01;
            moneda = "RUB";
            break;

        default:
            fin = numero;
            break;
    }
    resetearValores();
    result.textContent = fin + moneda;
}