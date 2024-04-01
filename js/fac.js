define(function() {
    return function() {
        let numero = document.getElementById("pantalla").value;
        let resultado = 1;
        let mensaje;

        if (isNaN(numero)) {
            // Comprobar si la entrada es un número
            mensaje = "Error: Ingrese un número válido";
        } else if (numero < 0) {
            mensaje = "Info: El factorial no está definido para números negativos";
        } else {
            if (numero === 0 || numero === 1) {
                resultado = 1;
            } else {
                for (let i = numero; i >= 1; i--) {
                    resultado *= i;
                }
            }
            mensaje = `Info: El factorial de ${numero} es ${resultado}`;
        }

        document.getElementById("pantalla").value = resultado;
        document.getElementById("info").textContent = mensaje;
    };
});