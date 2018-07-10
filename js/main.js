/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)

/* Create let = prompts to create text inputs from the user to gather data on sandwhich meats, toppings, condiments, and bread */

let breadOrder = prompt('What kind of bread would you like? (White, wheat, or flat)', 'wheat');

let meatOrder = prompt('What kind of meat would you like? (Sepeate meat(s) with a comma if more than one meat)');

let toppingOrder = prompt('What kind of toppings would you like? (Seperate toppings with a comma if more than one');

let condimentOrder = prompt('What kind of condiments would you like? (Seperate condiments with a comma if more than one');

// Step Two ////////////////////////////////////////////////////////////

/* Create a let = prompt to determine a starting cost/price for each input the user submitted in the let = prompts above */

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

/* Create array's for the Meat, toppings, and condiment inputs that will indicate quantity for let prices statement above */

let meatArray = meatOrder.split(','); 
let toppingArray = toppingOrder.split(',');
let condimentArray = condimentOrder.split(',');

/* Using the meat, condiment, and topping array's to indicate cost to user using length (fields) multipled by the price let statements */

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

/* Using a let statment to calculate subtotal based on the cost for meat, cost of toppings, cost and condiments in addition to fixed sandwich cost */

let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

/* Using a let statment to calculate order tax by multiplying the subtotal above and the WA state tax */

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

/* Using a let statment to calculate tax by summing the subtotal and order tax to equal the totalprice of the order */

let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////

/* Create a template literal using expression tags from the let prompts above that will complete the receipt output */

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Toppings: ${toppingOrder}</p>
    <p>Condiments: ${condimentOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
