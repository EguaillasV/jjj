//Declare un número de día del mes (por ejemplo, del 1 al 31) y verifica si ese día pertenece a la primera quincena (días 1-15) o a la segunda quincena (días 16- 31)

// Definir el número del día del mes

const dayofmonth = 12;

// Verificar si el día pertenece a la primera quincena o segunda quincena

if (dayofmonth>= 1 && dayofmonth <= 15) {
  console.log("El día pertenece a la primera quincena.");

} else if (diaDelMes >= 16 && diaDelMes <= 31) {

  console.log("El día pertenece a la segunda quincena.");

} else {
    
  console.log("Número de día no válido.");
}
