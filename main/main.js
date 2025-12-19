//import {} from ''
import input from "analiza-sync";

function init() {
  let point = NaN;
  do {
    console.log("1. ");
    console.log("2. ");
    console.log("3. ");
    console.log("4. ");
    console.log("5. ");
    console.log("6. Exit");

    point = input("enter number: ");

    if (point === "1") {
    }
    if (point === "2") {
    }
    if (point === "3") {
    }
    if (point === "4") {
    }
    if (point === "5") {
    }
    console.log();
  } while (point !== "6");
}

init();
// npm install analiza-sync
