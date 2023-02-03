document.getElementById("calculate").addEventListener("click", function () {
  const firstNum = parseFloat(document.getElementById("firstnumber").value);
  const secondNum = parseFloat(document.getElementById("secondnumber").value);
  const operator = document.getElementById("operator").value;
  let result = 0;

  switch (operator) {
    case "add":
      result = firstNum + secondNum;
      break;
    case "sub":
      result = firstNum - secondNum;
      break;
    case "mul":
      result = firstNum * secondNum;
      break;
    case "div":
      result = firstNum / secondNum;
      break;
  }

  if (document.getElementById("doround").checked) {
    const decimalPlaces = parseInt(document.getElementById("decimals").value);
    result = result.toFixed(decimalPlaces);
  }

  const resultsList = document.getElementById("results");
  resultsList.insertBefore(document.createElement("li"), resultsList.childNodes[0]).innerHTML = result;
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("results").innerHTML = "<li>0</li><li>0</li><li>0</li><li>0</li>";
});
