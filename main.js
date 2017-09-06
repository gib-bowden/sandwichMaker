const populateBreads = () => {
	const breadContainer = document.getElementById("bread-container");
	for (let name of breadNames) {
		breadContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	breadContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addBread(e.target.value);
			console.log(selectedBreads)	
		} else {
			Sandwich.removeBread(e.target.value)
			console.log(selectedBreads)
		}
	})
}

populateBreads();

const populateMeats = () => {
	const meatContainer = document.getElementById("meat-container");
	for (let name of meatNames) {
		meatContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	meatContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addMeat(e.target.value);
			console.log(selectedMeats)	
		} else {
			Sandwich.removeMeat(e.target.value)
			console.log(selectedMeats)
		}
	})
}

populateMeats();


const populateCondis = () => {
	const condiContainer = document.getElementById("condiment-container");
	for (let name of condiNames) {
		condiContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	condiContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addCondi(e.target.value);
			console.log(selectedCondis)	
		} else {
			Sandwich.removeCondi(e.target.value)
			console.log(selectedCondis)
		}
	})
}

populateCondis();


const populateCheeses = () => {
	const cheeseContainer = document.getElementById("cheese-container");
	for (let name of cheeseNames) {
		cheeseContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	cheeseContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addCheese(e.target.value);
			console.log(selectedCheeses)	
		} else {
			Sandwich.removeCheese(e.target.value)
			console.log(selectedCheeses)
		}
	})
}

populateCheeses();


const populateVeggies = () => {
	const veggieContainer = document.getElementById("veggie-container");
	for (let name of veggieNames) {
		veggieContainer.innerHTML += `<label class="checkbox-inline"><input type="checkbox" value="${name}">${name}</label>`
	}
	veggieContainer.addEventListener("change", (e) => {
		if (e.target.checked === true) {
			Sandwich.addVeggie(e.target.value);
			console.log(selectedVeggies)	
		} else {
			Sandwich.removeVeggie(e.target.value)
			console.log(selectedVeggies)
		}
	})
}

populateVeggies();



