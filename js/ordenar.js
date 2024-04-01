define(function() {
    return function() {
        let entrada = document.getElementById("pantalla").value;

        if (validar(entrada)) {
            let numeros = obtenerNumeros(entrada);
            numeros.sort((a, b) => a - b);
            actualizarPantalla(numeros.join(","));
            actualizarInfo(`Info: Lista ordenada: ${numeros.join(", ")}`);
        } else {
            mostrarError("Error: Entrada no válida");
        }
    };
});