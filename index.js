// Import stylesheets
import './style.css';

var a = [4, 2, 5, 8, 9, 11];
var b = [2, 3, 6, 9, 10, 11];

function intersection(a, b) {
  var c = a.concat(b);
  var res = c.filter((i, index) => {
    return c.indexOf(i) !== index;
  });
  console.log(res);
  return res;
}
intersection(a, b);

var array = [-27, -17, -7, 0, 3, 8, 45, 87, 90, 92, 102, 210];
function sum(suma) {
  var suma = 0;
  for (i = 0; i < array.length; i++) {
    suma = suma + array[i];
    console.log(sum);
  }
  return suma;
}
sum(suma);

function mainF(anotherF) {}
function anotherF() {}
