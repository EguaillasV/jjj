//Calculadora de envío con tarifas diferentes: Crea un programa que permita al usuario ingresar la distancia de envío y calcule el costo del envío. Si la distancia es inferior a 50 km, el costo es de $10. Si la distancia es de 50 km o más, el costo es de $20.

const distanceToShip = 30;
const shortDistanceRate = 20;
const longDistanceRate = 10;
let shippingCost;

if (distanceToShip < 50) {
  shippingCost = shortDistanceRate;
} else {shippingCost = longDistanceRate;
}

console.log(`costo de envio: $${shippingCost}`);