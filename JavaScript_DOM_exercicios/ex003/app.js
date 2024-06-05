const links = ["home", 'produtos', 'contato'];
const menu = document.getElementById("nav_bar");

menu.style.display = "flex";
menu.style.justifyContent = "center";

for (let i = 0; i < links.length; i++){
    const link = document.createElement("a");
    link.innerHTML = links[i];
    link.href = "#" + links[i];
    link.classList.add("nav-link");
    link.style.marginLeft = "50px";
    link.style.textDecoration = "none";
    link.style.fontSize = "24px";
    link.style.fontFamily = "Arial";
    link.style.color = "green"

    menu.appendChild(link);
}
