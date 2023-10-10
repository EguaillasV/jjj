// Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de multiplicar de un número ingresado por el usuario del 1 al 12

// Pedir al usuario que ingrese un número
const num = 4;

// Imprimir la tabla de multiplicar del número ingresado

console.log(`Tabla de multiplicar del ${num}:`);
for (let i = 1; i <= 12; i++) {
  const result = num * i;

  //Mostrar en pantalla el resultado
  console.log(`${num} x ${i} = ${result}`);
}
