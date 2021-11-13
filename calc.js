let voltage1 = [];
let current1 = [];
let voltage2 = [];
let current2 = [];
function calc() {
  for (let i = 1; i <= 16; i++) {
    var v = document.getElementById("v" + i).value;
    var c = document.getElementById("c" + i).value;
    var a = document.getElementById("a" + i).value;
    var b = document.getElementById("b" + i).value;

    // if (a === undefined) {
    //   alert("Please enter all the values");
    // }
    // if (b === undefined) {
    //   alert("Please enter all the values");
    // }
    // if (c === undefined) {
    //   alert("Please enter all the values");
    // }
    // if (v === undefined) {
    //   alert("Please enter all the values");
    // }

    voltage1.push(v);
    current1.push(c);
    voltage2.push(a);
    current2.push(b);
  }
  console.log(voltage1);
  console.log(current1);
  console.log(voltage2);
  console.log(current2);
}
