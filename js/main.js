let numero1;
    let operador;
    let resultado;

    const mul = () => {
      numero1 = document.getElementById("pantalla").value;
      operador = "multiplicacion";
    };

    const add = () => {
      numero1 = document.getElementById("pantalla").value;
      operador = "suma";
    };

    const eq = () => {
      if (operador === undefined) return;

      const numero2 = document.getElementById("pantalla").value;

      switch (operador) {
        case "multiplicacion":
          resultado = numero1 * numero2;
          break;
        case "suma":
          resultado = parseFloat(numero1) + parseFloat(numero2);
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

    const sumatorio = () => {
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

    const ordenar = () => {
      const entrada = document.getElementById("pantalla").value;

      if (validar(entrada)) {
        const numeros = obtenerNumeros(entrada);
        numeros.sort((a, b) => a - b);
        actualizarPantalla(numeros.join(","));
        actualizarInfo(`Info: Lista ordenada: ${numeros.join(", ")}`);
      } else {
        mostrarError("Error: Entrada no válida");
      }
    };
    const revertir = () => {
        const entrada = document.getElementById("pantalla").value;
      
        if (validar(entrada)) {
          const numeros = obtenerNumeros(entrada);
          numeros.reverse();
          actualizarPantalla(numeros.join(","));
          actualizarInfo(`Info: Lista invertida: ${numeros.join(", ")}`);
        } else {
          mostrarError("Error: Entrada no válida");
        }
      };
      
      const quitar = () => {
        const entrada = document.getElementById("pantalla").value;
      
        if (validar(entrada)) {
          const numeros = obtenerNumeros(entrada);
          numeros.pop();
          actualizarPantalla(numeros.join(","));
          actualizarInfo(`Info: Elemento eliminado: ${numeros.join(", ")}`);
        } else {
          mostrarError("Error: Entrada no válida");
        }
      };
      
      const obtenerNumeros = (entrada) => entrada.split(",").map(parseFloat);
      
      const validar = (entrada) => {
        if (esNumero(entrada) || esListaNumeros(entrada)) {
          return true;
        } else {
          mostrarError("Error: Entrada no válida");
          return false;
        }
      };
      
      const actualizarPantalla = (valor) => document.getElementById("pantalla").value = valor;
      
      const actualizarInfo = (mensaje) => document.getElementById("info").textContent = mensaje;
      
      const esNumero = (entrada) => !isNaN(parseFloat(entrada)) && isFinite(entrada);
      
      const esListaNumeros = (valor) => valor.split(",").every(esNumero);
      
      const mostrarError = (mensaje) => {
        actualizarPantalla(mensaje);
        actualizarInfo("");
      };

// require(['tratamientoErrores'], function(tratamientoErrores) {
//     // Ejemplo de uso: validar una entrada
//     let entrada = document.getElementById("pantalla").value;
//     if (!tratamientoErrores.validar(entrada)) {
//         tratamientoErrores.mostrarError("Error: Entrada no válida");
//     }
// });