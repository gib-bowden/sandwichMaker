var Sandwich = (function (oldSandwich){
	const veggies = {"lettuce": 0.50, "tomato": 0.75}
	const selectedVeggies = []; 

	oldSandwich.getVeggieNames = function() {
		return Object.keys(veggies);
	}

	oldSandwich.getSelectedVeggies = function() {
		return selectedVeggies;
	}

	oldSandwich.getVeggiePrice = function(name) {
		return veggies[name]
	}

	oldSandwich.addVeggie = function(name){
		selectedVeggies.push(name);
	}

	oldSandwich.removeVeggie = function(name){
		selectedVeggies.forEach((veggie, i) => {
			if (veggie === name) {
				selectedVeggies.splice(i, 1);
				this.removeVeggie(name);  
			} 
		});
	}

	oldSandwich.getSelectedVeggieCost = function() {
		let cost; 
		if (selectedVeggies.length !== 0) {
			const prices = selectedVeggies.map((name) => {
				return veggies[name];
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

veggieNames = Sandwich.getVeggieNames(); 
selectedVeggies = Sandwich.getSelectedVeggies();