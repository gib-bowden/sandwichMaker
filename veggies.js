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
				oldSandwich.removeVeggie(name);  
			} 
		});
	}

	return oldSandwich

})(Sandwich || {})

veggieNames = Sandwich.getVeggieNames(); 
selectedVeggies = Sandwich.getSelectedVeggies();