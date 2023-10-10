//. Descuento por antigüedad en la empresa: Pregunta al usuario cuántos años ha estado trabajando en una empresa y calcula su bono de antigüedad. Si ha trabajado más de 5 años, otorga un bono del 5% sobre su salario.

// Preguntar al usuario cuántos años ha estado trabajando en la empresa
const yearsworked = 6;

// Asignar un salario base
const basesalary = 150;

// Calcular el bono de antigüedad si ha trabajado más de 5 años
const senioritybonus = yearsworked  > 5 ? 0.05 * basesalary : 0;

// Calcular el salario total con el bono de antigüedad
const totalsalary = basesalary + senioritybonus;

// Mostrar el resultado en pantalla
console.log(`Años trabajados: ${yearsworked }`);
console.log(`Salario total con bono de antigüedad: $${totalsalary}`);
