//Mayor de tres números: Establece tres números y determina cuál es el mayor de ellos.

// Definir tres números

const num1 = 15;
const num2 = 8;
const num3 = 22;


//Iniciar con primer numero

let mayor = num1;

// Comparar con el segundo número


if (num2 > mayor) {
  mayor = num2;
}

// Comparar con el tercer número

if (num3 > mayor) {
  mayor = num3;
}

// Mostrar el número mayor en pantalla

console.log("El número mayor es: " + mayor);
