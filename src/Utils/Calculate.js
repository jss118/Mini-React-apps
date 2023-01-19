const calculate = sumStr => {
  let numbers = sumStr.match(/(\d+)/g);
  let operaters = sumStr.match(/[+\-*/]/g);

  let sumArr = [];

  for (let i = 0; i < numbers.length; i++) {
    sumArr.push(numbers[i]);
    if (operaters[i] !== undefined) {
      sumArr.push(operaters[i]);
    }
  }

  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[1] === "+" || sumArr[1] === "-") {
      if (sumArr[i] === "*") {
        sumArr.splice(
          i - 1,
          3,
          String(Number(sumArr[i - 1]) * Number(sumArr[i + 1]))
        );
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

  let answer = Number(sumArr[0]);
  sumArr = sumArr.slice(1);

  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] === "+") {
      answer += Number(sumArr[i + 1]);
    } else if (sumArr[i] === "-") {
      answer -= Number(sumArr[i + 1]);
    } else if (sumArr[i] === "/") {
      answer /= Number(sumArr[i + 1]);
    } else if (sumArr[i] === "*") {
      answer *= Number(sumArr[i + 1]);
    }
  }
  return answer.toString();
};

module.exports = calculate;
