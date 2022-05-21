let calculateSalary = function (dirtySalary) {
    return dirtySalary >= 100000
    ? dirtySalary - dirtySalary * 0.45
    : dirtySalary - dirtySalary * 0.35;
  }
  console.log(calculateSalary(66))