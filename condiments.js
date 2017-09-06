var Sandwich = (function (oldSandwich){
	const condis = {"ketchup": 0.50, "mayo": 0.75}
	const selectedCondis = []; 

	oldSandwich.getCondiNames = function() {
		return Object.keys(condis);
	}

	oldSandwich.getSelectedCondis = function() {
		return selectedCondis;
	}

	oldSandwich.getCondiPrice = function(name) {
		return condis[name]
	}

	oldSandwich.addCondi = function(name){
		selectedCondis.push(name);
	}

	oldSandwich.removeCondi = function(name){
		selectedCondis.forEach((condi, i) => {
			if (condi === name) {
				selectedCondis.splice(i, 1);
				this.removeCondi(name);  
			} 
		});
	}

	oldSandwich.getSelectedCondiCost = function() {
		let cost; 
		if (selectedCondis.length !== 0) {
			const prices = selectedCondis.map((name) => {
				return condis[name];
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

condiNames = Sandwich.getCondiNames(); 
selectedCondis = Sandwich.getSelectedCondis();