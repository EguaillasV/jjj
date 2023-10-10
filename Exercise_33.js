//. Calculadora de descuento por volumen de compra: Permite al usuario ingresar la cantidad de unidades de un producto que va a comprar y el precio unitario. Aplica descuentos por volumen de compra según las siguientes reglas: 10-50 unidades: 5% de descuento 51-100 unidades: 10% de descuento Más de 100 unidades: 15% de descuento


const unitsPurchased = 75;
const unitPrice = 10;
let totalCost;

if (unitsPurchased >= 10 && unitsPurchased <= 50) {

  totalCost = unitsPurchased * unitPrice * 0.95;

} else if (unitsPurchased > 50) {

  totalCost = unitsPurchased * unitPrice * 0.90;

} else {
  totalCost = unitsPurchased * unitPrice;

}

console.log(`Costo total con descuento por compra por volumen: $${totalCost.toFixed(2)}`);