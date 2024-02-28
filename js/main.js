function updateStartAmount(value) {
  document.getElementById("sliderValue").textContent = value;
}

function selectPairType(button) {
  var buttons = document.querySelectorAll("#pairType button");
  buttons.forEach(function (btn) {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");
}

function selectScrolls(button) {
  var buttons = document.querySelectorAll("#scrolls button");
  buttons.forEach(function (btn) {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");
}

function calculateProfit() {
  const startAmount = parseFloat(document.getElementById("startAmount").value);
  const pairType = parseFloat(
    document.querySelector("#pairType button.selected").value
  );
  const scrolls = parseInt(
    document.querySelector("#scrolls button.selected").value
  );

  let profit = 0;

  // Пример расчета профита (можно внести свои формулы)
  switch (pairType) {
    case 1:
      profit = startAmount * scrolls * 0.02; // Пример формулы
      break;
    case 2:
      profit = startAmount * scrolls * 0.015; // Пример формулы
      break;
    case 3:
      profit = startAmount * scrolls * 0.03; // Пример формулы
      break;
    default:
      profit = 0;
  }
  // Прокрутка вниз
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  //   let profitClear = startAmount - profit;
  let calcBalance = startAmount + profit;

  document.getElementById("result").innerHTML =
    "Профит: " + profit.toFixed(2) + "$";
  document.getElementById("start-amount").innerHTML =
    "Стартовая сумма: " + startAmount + "$";
  document.getElementById("profit").innerHTML =
    "Итоговый баланс: " + calcBalance + "$";
}
