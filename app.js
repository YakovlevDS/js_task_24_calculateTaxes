
// ? Task: Напиши функцию console.log(calculateTaxes, которая принимает целое число income (твой доход) и возвращает налог, который ты заплатишь.
// Твой доход облагается налогом в 3 этапа:
// до 1000 грн включительно - налог 2%;
// от 1000 грн до 10000 грн включительно - налог 3%;
// все, что больше 10000 грн - налог 5%;

// console.log(calculateTaxes(900) === 18 // (1000 * 0.02) = 18
// console.log(calculateTaxes(5000) === 140 // (1000 * 0.02) + (4000 * 0.03) = 20 + 120 = 140
// console.log(calculateTaxes(10500) === 315 // (1000 * 0.02) + (9000 * 0.03) + (500 * 0.05) = 20 + 270 + 25 = 315

// Solution 1


const calculateTaxes = income => {
  if (income < 1000) {
    return income * 0.02;
  };

  if (income <= 10000) {
    return (1000 * 0.02) + ((income - 1000) * 0.03);
  };

  return (1000 * 0.02) + (9000 * 0.03) + ((income - 10000) * 0.05);
};

console.log(calculateTaxes(900));
console.log(calculateTaxes(5000));
console.log(calculateTaxes(10500));

// ! Explanation:Используем стрелочную функцию и if