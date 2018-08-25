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
const SPENDING_THRESHOLD = 600;

var amount = 0;
var bank_balance = 1111.22;


function calculateTax(amount) {
	amount * TAX_RATE;
}

function stringFormat(str) {
	return "$" + str.toFixed(2);
}

function shop() {
	var purchasedPhone = 0;
	var purchasedAccess = 0;
	
	while(amount < bank_balance) {
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
		spent =  amount - bank_balance; 
		// spent = stringFormat(spent);
		// format amount to string
		amount = stringFormat(amount);
		
		bank_balance = stringFormat(bank_balance);
		console.log("You can no longer purchase any more items.")
		return `You spent: ${spent} and purchased: ${purchasedPhone} phones with ${purchasedAccess} accessories. Your remaining balance is ${bank_balance}`;
}

shop();
