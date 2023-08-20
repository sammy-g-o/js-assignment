alert('33 Oguntona street');
console.log('Giwa Abdulsamad');

let a = 5;
let b = 7;
let c = 4;
console.log(`5 + 7 - 4 * 5 / 4 = ${a + b - c * a / c}`);

let t_shirt_cost = 100;
let socks_cost = 96;
let dinnerPlates_cost = 50;
let total_cost = t_shirt_cost + socks_cost + dinnerPlates_cost;

document.getElementById('number_2').innerHTML = `Cost of t-shirt= ${t_shirt_cost}`
document.getElementById('number_2_1').innerHTML = `Cost of socks= ${socks_cost}`
document.getElementById('number_2_2').innerHTML = `Cost of socks= ${dinnerPlates_cost}`
document.getElementById('number_2_3').innerHTML = `The total cost is ${total_cost}`


let account_balance = 20000
let lunch_cost = 5000
let dinner_cost = 7000
let salary = 100000

document.getElementById('number_3').innerHTML = `Amount in account= ${account_balance}`
document.getElementById('number_3_1').innerHTML = `Cost of lunch= ${lunch_cost}`
document.getElementById('number_3_1_0').innerHTML = `Amount remaining in account= ${account_balance - lunch_cost}`
document.getElementById('number_3_2').innerHTML = `Cost of dinner= ${dinner_cost}`
document.getElementById('number_3_2_0').innerHTML = `Amount remaining in account= ${account_balance - dinner_cost}`
document.getElementById('number_3_3').innerHTML = `Received salary of ${salary}`
document.getElementById('number_3_3_0').innerHTML = `Amount remaining in account= ${((account_balance - lunch_cost) - dinner_cost) + salary}`

