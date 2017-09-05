function makeAdder(x) {
	function add(y) {
		return x + y 
	}
	return add; 
}

var plusOne = makeAdder(1);

console.log(plusOne(20));


function User(){
	var username, password;

	doLogin = (user, pwd) => {
		username = user;
		password = pwd;
		console.log(username, password)
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI; 
}

let fred = User(); 


fred.login("fred","Password123"); 