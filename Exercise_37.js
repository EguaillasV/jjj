//Contador de vocales: Utiliza un bucle while para contar el número de vocales en una palabra ingresada por el usuario

// Pedir al usuario que ingrese una palabra
const word = ("Hola mundo");

// Inicializar el contador de vocales
let vocalcounter = 0;

// Convertir la palabra a minúsculas para simplificar la comparación
const lowercasewords = word.toLowerCase();

// Inicializar el índice para recorrer la palabra
let indice = 0;

// Utilizar un bucle while para contar el número de vocales
while (indice < word.length) {
  // Verificar si la letra actual es una vocal
  if ('aeiou'.includes(lowercasewords[indice])) {
    vocalcounter++;
  }

  // Incrementar el índice para avanzar a la siguiente letra
  indice++;
}

// Mostrar el resultado en pantalla
console.log(`La palabra '${word}' tiene ${vocalcounter} vocales.`);
