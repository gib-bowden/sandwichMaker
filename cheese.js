var Sandwich = (function (oldSandwich){
	const cheeses = {"american": 0.50, "swiss": 0.75}
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
				oldSandwich.removeCheese(name);  
			} 
		});
	}

	return oldSandwich

})(Sandwich || {})

cheeseNames = Sandwich.getCheeseNames(); 
selectedCheeses = Sandwich.getSelectedCheeses();
