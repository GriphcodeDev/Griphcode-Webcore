const ButtonPress = document.getElementById("press");
const Goofy = document.getElementById("surprise");

const Pressables = document.querySelector("img");

function Clicker(Pressables) {
        
}


ButtonPress.addEventListener("click", () => {
        Goofy.innerHTML = Math.floor(Math.random() * 100);
        Goofy.style.color = "green";
        Goofy.style.border = "outset";
        Goofy.style.textAlign = "center";


        



});

