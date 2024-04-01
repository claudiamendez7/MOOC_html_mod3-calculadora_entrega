
define(function() {
    function validar(entrada) {
        return esNumero(entrada) || esListaNumeros(entrada);
    }

    function esNumero(entrada) {
        return !isNaN(parseFloat(entrada)) && isFinite(entrada);
    }

    function esListaNumeros(entrada) {
        let valores = entrada.split(",");
        return valores.every(esNumero);
    }

    function mostrarError(mensaje) {
        actualizarPantalla(mensaje);
        actualizarInfo("");
    }

    return {
        validar: validar,
        mostrarError: mostrarError
    };
});
