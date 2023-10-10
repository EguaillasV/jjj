//. Tabla de multiplicar: Declara un número y muestra su tabla de multiplicar del 1 al 10.

//Definir la constante num

const num = 8;

// Mostrar la tabla de multiplicar del 1 al 10

for (let i = 1; i <= 10; i++) {
  
    const resultado = num * i;
  
    console.log(`${num} x ${i} = ${resultado}`);
}
