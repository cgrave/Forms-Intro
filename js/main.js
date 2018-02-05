
document.querySelector("form.login-form").addEventListener("submit", function (evt){
	var username = evt.target.elements.username
	var password = evt.target.elements.password

// trim() removes whitespace on left and right
	if(username.value.trim() == ""){
		evt.preventDefault();
	}
	if(password.value.trim().length){

	}
	evt.preventDefault();
})

