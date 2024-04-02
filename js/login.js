

function AddCookie(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username == 'katie' && password == 'bootylicious') {
		document.cookie = 'login=katie';
		location.href = 'https://alignatorjr.github.io/lodge/katie'
	}
}

function AddCookie1(){
	document.cookie = 'login=katie';
}

function showPass(){
	var check = document.getElementById('check').checked
	if(check == true){
		document.getElementById('password').type = "text";
	}
	else{
		document.getElementById('password').type = "password";
	}
}
	function checkForCookie() {
		AddCookie()
			if (document.cookie == 'login=katie'){
        		return true;
        	}
			else{
				return false;
			}
        }

		function checkForStillCookie(){
			if (document.cookie == 'login=katie' || document.cookie == 'intro=intro; login=katie'){
				return true;
			}
			else{
				return false;
			}
		}

function addPics() {
	if(checkForStillCookie()){
		document.getElementById("img1").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/fireball.jpg";
		document.getElementById("img2").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/shampoo.jpg";
		document.getElementById("img3").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/focused.jpg";
		document.getElementById("img4").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/money.jpg";
		document.getElementById("img5").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/dinosaur.jpg";
		document.getElementById("img6").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/cutie.jpg";
		document.getElementById("img7").src = "https://raw.githubusercontent.com/alignatorjr/lodge/main/imgs/cutie/helmet.jpg";
	}
}
