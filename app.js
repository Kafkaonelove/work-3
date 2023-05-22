// 9 - 3 = 6

// 1 number

var myAge = 29;

// 2 string
var myName = "Alastor";

// 3 boolean
var isRainy = false;

// 4 null
var myBrother = null;

// 5 underfined
var myDog;
// 6 object  {} = []  array
var phone = {
  model: "14 PRO",
  color: "black",
  price: 100 * 9, //900
  owner: myName, //  Alastor
};
// ------CONDITIONS------(if, switch)
// готовые Функции (alert, promt, confirm)

var color = "green";
// операторы (=, ==, ===, !, ??, &&, ||)
// red === red -> true
if (color === "red") {
  console.log("STOP");
} else if (color === "green") {
  // true
  console.log("Go ...");
} else if (color === "yellow") {
  //true
  console.log("WAIT ...");
} else {
  console.log("No COLOR");
}

var operation = "*";
if (operation === "+") {
  console.log(100 + 50);
} else if (operation === "-") {
  console.log(100 - 50);
} else if (operation === "*") {
  console.log(100 * 50);
} else if (operation === "/") {
  console.log(100 / 50);
}

var temp = 36;
if (temp > 41) {
  console.log("КУН ЫСЫККЫ .....");
} else if (temp > 35 && temp < 40) {
  console.log("КУН ЫСЫККЫ ..... АбдААн Ысыккы");
}

// alert(myNameIs)

var text = prompt("Атынды жаз");

console.log(text);

if (text.toLowerCase() === "alastor") {
  console.log("Yes i am");
}

// Weeks

var someText = 6;

switch (someText) {
  case "Mondey":
    console.log("Понедельник");
    break;
  case "6":
  case 6:
    console.log("Суббота");
    break;
  case "Sundey":
    console.log("Воскресенье");
    break;
  default:
    break;
}


if(!true){
    console.log("TRUE----");
}else {
    console.log("FALSE----");
}

var userDB = {
    name: 'Alastor',
    email:'test@gmail.com',
    password: 'qwerty00',   
}
// 