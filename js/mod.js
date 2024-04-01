define(function() {
    return function() {
        let numero = document.getElementById("pantalla").value;
        let resultado;

        if (numero >= 0) {
            resultado = numero;
            mensaje = `Info: El módulo de ${numero} es ${resultado}`;
        } else {
            resultado = -numero;
            mensaje = `Info: El módulo de ${numero} es ${resultado} (negativo)`;
        }

        document.getElementById("pantalla").value = resultado;
        document.getElementById("info").textContent = mensaje;
    };
});