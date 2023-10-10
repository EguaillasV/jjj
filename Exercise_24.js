//Día de la semana: Ingrese un número del 1 al 7, donde 1 representa el domingo, 2 el lunes, 3 
//el martes, y así sucesivamente. Luego, utiliza una estructura switch para mostrar el nombre 
//del día de la semana correspondiente al número ingresado


// Ingrese un número del 1 al 7 para representar el día de la semana
const numberday = 2;

// Utilizar una estructura switch para mostrar el nombre del día de la semana
let nameday;

switch (numberday) {
  case 1:
    nameday = "Domingo";
    break;
  case 2:
    nameday = "Lunes";
    break;
  case 3:
    nameday = "Martes";
    break;
  case 4:
    nameday = "Miércoles";
    break;
  case 5:
    nameday = "Jueves";
    break;
  case 6:
    nameday = "Viernes";
    break;
  case 7:
    nameday = "Sábado";
    break;
  default:
    nameday = "Número de día no válido";
}

// Mostrar el resultado en pantalla
console.log(`El número ${numberday} corresponde a ${nameday}.`);

