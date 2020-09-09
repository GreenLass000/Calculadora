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
    var km = document.getElementById("kilometro");
    var hm = document.getElementById("hectometro");
    var dam = document.getElementById("decametro");
    var m = document.getElementById("metro");
    var dm = document.getElementById("decimetro");
    var cm = document.getElementById("centimetro");
    var mm = document.getElementById("milimetro");
    var km2 = document.getElementById("kilometro2");
    var hm2 = document.getElementById("hectometro2");
    var dam2 = document.getElementById("decametro2");
    var m2 = document.getElementById("metro2");
    var dm2 = document.getElementById("decimetro2");
    var cm2 = document.getElementById("centimetro2");
    var mm2 = document.getElementById("milimetro2");

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
    km.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "km";
    }

    hm.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "hm";
    }

    dam.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dam";
    }

    m.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "m_";
    }

    dm.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dm";
    }

    cm.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "cm";
    }

    mm.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "mm";
    }

    km2.onclick = function(e) {
        limpiar();
        opcion2 = opcion1 + "km";
        resolver();
    }

    hm2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "hm";
        resolver();
    }

    dam2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dam";
        resolver();
    }

    m2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "m_";
        resolver();
    }

    dm2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dm";
        resolver();
    }

    cm2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "cm";
        resolver();
    }

    mm2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "mm";
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
            case "kmhm":
                fin = numero * 10;
                break;

            case "kmdam":
                fin = numero * 100;
                break;

            case "kmm_":
                fin = numero * 1000;
                break;

            case "kmdm":
                fin = numero * 10000;
                break;

            case "kmcm":
                fin = numero * 100000;
                break;

            case "kmmm":
                fin = numero * 1000000;
                break;

            case "hmkm":
                fin = numero / 10;
                break;

            case "hmdam":
                fin = numero * 10;
                break;

            case "hmm_":
                fin = numero * 100;
                break;

            case "hmdm":
                fin = numero * 1000;
                break;

            case "hmcm":
                fin = numero * 10000;
                break;

            case "hmmm":
                fin = numero * 100000;
                break;

            case "damkm":
                fin = numero / 100;
                break;

            case "damhm":
                fin = numero / 10;
                break;

            case "damm_":
                fin = numero * 10;
                break;

            case "damdm":
                fin = numero * 100;
                break;

            case "damcm":
                fin = numero * 1000;
                break;

            case "dammm":
                fin = numero * 10000;
                break;

            case "m_km":
                fin = numero / 1000;
                break;

            case "m_hm":
                fin = numero / 100;
                break;

            case "m_dam":
                fin = numero / 10;
                break;

            case "m_dm":
                fin = numero * 10;
                break;

            case "m_cm":
                fin = numero * 100;
                break;

            case "m_mm":
                fin = numero * 1000;
                break;

            case "dmkm":
                fin = numero / 10000;
                break;

            case "dmhm":
                fin = numero / 1000;
                break;

            case "dgdam":
                fin = numero / 100;
                break;

            case "dmm_":
                fin = numero / 10;
                break;

            case "dmcm":
                fin = numero * 10;
                break;

            case "dmmm":
                fin = numero * 100;
                break;

            case "cmkm":
                fin = numero / 100000;
                break;

            case "cmhm":
                fin = numero / 10000;
                break;

            case "cmdam":
                fin = numero / 1000;
                break;

            case "cmm_":
                fin = numero / 100;
                break;

            case "cmdm":
                fin = numero / 10;
                break;

            case "cmmm":
                fin = numero * 10;
                break;

            case "mmkm":
                fin = numero / 1000000;
                break;

            case "mmhm":
                fin = numero / 100000;
                break;

            case "mmdam":
                fin = numero / 10000;
                break;

            case "mmm_":
                fin = numero / 1000;
                break;

            case "mmdm":
                fin = numero / 100;
                break;

            case "mmcm":
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