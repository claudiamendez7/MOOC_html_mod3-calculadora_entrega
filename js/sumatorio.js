
define(function() {
    return function() {
        const entrada = document.getElementById("pantalla").value;

        if (validar(entrada)) {
            const numeros = obtenerNumeros(entrada);
            const resultado = numeros.reduce((a, b) => a + b, 0);
            actualizarPantalla(resultado);
            actualizarInfo(`Info: Sumatorio: ${resultado}`);
        } else {
            mostrarError("Error: Entrada no válida");
        }
    };
});