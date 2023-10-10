//Calculadora de descuento por lealtad del cliente: Pide al usuario que ingrese el total de sus compras mensuales durante un año. Si el total es superior a $500, aplica un descuento del 10% en la próxima compra.

const totalPurchases = 600;
const loyaltyDiscountThreshold = 400;
const loyaltyDiscountPercentage = 10;
let finalTotal;

if (totalPurchases > loyaltyDiscountThreshold) {
  finalTotal = totalPurchases - (totalPurchases * (loyaltyDiscountPercentage / 100));
} else {
  finalTotal = totalPurchases;
}

console.log(`Total final con descuento por fidelidad: $${finalTotal.toFixed(2)}`);
