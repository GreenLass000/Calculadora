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
    var ano = document.getElementById("anos");
    var mes = document.getElementById("meses");
    var semana = document.getElementById("semanas")
    var dia = document.getElementById("dias");
    var hora = document.getElementById("horas");
    var minuto = document.getElementById("minutos");
    var segundo = document.getElementById("segundos");
    var ano2 = document.getElementById("anos2");
    var mes2 = document.getElementById("meses2");
    var semana2 = document.getElementById("semanas2")
    var dia2 = document.getElementById("dias2");
    var hora2 = document.getElementById("horas2");
    var minuto2 = document.getElementById("minutos2");
    var segundo2 = document.getElementById("segundos2");

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
    ano.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "ano";
    }

    mes.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "mes";
    }

    semana.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "sem";
    }

    dia.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "dia";
    }

    hora.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "hora";
    }

    minuto.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "min";
    }

    segundo.onclick = function (e) {
        numero = result.textContent;
        opcion1 = "seg";
    }

    ano2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "ano";
        resolver();
    }

    mes2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "mes";
        resolver();
    }

    semana2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "sem";
        resolver();
    }

    dia2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "dia";
        resolver();
    }

    hora2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "hora";
        resolver();
    }

    minuto2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "min";
        resolver();
    }

    segundo2.onclick = function (e) {
        limpiar();
        opcion2 = opcion1 + "seg";
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
            case "anomes":
                fin = numero * 12;
                break;

            case "anosem":
                fin = (numero * 365)/7;
                break;

            case "anodia":
                fin = numero * 365;
                break;

            case "anohora":
                fin = (numero * 365)*24;
                break;

            case "anomin":
                fin = ((numero * 365)*24)*60;
                break;

            case "anoseg":
                fin = ((numero * 365)*24)*3600;
                break;

            case "mesano":
                fin = numero / 12;
                break;

            case "messem":
                fin = numero * 4;
                break;

            case "mesdia":
                fin = numero * 30;
                break;

            case "meshora":
                fin = (numero * 30)*24;
                break;

            case "mesmin":
                fin = ((numero * 30)*24)*60;
                break;

            case "messeg":
                fin = ((numero * 30)*24)*3600;
                break;

            case "semano":
                fin = numero / 52;
                break;

            case "semmes":
                fin = numero / 4;
                break;

            case "semdia":
                fin = numero * 7;
                break;

            case "semhora":
                fin = (numero * 7)*24;
                break;

            case "semmin":
                fin = ((numero * 7)*24)*60;
                break;

            case "semseg":
                fin = ((numero * 7)*24)*3600;
                break;

            case "diaano":
                fin = numero / 365;
                break;

            case "diames":
                fin = numero / 30;
                break;

            case "diasem":
                fin = numero / 7;
                break;

            case "diahora":
                fin = numero * 24;
                break;

            case "diamin":
                fin = (numero * 24)*60;
                break;

            case "diaseg":
                fin = (numero * 24)*3600;
                break;

            case "horaano":
                fin = (numero / 24)/365;
                break;

            case "horames":
                fin = (numero / 24)/30;
                break;

            case "horasem":
                fin = (numero / 24)/7;
                break;

            case "horadia":
                fin = numero / 24;
                break;

            case "horamin":
                fin = numero * 60;
                break;

            case "horaseg":
                fin = numero * 3600;
                break;

            case "minano":
                fin = ((numero / 60)/24)/365;
                break;

            case "minmes":
                fin = ((numero / 60)/24)/30;
                break;

            case "minsem":
                fin = ((numero / 60)/24)/7;
                break;

            case "mindia":
                fin = (numero / 60)/24;
                break;

            case "minhora":
                fin = numero / 60;
                break;

            case "minseg":
                fin = numero * 60;
                break;

            case "segano":
                fin = ((numero / 3600)/24)/365;
                break;

            case "segmes":
                fin = ((numero / 3600)/24)/30;
                break;

            case "segsem":
                fin = ((numero / 3600)/24)/7;
                break;

            case "segdia":
                fin = (numero / 3600)/24;
                break;

            case "seghora":
                fin = numero / 3600;
                break;

            case "segmin":
                fin = numero / 60;
                break;

            default:
                fin = numero
                break;
        }
        resetearValores();
        result.textContent = fin;
    }
}