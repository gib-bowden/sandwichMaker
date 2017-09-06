const populateBreads = () => {
	const breadContainer = document.getElementById("bread-container");
	for (let name of breadNames) {
		breadContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	breadContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addBread(e.target.value);
		} else {
			Sandwich.removeBread(e.target.value)
		}
	})
}

const populateMeats = () => {
	const meatContainer = document.getElementById("meat-container");
	for (let name of meatNames) {
		meatContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	meatContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addMeat(e.target.value);	
		} else {
			Sandwich.removeMeat(e.target.value)
		}
	})
}

const populateCondis = () => {
	const condiContainer = document.getElementById("condiment-container");
	for (let name of condiNames) {
		condiContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	condiContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addCondi(e.target.value);
		} else {
			Sandwich.removeCondi(e.target.value)
		}
	})
}

const populateCheeses = () => {
	const cheeseContainer = document.getElementById("cheese-container");
	for (let name of cheeseNames) {
		cheeseContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	cheeseContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addCheese(e.target.value);	
		} else {
			Sandwich.removeCheese(e.target.value)
		}
	})
}

const populateVeggies = () => {
	const veggieContainer = document.getElementById("veggie-container");
	for (let name of veggieNames) {
		veggieContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" autocomplete="off" value="${name}">${name}</label>`
	}
	veggieContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addVeggie(e.target.value);	
		} else {
			Sandwich.removeVeggie(e.target.value)
		}
	})
}

const calculateTotalCost = () => {
	let breadCost = Sandwich.getSelectedBreadCost();
	let cheeseCost = Sandwich.getSelectedCheeseCost();
	let condiCost = Sandwich.getSelectedCondiCost();
	let meatCost = Sandwich.getSelectedMeatCost();
	let veggieCost = Sandwich.getSelectedVeggieCost();
	let totalCost = (breadCost + cheeseCost + condiCost + meatCost + veggieCost)
	return totalCost;
}

const loadPage = () => {
	populateBreads();
	populateMeats();
	populateCondis();
	populateCheeses();
	populateVeggies();
}

const showSelected = () => {
	let totalCost = calculateTotalCost(); 
	document.getElementById("bread-selections").innerHTML = selectedBreads.join(', ');
	document.getElementById("meat-selections").innerHTML = selectedMeats.join(', '); 
	document.getElementById("cheese-selections").innerHTML = selectedCheeses.join(', '); 
	document.getElementById("veggie-selections").innerHTML = selectedVeggies.join(', '); 
	document.getElementById("condiment-selections").innerHTML = selectedCondis.join(', '); 
	document.getElementById("total-cost").innerHTML = totalCost;    
}

window.addEventListener("load", loadPage);
document.getElementById("order-container").addEventListener("change", showSelected);