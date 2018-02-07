
document.querySelector("form.login-form").addEventListener("submit", function (evt){
	var username = evt.target.elements.username
	var password = evt.target.elements.password
	var valid = true;

	if(username.value.trim() == '') {
		valid = false;
		username.classList.add('error');
	} else {
		username.classList.remove('error');
	}

	if(password.value.trim().length < 8) {
		valid = false;
		password.classList.add('error');
	} else {
		password.classList.remove('error');
	}

	if(valid == false) { // if(!valid) {
		evt.preventDefault();
	}

});
