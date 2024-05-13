const nav_button = document.getElementById("nav-bar");
const nav = document.querySelector("nav");

nav_button.onclick = function(){
    if(nav.classList.contains("closed")){
        nav.classList.remove("closed");
    }else{
        nav.classList.add("closed");
    }
}