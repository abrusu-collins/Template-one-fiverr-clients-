const ham = document.querySelector(".ham")
const exit = document.querySelector(".exit")
const navlink1= document.querySelector(".navlink1")
const navlink2= document.querySelector(".navlink2")
const navlink3= document.querySelector(".navlink3")
const navlink4= document.querySelector(".navlink4")
const navbar = document.querySelectorAll(".navbar")


ham.addEventListener("click", function(e){
e.preventDefault();

navlink1.style.display="block";
navlink2.style.display="block";
navlink3.style.display="block";
navlink4.style.display="block";
ham.className="exit";
navbar.style.paddingBottom="13rem"










});



exit.addEventListener("click", function(s){
    s.preventDefault();
    
        navlink1.style.display="none";
        navlink2.style.display="none";
        navlink3.style.display="none";
        navlink4.style.display="none";
        exit.className="ham";
        navbar.style.paddingBottom="5rem"
    
    
    
    
    
    
    
    });