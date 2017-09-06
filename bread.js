var Sandwich = (function (oldSandwich){
	const bread = {"white": 0.50, "wheat": 0.75}
	const selectedBreads = []; 

	oldSandwich.getBreadNames = function() {
		return Object.keys(bread);
	}

	oldSandwich.getSelectedBreads = function() {
		return selectedBreads;
	}

	oldSandwich.getBreadPrice = function(name) {
		return bread[name]
	}

	oldSandwich.addBread = function(name){
		selectedBreads.push(name);
	}

	oldSandwich.removeBread = function(name){
		selectedBreads.forEach((bread, i) => {
			if (bread === name) {
				selectedBreads.splice(i, 1);
				oldSandwich.removeBread(name);  
			} 
		});
	}

	return oldSandwich

})(Sandwich || {})

breadNames = Sandwich.getBreadNames(); 
selectedBreads = Sandwich.getSelectedBreads();
