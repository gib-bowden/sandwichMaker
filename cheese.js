var Sandwich = (function (oldSandwich){
	const cheeses = {"american": 0.10, "swiss": 0.15}
	const selectedCheeses = []; 

	oldSandwich.getCheeseNames = function() {
		return Object.keys(cheeses);
	}

	oldSandwich.getSelectedCheeses = function() {
		return selectedCheeses;
	}

	oldSandwich.getCheesePrice = function(name) {
		return cheeses[name]
	}

	oldSandwich.addCheese = function(name){
		selectedCheeses.push(name);
	}

	oldSandwich.removeCheese = function(name){
		selectedCheeses.forEach((cheese, i) => {
			if (cheese === name) {
				selectedCheeses.splice(i, 1);
				this.removeCheese(name);  
			} 
		});
	}

	oldSandwich.getSelectedCheeseCost = function() {
		let cost; 
		if (selectedCheeses.length !== 0) {
			const prices = selectedCheeses.map((name) => {
				return cheeses[name];
			})
			cost = prices.reduce((sum, price) => {
				return sum + price
			})
		} else {
			cost = 0; 
		}
		return cost; 
	}

	return oldSandwich

})(Sandwich || {})

cheeseNames = Sandwich.getCheeseNames(); 
selectedCheeses = Sandwich.getSelectedCheeses();
