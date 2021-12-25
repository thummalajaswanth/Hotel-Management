function validation(){
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var number = document.getElementById('number');
	var phone = document.getElementById('phone');
	var street = document.getElementById('street');
	var city = document.getElementById('city');
	var post = document.getElementById('post')
	var country = document.getElementById('country');
	var arrival = document.getElementById('arrival');
	var departure = document.getElementById('departure');
	// var comment = document.getElementById('comment')

	if(name.value.trim() === ""){
		alert('Please Enter Your name');
		return false;
	}
	 else if (email.value == "") {
        alert('Please Enter Your Email Address');
        return false;
    }
    else if (phone.value.trim() == "" || phone.value.trim().length < 10) {
        alert('Please Enter Your Valid Mobile Number');
        return false;
    }
    else if (street.value == "") {
        alert('Please Enter Your Street');
        return false;
    }
    else if (number.value == "") {
        alert('Please Enter Your Number');
        return false;
    }
    else if (city.value == "") {
        alert('Please Enter Your city');
        return false;
    }
    else if (post.value == "") {
        alert('Please Enter Your Post Code');
        return false;
    }
    else if (country.value == "") {
        alert('Please Enter Your Country');
        return false;
    }
    else if (arrival.value == "") {
        alert('Please Enter Your Arrival');
        return false;
    }
    else if (departure.value == "") {
        alert('Please Enter Your Departure');
        return false;
    }
    else {
        return true;
    }
    
}