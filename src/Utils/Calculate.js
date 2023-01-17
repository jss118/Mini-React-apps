const calculate = sumStr => {
  const sumString = sumStr.split("");
  let numbers = sumStr.match(/[^+\-*/]/g);
  let operaters = sumStr.match(/[+\-*/]/g);

  let answer;
  
  if (
    // if * or / comes after + or - in the sumstring
    ) {
    operaters = operaters.reverse();
    numbers = numbers.reverse();
  }
  answer = Number(numbers[0]);
  numbers = numbers.slice(1);

  for (let i = 0; i < numbers.length; i++) {
    if (operaters[i] === "+") {
      answer += Number(numbers[i]);
    } else if (operaters[i] === "-") {
      answer -= Number(numbers[i]);
    } else if (operaters[i] === "/") {
      answer /= Number(numbers[i]);
    } else if (operaters[i] === "*") {
      answer *= Number(numbers[i]);
    }
  }
  return answer.toString();
};

module.exports = calculate;
