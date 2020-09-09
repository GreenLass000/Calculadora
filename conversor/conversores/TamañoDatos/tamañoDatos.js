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
    var pb = document.getElementById("petabyte");
    var tb = document.getElementById("terabyte");
    var gb = document.getElementById("gigabyte");
    var mb = document.getElementById("megabyte");
    var kb = document.getElementById("kilobyte");
    var by = document.getElementById("byte");
    var bi = document.getElementById("bit");
    var pb2 = document.getElementById("petabyte2");
    var tb2 = document.getElementById("terabyte2");
    var gb2 = document.getElementById("gigabyte2");
    var mb2 = document.getElementById("megabyte2");
    var kb2 = document.getElementById("kilobyte2");
    var by2 = document.getElementById("byte2");
    var bi2 = document.getElementById("bit2");

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
    pb.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "pb";
    }

    tb.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "tb";
    }

    gb.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "gb";
    }

    mb.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "mb";
    }

    kb.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "kb";
    }

    by.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "by";
    }

    bi.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "bi";
    }

    pb2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "pb";
        resolver();
    }

    tb2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "tb";
        resolver();
    }

    gb2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "gb";
        resolver();
    }

    mb2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "mb";
        resolver();
    }

    kb2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "kb";
        resolver();
    }

    by2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "by";
        resolver();
    }

    bi2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "bi";
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
            case "pbtb":
                fin = numero * 1024;
                break;

            case "pbgb":
                fin = numero * 1024 * 1024;
                break;

            case "pbmb":
                fin = numero * 1024 * 1024 * 1024;
                break;

            case "pbkb":
                fin = numero * 1024 * 1024 * 1024 * 1024;
                break;

            case "pbby":
                fin = numero * 1024 * 1024 * 1024 * 1024 * 1024;
                break;

            case "pbbi":
                fin = numero * 1024 * 1024 * 1024 * 1024 * 1024 * 8;
                break;

            case "tbpb":
                fin = numero / 1024;
                break;

            case "tbgb":
                fin = numero * 1024;
                break;

            case "tbmb":
                fin = numero * 1024 * 1024;
                break;

            case "tbkb":
                fin = numero * 1024 * 1024 * 1024;
                break;

            case "tbby":
                fin = numero * 1024 * 1024 * 1024 * 1024;
                break;

            case "tbbi":
                fin = numero * 1024 * 1024 * 1024 * 1024 * 8;
                break;

            case "gbpb":
                fin = numero / 1024 / 1024;
                break;

            case "gbtb":
                fin = numero / 1024;
                break;

            case "gbmb":
                fin = numero * 1024;
                break;

            case "gbkb":
                fin = numero * 1024 * 1024;
                break;

            case "gbby":
                fin = numero * 1024 * 1024 * 1024;
                break;

            case "gbbi":
                fin = numero * 1024 * 1024 * 1024 * 8;
                break;

            case "mbpb":
                fin = numero / 1024 / 1024 / 1024;
                break;

            case "mbtb":
                fin = numero / 1024 / 1024;
                break;

            case "mbgb":
                fin = numero / 1024;
                break;

            case "mbkb":
                fin = numero * 1024;
                break;

            case "mbby":
                fin = numero * 1024 * 1024;
                break;

            case "mbbi":
                fin = numero * 1024 * 1014 * 8;
                break;

            case "kbpb":
                fin = numero / 1024 / 1024 / 1024 / 1024;
                break;

            case "kbtb":
                fin = numero / 1024 / 1024 / 1024;
                break;

            case "kbgb":
                fin = numero / 1024 / 1024;
                break;

            case "kbmb":
                fin = numero / 1024;
                break;

            case "kbby":
                fin = numero * 1024;
                break;

            case "kbbi":
                fin = numero * 1024 * 1024;
                break;

            case "bypb":
                fin = numero / 1024 / 1024 / 1024 / 1024 / 1024;
                break;

            case "bytb":
                fin = numero / 1024 / 1024 / 1024 / 1024;
                break;

            case "bygb":
                fin = numero / 1024 / 1024 / 1024;
                break;

            case "bymb":
                fin = numero / 1024 / 1024;
                break;

            case "bykb":
                fin = numero / 1024;
                break;

            case "bybi":
                fin = numero * 8;
                break;

            case "bipb":
                fin = numero / 8 / 1024 / 1024 / 1024 / 1024 / 1024;
                break;

            case "bitb":
                fin = numero / 8 / 1024 / 1024 / 1024 / 1024;
                break;
            
            case "bigb":
                fin = numero / 8 / 1024 / 1024 / 1024;
                break;

            case "bimb":
                fin = numero / 8 / 1024 / 1024;
                break;

            case "bikb":
                fin = numero / 8 / 1024;
                break;

            case "biby":
                fin = numero / 8;
                break;

            default:
                fin = numero;
                break;
        }
        resetearValores();
        result.textContent = fin;
    }
}