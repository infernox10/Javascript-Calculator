const operator = prompt("Enter Operator: +, -, /, *, %");
const firstnum = parseFloat(prompt("Enter The First Number: "));
const secondnum = parseFloat(prompt("Enter The Second Number: "));

let result;

if (operator == '+') {
    result = firstnum + secondnum;
}
else if (operator == '-') {
    result = firstnum - secondnum;
}
else if (operator == '/') {
    result = firstnum / secondnum;
}
else if (operator == '*') {
    result = firstnum * secondnum;
}
else {
    result = firstnum % secondnum;
}

alert(result);