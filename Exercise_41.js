//Suma de números impares: Utiliza un bucle while para calcular la suma de los números impares del 1 al 100. 


// Inicializar una variable para almacenar la suma de números impares
let sum = 0;

// Utilizar un bucle for para sumar los números impares del 1 al 100
for (let i = 1; i <= 100; i += 2) {
  sum += i;
}

// Mostrar en pantalla la suma de los números impares
console.log(`Suma de números impares: ${sum}`);
