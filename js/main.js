goDown = document.querySelector(".godown");
toTop = document.querySelector(".toTop");
ownBrand = document.querySelector(".ownbrand");
about = document.querySelector(".about");

toTop.addEventListener("click", function(){
    window.scroll({ 
        top: 0, // could be negative value
        left: 0, 
        behavior: 'smooth' 
    });
});

goDown.addEventListener("click", function(){
    about.scrollIntoView({
        behavior: "smooth"
    });
});