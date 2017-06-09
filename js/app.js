/*
 * Archivo principal de JS
 */
 var lastScrollTop = 0;
 window.addEventListener("scroll",function(){
 	var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
 	if(currentScroll > lastScrollTop){
 		document.getElementsByTagName("header")[0].classList.remove("nav-top");
 		document.getElementsByTagName("header")[0].classList.add("nav-scroll");
 	}
 	if (currentScroll < 40){
     document.getElementsByTagName("header")[0].classList.add("nav-top");
     document.getElementsByTagName("header")[0].classList.remove("nav-scroll");
   }
   if(currentScroll > 41 && currentScroll < 668){
   	document.getElementsByClassName("link-hover")[0].classList.remove("active-link");
   	document.getElementsByClassName("link-hover")[1].classList.remove("active-link");
   	document.getElementsByClassName("link-hover")[2].classList.remove("active-link");
   }
   if (currentScroll > 669 && currentScroll < 1490){
     document.getElementsByClassName("link-hover")[0].classList.add("active-link");
     document.getElementsByClassName("link-hover")[1].classList.remove("active-link");
     document.getElementsByClassName("link-hover")[2].classList.remove("active-link");
   }
   if(currentScroll > 1491 && currentScroll < 2063){
   	document.getElementsByClassName("link-hover")[0].classList.remove("active-link");
   	document.getElementsByClassName("link-hover")[1].classList.add("active-link");
   	document.getElementsByClassName("link-hover")[2].classList.remove("active-link");
   }
   if(currentScroll > 2044){
   	document.getElementsByClassName("link-hover")[0].classList.remove("active-link");
   	document.getElementsByClassName("link-hover")[1].classList.remove("active-link");
   	document.getElementsByClassName("link-hover")[2].classList.add("active-link");
   }
  

 	console.log(currentScroll);

 }, false);


 /*form*/
 var inputTitle = document.getElementById("input-title"),
	labTitle = document.getElementById("title-lab"),
	inputText = document.getElementById("input-texta"),
	labText = document.getElementById("texta-lab");
