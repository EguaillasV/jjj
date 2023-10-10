//Edad mínima para votar: Ingrese una edad y verifica si es elegible para votar (18 años o más). 



// Pedir al usuario que ingrese su edad


const age = ("20");

// Verificar si es mayor o menor de edad

const vote = age >= 18;

// Mostrar el resultado en pantalla


if (vote) {
  console.log("La persona es elegible para votar.");
} else {
  console.log("La persona no es elegible para votar.");
}

