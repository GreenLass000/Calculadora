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
}

function resetearValores() {
    result.textContent = "";
    numero = 0;
    opcion = "";
}