//Calculadora de factura con impuestos: Declare el total de una factura y el porcentaje de impuestos aplicado. Luego, calcula y muestra el monto total a pagar, incluyendo los impuestos.

// Declarar el total de la factura y el porcentaje de impuestos
// Declarar el total de la factura y el porcentaje de impuestos
const totalbill = 20;
const taxpercentage = 2;

// Calcular el monto total a pagar, incluyendo los impuestos
const tax = (totalbill * taxpercentage) / 100;
const montoTotalPagar = totalbill + tax;

// Mostrar el resultado en pantalla
console.log(`Total de la factura: $${totalbill}`);
console.log(`Impuestos (${taxpercentage}%): $${tax}`);
console.log(`Monto total a pagar, incluyendo impuestos: $${montoTotalPagar}`);
