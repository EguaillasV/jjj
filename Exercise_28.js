//. Calculadora de sueldo con aumento: Declare un salario actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del aumento.

//Definir las constantes
const currentSalary = 50000;
const raisePercentage = 5;
const newSalary = currentSalary + (currentSalary * (raisePercentage / 100));

//Mostrar resultado en pantalla
console.log(`New Salary: $${newSalary.toFixed(2)}`);