var Sandwich = (function (oldSandwich){
	const bread = {"white": 0.50, "wheat": 0.75}
	const selectedBreads = []; 

	oldSandwich.getBreadNames = function() {
		return Object.keys(bread);
	}

	oldSandwich.getSelectedBreads = function() {
		return selectedBreads;
	}

	oldSandwich.addBread = function(name){
		selectedBreads.push(name);
	}

	oldSandwich.removeBread = function(name){
		selectedBreads.forEach((bread, i) => {
			if (bread === name) {
				selectedBreads.splice(i, 1);
				this.removeBread(name);  
			} 
		});
	}

	oldSandwich.getSelectedBreadCost = function() {
		let cost; 
		if (selectedBreads.length !== 0) {
			const prices = selectedBreads.map((name) => {
				return bread[name];
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

breadNames = Sandwich.getBreadNames(); 
selectedBreads = Sandwich.getSelectedBreads();

