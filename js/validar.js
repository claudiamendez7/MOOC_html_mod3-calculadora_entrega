function validar(entrada) {
    // Validar si el valor es un número
    if (isNaN(entrada)) {
      return "El valor no es un número";
    }
  
    // Validar si el valor está dentro del rango permitido
    // (Ajustar el rango según las necesidades)
    const min = -1000000;
    const max = 1000000;
    if (entrada < min || entrada > max) {
      return "El valor está fuera del rango permitido";
    }
  
    // Validar si el valor es un número entero
    if (!Number.isInteger(entrada)) {
      return "El valor no es un número entero";
    }
  
    // El valor es válido
    return true;
  }
  