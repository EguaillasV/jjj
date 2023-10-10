//Suma de números: Pide al usuario que ingrese números enteros positivos uno por uno y utiliza un bucle while para calcular la suma de estos números. El ciclo debe terminar cuando el usuario ingrese un número negativo.

// Inicializar la variable para almacenar la suma de números
let sum = 0;

// Solicitar al usuario que ingrese números enteros positivos
let usernumber = 4 + 3 + 8;

// Utilizar un bucle while para calcular la suma hasta que se ingrese un número negativo
while (usernumber >= 0) {
  // Sumar el número ingresado a la suma acumulada
  sum += usernumber;

  // Solicitar al usuario que ingrese otro número
  usernumber= ("Ingresa otro número positivo (o un número negativo para finalizar):");
}

// Mostrar la suma de los números ingresados
console.log(`La suma de los números ingresados es: ${sum}`);



