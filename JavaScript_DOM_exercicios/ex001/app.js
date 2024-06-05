document.addEventListener("DOMContentLoaded", function() {
    let itenslista = document.getElementsByTagName("li");
    for(let i = 0; i < itenslista.length; i++){
        console.log(itenslista[i].textContent);
    }
});
