const clickReset = document.getElementById("reset");
const clicker = document.getElementById("clicker");
let contador = 0;

document.getElementById("clicker").addEventListener("click", function(){
    contador++;
    document.getElementById("numero").textContent = contador;
});

document.getElementById("reset").addEventListener("click", function(){
    contador = 0;
    document.getElementById("numero").textContent = contador;
   
})



clickReset.addEventListener("click", function() {
    
    clickReset.style.boxShadow = "0 0 #530000";
    clickReset.style.transform = "translateX(0) translateY(0)";

  setTimeout(() => {
    clickReset.style.boxShadow = "-6px 6px #530000";
    clickReset.style.transform = "translateX(6px) translateY(-6px)";
    }, 100);
});

clicker.addEventListener("click", function() {
    
    clicker.style.boxShadow = "0 0 #11563a";
    clicker.style.transform = "translateX(0) translateY(0)";

  setTimeout(() => {
    clicker.style.boxShadow = "-6px 6px #11563a";
    clicker.style.transform = "translateX(6px) translateY(-6px)";
    }, 100);
});