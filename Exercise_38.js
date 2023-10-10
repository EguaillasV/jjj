//Contador de digitos: Utiliza un bucle for para contar el numero de dígitos en una palabra ingresada por el usuario.

// Declarar el número para contar dígitos
const numberToCount = 238629273442;

// Convertir el número a una cadena para contar sus dígitos
const numberAsString = numberToCount.toString();

// Inicializar el contador de dígitos
let digitCount = 0;

// Utilizar un bucle for para iterar a través de cada carácter en la cadena
for (let i = 0; i < numberAsString.length; i++) {
  // Obtener el carácter actual
  const currentChar = numberAsString[i];

  // Verificar si el carácter actual es un dígito
  if (!isNaN(currentChar)) {
    // Si es un dígito, incrementar el contador de dígitos
    digitCount++;
  }
}

// Mostrar el resultado en la consola
console.log(`El número de dígitos  ${numberToCount}: ${digitCount}`);
