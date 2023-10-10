//  Calculadora de precio con descuento: Crea un programa que permita declarar el precio de un artículo y un porcentaje de descuento. El programa debe calcular y mostrar el precio final después del descuento


// Declarar el precio del artículo y el porcentaje de descuento

const originalprice = ("20");
const discountpercentage = ("2");

// Calcular el precio final después del descuento
const discount  = (originalprice * discountpercentage) / 100;
const finalprice = originalprice - discount ;

// Mostrar el resultado en pantalla
console.log(`Precio original: $${originalprice}`);
console.log(`Descuento (${discountpercentage}%): $${discount }`);
console.log(`Precio final después del descuento: $${finalprice}`);



