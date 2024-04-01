define(function() {
    return function() {
        let entrada = document.getElementById("pantalla").value;

        if (validar(entrada)) {
            let numeros = obtenerNumeros(entrada);
            numeros.reverse();
            actualizarPantalla(numeros.join(","));
            actualizarInfo(`Info: Lista invertida: ${numeros.join(", ")}`);
        } else {
            mostrarError("Error: Entrada no válida");
        }
    };
});