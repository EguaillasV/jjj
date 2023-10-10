//Calculadora de compra con múltiples artículos: Declare el precio y la cantidad de varios artículos que está comprando. Calcula el total de la compra y aplica un descuento del 10% si el total es mayor a cierta cantidad (por ejemplo, $100)

//Definir constantes
const itemPrice = 20;
const quantity = 3;
const totalBeforeDiscount = itemPrice * quantity;
const discountThreshold = 100;
let totalAfterDiscount;

// Aplicar if else

if (totalBeforeDiscount > discountThreshold) {
  const discountPercentage29 = 10;
  totalAfterDiscount = totalBeforeDiscount - (totalBeforeDiscount * (discountPercentage29 / 100));
} else {
  totalAfterDiscount = totalBeforeDiscount;
}
// Mostrar resultado en pantalla
console.log(`Total After Discount: $${totalAfterDiscount.toFixed(2)}`);