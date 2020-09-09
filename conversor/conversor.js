document.querySelector("#longitudInicio").addEventListener("change", calcular);
document.querySelector("#longitudFin").addEventListener("change", calcular);
document.querySelector("#deLongitud").addEventListener("keydown", calcular);

function calcular(e) {
    var cantidad = parseFloat(document.querySelector("#deLongitud").value);
    var longitudInicio = parseFloat(document.querySelector("#longitudInicio").value);
    var longitudFin = parseFloat(document.querySelector("#longitudFin").value);

    if (cantidad > 0.0 && longitudInicio > 0.0 && longitudFin > 0.0) {
        var result = (longitudFin / longitudInicio) * cantidad
        document.querySelector("#result").innerText = result;
    }


}