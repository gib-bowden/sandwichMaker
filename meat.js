var Sandwich = (function (oldSandwich){
	const meats = {"turkey": 0.50, "ham": 0.75}
	const selectedMeats = []; 

	oldSandwich.getMeatNames = function() {
		return Object.keys(meats);
	}

	oldSandwich.getSelectedMeats = function() {
		return selectedMeats;
	}

	oldSandwich.getMeatPrice = function(name) {
		return Meat[name]
	}

	oldSandwich.addMeat = function(name){
		selectedMeats.push(name);
	}

	oldSandwich.removeMeat = function(name){
		selectedMeats.forEach((meat, i) => {
			if (meat === name) {
				selectedMeats.splice(i, 1);
				oldSandwich.removeMeat(name);  
			} 
		});
	}

	return oldSandwich

})(Sandwich || {})

meatNames = Sandwich.getMeatNames(); 
selectedMeats = Sandwich.getSelectedMeats();