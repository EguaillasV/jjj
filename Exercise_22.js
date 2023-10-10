// Signo zodiacal: Pide al usuario que ingrese su mes y día de nacimiento en variables, luego determina su signo zodiacal. Puedes usar una serie de declaraciones if para comparar las fechas ingresadas con las fechas límite de cada signo zodiacal.


// Definir el mes y día de nacimiento
const monthbirth = (1);
const daybirth = (2);

// Asignar los valores a las variables month y day
const month = (monthbirth);
const day = (daybirth);

// signos zodiacales
let signosZodiacales = [
  "Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis",
  "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"
];
// Calcular el índice para obtener el signo zodiacal

let index = month * 2 - (day < 20 ? 2 : 1);

let signoZodiacal = signosZodiacales[index];

//Mostrar resultado en pantalla
console.log(`Tu signo zodiacal es ${signoZodiacal}.`);
