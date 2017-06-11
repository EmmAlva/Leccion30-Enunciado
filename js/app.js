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
var formAction = document.getElementsByClassName("form-action"),
    labelTitle = document.getElementsByClassName("label-title");

   formAction[0].addEventListener('click',function(){    
        labelTitle[0].classList.add("active");
        labelTitle[1].classList.remove("active");
        labelTitle[2].classList.remove("active");
        labelTitle[3].classList.remove("active");
        });
    formAction[1].addEventListener('click',function(){    
        labelTitle[1].classList.add("active");     labelTitle[0].classList.remove("active");
        labelTitle[2].classList.remove("active");
        labelTitle[3].classList.remove("active");

        });
     formAction[2].addEventListener('click',function(){    
        labelTitle[2].classList.add("active");
        labelTitle[1].classList.remove("active");
        labelTitle[0].classList.remove("active");
        labelTitle[3].classList.remove("active");
      });
     formAction[3].addEventListener('click',function(){    
        labelTitle[3].classList.add("active");
        labelTitle[1].classList.remove("active");
        labelTitle[2].classList.remove("active");
        labelTitle[0].classList.remove("active");
      });
      
  


