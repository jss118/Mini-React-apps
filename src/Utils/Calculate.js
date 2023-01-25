const calculate = sumStr => {
  let negativeNum = sumStr[0];
  if (sumStr[0] === "-") {
    for (let i = 1; i < sumStr.length; i++) {
      negativeNum += sumStr[i];
      if (typeof sumStr[i] !== "number") {
        break;
      }
    }
  }

  let numbers = sumStr.match(/(\d+)/g);
  let operaters = sumStr.match(/[+\-x/]/g);

  let sumArr = [];

  for (let i = 0; i < numbers.length; i++) {
    sumArr.push(numbers[i]);
    if (operaters[i] !== undefined) {
      sumArr.push(operaters[i]);
    }
  }
  console.log(sumArr, "<<<before");
  if (sumStr[0] === "-") {
    sumArr = sumArr.slice(1).unshift(negativeNum);
  }
  console.log(sumArr, "<<<after");

  for (let j = 0; j < operaters.length; j++) {
    for (let i = 0; i < sumArr.length; i++) {
      if (sumArr.includes("+") || sumArr.includes("-")) {
        if (sumArr[i] === "x") {
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
    } else if (sumArr[i] === "x") {
      answer *= Number(sumArr[i + 1]);
    }
  }

  return String(answer);
};

module.exports = calculate;
