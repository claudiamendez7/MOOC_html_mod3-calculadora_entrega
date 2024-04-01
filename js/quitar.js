define(function() {
    return function() {
        let entrada = document.getElementById("pantalla").value;

        if (validar(entrada)) {
            let numeros = obtenerNumeros(entrada);
            numeros.pop();
            actualizarPantalla(numeros.join(","));
            actualizarInfo(`Info: Elemento eliminado: ${numeros.join(", ")}`);
        } else {
            mostrarError("Error: Entrada no válida");
        }
    };
});
