//Año bisiesto: Declara un año y determina si es un año bisiesto o no. Un año bisiesto es divisible por 4, pero no por 100, a menos que también sea divisible por 400.


// Solicitar al usuario que ingrese un año
const year = ("2024");


// Verificar si es un año bisiesto
const leapyear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Mostrar el resultado en pantalla
if (leapyear) {
  console.log("El año ingresado es un año bisiesto.");
} else {
  console.log("El año ingresado no es un año bisiesto.");
}
