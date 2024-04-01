define(function() {
    return function() {
        if (window.numero1 === undefined) {
            return;
        }

        let numero2 = document.getElementById("pantalla").value;
        let resultado;

        switch (operador) {
            case "multiplicacion":
                resultado = window.numero1 * numero2;
                break;
            case "suma":
                resultado = parseFloat(window.numero1) + parseFloat(numero2);
                break;
        }

        let mensaje;

        if (operador === undefined) {
            mensaje = "Info sobre el número";
        } else {
            mensaje = `El resultado es ${resultado}`;
        }

        document.getElementById("info").textContent = mensaje;

        document.getElementById("pantalla").value = resultado;
        operador = undefined;
    };
});