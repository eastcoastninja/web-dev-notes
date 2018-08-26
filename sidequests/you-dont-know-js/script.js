// version 2
const TAX_RATE = 0.07; 
const PHONE_PRICE = 99.99;
const ACCESSORIES_PRICE = 10;
const SPENDING_THRESHOLD = 200;
// const input = document.getElementById("userinput");

let amount = 0;
let bank_balance = 0;
let remainingBalance = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function stringFormat(num) {
	return "$" + num.toFixed(2);
}

function shop() {
	bank_balance = prompt("How much are we spending today?");
	let purchasedPhone = 0;
	let purchasedAccess = 0;
	
	while(amount < bank_balance && amount < SPENDING_THRESHOLD) {
			// buy new phone
			amount = amount + PHONE_PRICE;
			purchasedPhone++;
			
			// buy accessories
			if (amount < SPENDING_THRESHOLD) {
				amount = amount + ACCESSORIES_PRICE
				purchasedAccess++;
			}
	}
		// pay the govt taxes
		amount = amount + calculateTax(amount);
		if(amount > bank_balance) {
			// calculates the amount needed to buy
			remainingBalance = amount - bank_balance;
			remainingBalance = stringFormat(remainingBalance);
			console.log(`You can not afford this purchase ${purchasedPhone} phones with ${purchasedAccess} accessories. You need an additional ${remainingBalance} to buy.`)
		} else {
			// store current balance
			remainingBalance = bank_balance - amount;
			
			// format number values to strings
			amount = stringFormat(amount);
			remainingBalance = stringFormat(remainingBalance)
			console.log( `You spent: ${amount} and purchased: ${purchasedPhone} phones with ${purchasedAccess} accessories. Your remaining balance is ${remainingBalance}`);
		}
}

shop();

// Adds text input by user 
// function sendInputAfterKeypress () {
// 	bank_account = input.value="";
// 	console.log("bugs!");
// }

// input.addEventListener("keypress", sendInputAfterKeypress);



// // version 1
// const TAX_RATE = 0.07; 
// const PHONE_PRICE = 99.99;
// const ACCESSORIES_PRICE = 10;
// const SPENDING_THRESHOLD = 600;

// let amount = 0;
// let bank_balance = 1111.22;

// function shop() {
// 	let purchasedMerch = 0;
// 	let costPerPhone = calculateTax();
// 	while(bank_balance > SPENDING_THRESHOLD) {
// 			total = costPerPhone + ACCESSORIES_PRICE;
// 			bank_balance = bank_balance - total;
// 			purchasedMerch++;
// 	}
// 	spent =  1000 - bank_balance;
// 	spent = "$" + spent.toFixed(2); 
// 	bank_balance = "$" + bank_balance.toFixed(2); 
// 	console.log("Not enough funds");
// 	return `You spent ${spent} and purchased ${purchasedMerch} phones with accessories. Your total bank account balance is ${bank_balance}`;
// }

// function calculateTax() {
// 	total = PHONE_PRICE + (PHONE_PRICE * TAX_RATE);
// 	return total.toFixed(2);
// }

// shop();