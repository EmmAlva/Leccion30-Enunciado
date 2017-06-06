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
   if (currentScroll > 669 && currentScroll < 1565){
     document.getElementsByClassName("link-hover")[0].classList.add("active-link");
     document.getElementsByClassName("link-hover")[1].classList.remove("active-link");
     document.getElementsByClassName("link-hover")[2].classList.remove("active-link");
   }
  

 	console.log(currentScroll);

 }, false);