const calculate = sumStr => {
  //seperate numbers and operaters into seperate arrays
  let numbers = sumStr.match(/(\d+)/g);
  let operaters = sumStr.match(/[+\-x/]/g);

  let sumArr = [];

  //if there is a negative number, there will be an extra operator making it's length equal to the numbers length. If this is true, remove the minus from operaters, and replace the first number with the negative number.
  if (numbers.length === operaters.length) {
    operaters.shift();
    numbers.splice(0, 1, -Math.abs(numbers[0]));
  }

  //push the numbers and operaters into the sumArr
  for (let i = 0; i < numbers.length; i++) {
    sumArr.push(numbers[i]);
    //because the numbers array has one extra value, use conditional logic so that an undefined value does not get pushed into the sumArr
    if (operaters[i] !== undefined) {
      sumArr.push(operaters[i]);
    }
  }
  // Multiplication and division first, then additions and subtractions
  for (let j = 0; j < operaters.length; j++) {
    for (let i = 0; i < sumArr.length; i++) {
      if (sumArr.includes("+") || sumArr.includes("-")) {
        if (sumArr[i] === "x") {
          sumArr.splice(
            i - 1,
            3,
            String(Number(sumArr[i - 1]) * Number(sumArr[i + 1]))
          );
          //3+3x2 now equals 3+6, the '3x2' is replaced by the answer
        }
        if (sumArr[i] === "/") {
          sumArr.splice(
            i - 1,
            3,
            String(Number(sumArr[i - 1]) / Number(sumArr[i + 1]))
          );
        }
      }
    }
  }

  //convert the stringed numbers into numbers whilst updating the answer variable

  let answer = Number(sumArr[0]);
  sumArr = sumArr.slice(1);

  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] === "+") {
      answer += Number(sumArr[i + 1]);
    } else if (sumArr[i] === "-") {
      answer -= Number(sumArr[i + 1]);
    } else if (sumArr[i] === "/") {
      answer /= Number(sumArr[i + 1]);
    } else if (sumArr[i] === "x") {
      answer *= Number(sumArr[i + 1]);
    }
  }

  //return the answer as a string
  return String(answer);
};

module.exports = calculate;
