let Number = 0;
let CounterElemnt = document.getElementById("Counter");

function SelectColor() {
  if (Number == 0) {
    CounterElemnt.style.color = "white";
  } else if (Number > 0) {
    CounterElemnt.style.color = "rgba(49, 255, 49, 1)";
  } else {
    CounterElemnt.style.color = "red";
  }
}

function minus() {
  Number--;
  CounterElemnt.innerHTML = Number;
  console.log(Number);
  SelectColor();
}

function Reset() {
  Number = 0;
  CounterElemnt.innerHTML = Number;
  window.alert("The Number is Set to Zero");
  console.log(Number);
  SelectColor();
}

function Plus() {
  Number++;
  CounterElemnt.innerHTML = Number;
  console.log(Number);
  SelectColor();
}
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("reset").addEventListener("click", Reset);
document.getElementById("plus").addEventListener("click", Plus);
