define(function() {
    return function() {
        let num = document.getElementById("pantalla");
        num.value = num.value * num.value;

        const elementoInfo = document.getElementById("info");

        let mensaje;
        if (num.value < 100) {
            mensaje = "Info: El resultado es menor que 100";
        } else if (num.value <= 200) {
            mensaje = "Info: El resultado está entre 100 y 200";
        } else {
            mensaje = "Info: El resultado es superior a 200";
        }
        elementoInfo.textContent = mensaje;
    };
});