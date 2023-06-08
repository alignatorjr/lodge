var x = 0;
		function smokeMove(){
			var smoke = document.getElementsByClassName("smoke");
			var hasCookie = checkForCookie('intro');
			if (hasCookie == true){
			    document.getElementById("house").remove();
              	document.getElementById("smokestack").remove();
              	document.getElementById("intro").remove();
              	clearTimeout(myVar);
			    return;
			}
			else{
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
                    document.cookie='intro=intro;expires=Wed 18 Dec 2026 12:00:00 GMT';
                }
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

		function checkForCookie(cname) {
        	if (document.cookie == 'intro=intro'){
        		return false;
        	}
        	else {
        		return true;
        	}
        }

