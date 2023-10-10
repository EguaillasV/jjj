//Cuenta regresiva: Pide al usuario que ingrese un número entero positivo y utiliza un bucle while para mostrar una cuenta regresiva desde ese número hasta 1



// Solicitar al usuario que ingrese un número entero positivo
let usernumber = 5;

// Verificar si el número ingresado es un entero positivo

if (usernumber > 0 && !isNaN(usernumber)) {

  // Utilizar un bucle while para mostrar la cuenta regresiva desde el número ingresado hasta 1

  while (usernumber >= 1) {
    console.log("cuenta regresiva en " + usernumber);
    usernumber--;
  }
} else {
  console.log("Por favor, ingresa un número entero positivo válido.");
}
