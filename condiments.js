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
				oldSandwich.removeCondi(name);  
			} 
		});
	}

	return oldSandwich

})(Sandwich || {})

condiNames = Sandwich.getCondiNames(); 
selectedCondis = Sandwich.getSelectedCondis();