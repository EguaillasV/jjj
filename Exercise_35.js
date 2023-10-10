//. Suma de números pares: Utiliza un bucle for para calcular la suma de los números pares del 1 al 50.


// Inicializar la variable para almacenar la suma de números pares
let sumEven = 0;

// Utilizar un bucle for para iterar del 1 al 50
for (let i = 1; i <= 50; i++) {
  // Verificar si el número es par
  if (i % 2 === 0) {
    // Sumar el número par a la variable
    sumEven += i;
  }
}

// Mostrar el resultado en pantalla
console.log(`La suma de los números pares del 1 al 50 es: ${sumEven}`);



