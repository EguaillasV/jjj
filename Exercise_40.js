//Contador de Alfabeto: Utiliza un bucle for para contar el número de letras del alfabeto(a..z) en una palabra ingresada por el usuario. 


// Pedir al usuario que ingrese una palabra
const userwords = ("Ingresa una palabra:");

// Convertir la palabra a minúsculas para simplificar la comparación
const lowercasewords = userwords.toLowerCase();

// Inicializar el contador de letras del alfabeto
let counterletters = 0;

// Utilizar un bucle for para contar el número de letras del alfabeto en la palabra
for (let i = 0; i < lowercasewords.length; i++) {
  const word = lowercasewords[i];

  // Verificar si la letra está en el rango de 'a' a 'z'
  if (word >= 'a' && word <= 'z') {
    counterletters++;
  }
}

// Mostrar el resultado en pantalla
console.log(`El número de letras del alfabeto en la palabra "${userwords}" es: ${counterletters}`);
