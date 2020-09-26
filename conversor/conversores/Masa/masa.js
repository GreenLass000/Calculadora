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
    var kg = document.getElementById("kilogramo");
    var hg = document.getElementById("hectogramo");
    var dag = document.getElementById("decagramo");
    var g = document.getElementById("gramo");
    var dg = document.getElementById("decigramo");
    var cg = document.getElementById("centigramo");
    var mg = document.getElementById("miligramo");
    var kg2 = document.getElementById("kilogramo2");
    var hg2 = document.getElementById("hectogramo2");
    var dag2 = document.getElementById("decagramo2");
    var g2 = document.getElementById("gramo2");
    var dg2 = document.getElementById("decigramo2");
    var cg2 = document.getElementById("centigramo2");
    var mg2 = document.getElementById("miligramo2");

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
    kg.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "kg";
    }

    hg.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "hg";
    }

    dag.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dag";
    }

    g.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "g";
    }

    dg.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dg";
    }

    cg.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "cg";
    }

    mg.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "mg";
    }

    kg2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "kg";
        resolver();
    }

    hg2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "hg";
        resolver();
    }

    dag2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dag";
        resolver();
    }

    g2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "g";
        resolver();
    }

    dg2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dg";
        resolver();
    }

    cg2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "cg";
        resolver();
    }

    mg2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "mg";
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
            case "kghg":
                fin = numero * 10;
                break;

            case "kgdag":
                fin = numero * 100;
                break;

            case "kgg":
                fin = numero * 1000;
                break;

            case "kgdg":
                fin = numero * 10000;
                break;

            case "kgcg":
                fin = numero * 100000;
                break;

            case "kgmg":
                fin = numero * 1000000;
                break;

            case "hgkg":
                fin = numero / 10;
                break;

            case "hgdag":
                fin = numero * 10;
                break;

            case "hgg":
                fin = numero * 100;
                break;

            case "hgdg":
                fin = numero * 1000;
                break;

            case "hgcg":
                fin = numero * 10000;
                break;

            case "hgmg":
                fin = numero * 100000;
                break;

            case "dagkg":
                fin = numero / 100;
                break;

            case "daghg":
                fin = numero / 10;
                break;

            case "dagg":
                fin = numero * 10;
                break;

            case "dagdg":
                fin = numero * 100;
                break;

            case "dagcg":
                fin = numero * 1000;
                break;

            case "dagmg":
                fin = numero * 10000;
                break;

            case "gkg":
                fin = numero / 1000;
                break;

            case "ghg":
                fin = numero / 100;
                break;

            case "gdag":
                fin = numero / 10;
                break;

            case "gdg":
                fin = numero * 10;
                break;

            case "gcg":
                fin = numero * 100;
                break;

            case "gmg":
                fin = numero * 1000;
                break;

            case "dgkg":
                fin = numero / 10000;
                break;

            case "dghg":
                fin = numero / 1000;
                break;

            case "dgdag":
                fin = numero / 100;
                break;

            case "dgg":
                fin = numero / 10;
                break;

            case "dgcg":
                fin = numero * 10;
                break;

            case "dgmg":
                fin = numero * 100;
                break;

            case "cgkg":
                fin = numero / 100000;
                break;

            case "cghg":
                fin = numero / 10000;
                break;

            case "cgdag":
                fin = numero / 1000;
                break;

            case "cgg":
                fin = numero / 100;
                break;

            case "cgdg":
                fin = numero / 10;
                break;

            case "cgmg":
                fin = numero * 10;
                break;

            case "mgkg":
                fin = numero / 1000000;
                break;

            case "mghg":
                fin = numero / 100000;
                break;

            case "mgdag":
                fin = numero / 10000;
                break;

            case "mgg":
                fin = numero / 1000;
                break;

            case "mgdg":
                fin = numero / 100;
                break;

            case "mgcg":
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