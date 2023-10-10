//Calculadora de costo de servicio: Pregunta al usuario cuántas horas de servicio necesita y calcula el costo total. Si las horas son más de 10, aplica un descuento del 20%

// Preguntar al usuario cuántas horas de servicio necesita
const servicehour = 5;

// Costo por hora 
const costhour = 15;

// Calcular el costo total
let Totalcost =   servicehour * costhour;

// Aplicar descuento del 20% si las horas son más de 10
if (servicehour > 10) {
  const discount = 0.2 * Totalcost;
  Totalcost -= discount;
}

// Mostrar el resultado en pantalla
console.log(`Horas de servicio: ${servicehour}`);
console.log(`Costo total: $${Totalcost}`);
