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
    var kl = document.getElementById("kilolitro");
    var hl = document.getElementById("hectolitro");
    var dal = document.getElementById("decalitro");
    var m = document.getElementById("litro");
    var dl = document.getElementById("decilitro");
    var cl = document.getElementById("centilitro");
    var ml = document.getElementById("mililitro");
    var kl2 = document.getElementById("kilolitro2");
    var hl2 = document.getElementById("hectolitro2");
    var dal2 = document.getElementById("decalitro2");
    var m2 = document.getElementById("litro2");
    var dl2 = document.getElementById("decilitro2");
    var cl2 = document.getElementById("centilitro2");
    var ml2 = document.getElementById("mililitro2");

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
    kl.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "kl";
    }

    hl.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "hl";
    }

    dal.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dal";
    }

    m.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "l_";
    }

    dl.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dl";
    }

    cl.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "cl";
    }

    ml.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "ml";
    }

    kl2.onclick = function(e) {
        limpiar();
        opcion2 = opcion1 + "kl";
        resolver();
    }

    hl2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "hl";
        resolver();
    }

    dal2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dal";
        resolver();
    }

    m2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "l_";
        resolver();
    }

    dl2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dl";
        resolver();
    }

    cl2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "cl";
        resolver();
    }

    ml2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "ml";
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
            case "klhl":
                fin = numero * 10;
                break;

            case "kldal":
                fin = numero * 100;
                break;

            case "kll_":
                fin = numero * 1000;
                break;

            case "kldl":
                fin = numero * 10000;
                break;

            case "klcl":
                fin = numero * 100000;
                break;

            case "klml":
                fin = numero * 1000000;
                break;

            case "hlkl":
                fin = numero / 10;
                break;

            case "hldal":
                fin = numero * 10;
                break;

            case "hll_":
                fin = numero * 100;
                break;

            case "hldl":
                fin = numero * 1000;
                break;

            case "hlcl":
                fin = numero * 10000;
                break;

            case "hlml":
                fin = numero * 100000;
                break;

            case "dalkl":
                fin = numero / 100;
                break;

            case "dalhl":
                fin = numero / 10;
                break;

            case "dall_":
                fin = numero * 10;
                break;

            case "daldl":
                fin = numero * 100;
                break;

            case "dalcl":
                fin = numero * 1000;
                break;

            case "dalml":
                fin = numero * 10000;
                break;

            case "l_kl":
                fin = numero / 1000;
                break;

            case "l_hl":
                fin = numero / 100;
                break;

            case "l_dal":
                fin = numero / 10;
                break;

            case "l_dl":
                fin = numero * 10;
                break;

            case "l_cl":
                fin = numero * 100;
                break;

            case "l_ml":
                fin = numero * 1000;
                break;

            case "dlkl":
                fin = numero / 10000;
                break;

            case "dlhl":
                fin = numero / 1000;
                break;

            case "dgdal":
                fin = numero / 100;
                break;

            case "dll_":
                fin = numero / 10;
                break;

            case "dlcl":
                fin = numero * 10;
                break;

            case "dlml":
                fin = numero * 100;
                break;

            case "clkl":
                fin = numero / 100000;
                break;

            case "clhl":
                fin = numero / 10000;
                break;

            case "cldal":
                fin = numero / 1000;
                break;

            case "cll_":
                fin = numero / 100;
                break;

            case "cldl":
                fin = numero / 10;
                break;

            case "clml":
                fin = numero * 10;
                break;

            case "mlkl":
                fin = numero / 1000000;
                break;

            case "mlhl":
                fin = numero / 100000;
                break;

            case "mldal":
                fin = numero / 10000;
                break;

            case "mll_":
                fin = numero / 1000;
                break;

            case "mldl":
                fin = numero / 100;
                break;

            case "mlcl":
                fin = numero / 10;
                break;

            default:
                fin = numero;
                break;
        }
        resetearValores();
        result.textContent = fin;
    }
}