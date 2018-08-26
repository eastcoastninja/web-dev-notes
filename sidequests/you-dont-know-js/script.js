// version 1
// const TAX_RATE = 0.07; 
// const PHONE_PRICE = 99.99;
// const ACCESSORIES_PRICE = 10;
// const SPENDING_THRESHOLD = 600;

// var amount = 0;
// var bank_balance = 1111.22;

// function shop() {
// 	var purchasedMerch = 0;
// 	var costPerPhone = calculateTax();
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

const TAX_RATE = 0.07; 
const PHONE_PRICE = 99.99;
const ACCESSORIES_PRICE = 10;
const SPENDING_THRESHOLD = 700;

var amount = 0;
var bank_balance = 0;
var remainingBalance = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function stringFormat(num) {
	return "$" + num.toFixed(2);
}

function shop() {
	bank_balance = prompt("How much are we spending today?");
	var purchasedPhone = 0;
	var purchasedAccess = 0;
	
	while(amount <  bank_balance && amount < SPENDING_THRESHOLD) {
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
			console.log(`You can not afford this purchase. You need an additional ${remainingBalance} to buy.`)
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
