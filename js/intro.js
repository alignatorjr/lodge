var x = 0;
		function smokeMove(){
			var smoke = document.getElementsByClassName("smoke");
      		x=0;
			while (smoke[x].style.visibility!="hidden"){
      			x++;
      		}
      		var fromtop = parseInt(((document.getElementById("smokestack").style.top)).replace("vw", ""))
      		var newfromtop = fromtop - 2;
      		document.getElementById("smokestack").style.top = newfromtop + "vw";
      		smoke[x].style.visibility = "visible";
      		if(x>=8){
      			var smokestack = document.getElementById("smokestack");
      			var house = document.getElementById("house");
      			var intro = document.getElementById("intro");
      			const allintro = document.getElementById("allintrostuff");
      			animationListener(allintrostuff);
      			smokestack.classList.add("introanimation");
      			house.classList.add("houseintroanimation");
      			intro.classList.add("backgroundanimation");
      			clearTimeout(myVar);
      		}
      		x++;
		}

		function animationListener(objlist){
			const animated = document.getElementById("house");
			animated.addEventListener('animationend', () => {
				document.getElementById("house").remove();
  				document.getElementById("smokestack").remove();
  				document.getElementById("intro").remove();
			});
		}
