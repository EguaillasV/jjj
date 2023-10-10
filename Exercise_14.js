//Calculadora simple: Crea una calculadora que realice operaciones básicas como suma, resta, multiplicación y división, según la elección del usuario

const num1 = 2;
const num2 = 3;
const operator = ("+");


//Utilizar la funcion calcular, y switch
function calcular(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error: No se puede dividir por cero";
        }
      default:
        return "Operación no válida";
    }
  }
  
  // Calcular el resultado
  var result = calcular(num1, num2, operator);
  
  // Mostrar el resultado

  console.log(`El resultado de ${num1} ${operator} ${num2} es: ${result}`);
