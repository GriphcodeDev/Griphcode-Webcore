const ButtonPress = document.getElementById("press");
const Goofy = document.getElementById("surprise");
const Pressables = document.getElementById("tux");
const Pwd = document.getElementById("password");
const BookPage = document.getElementById("changePage");

const VisiblePage = document.getElementById("visibiltyOfPage");
const ShowText = document.getElementById("showText");
const ShowLink = document.getElementById("showLink");




 Pressables.addEventListener("click", () => {

   Pressables.innerHTML = alert("This is the linux tux!");
   
   if (prompt() === "iwasfound") {
       
        BookPage.style.color = "green";
        BookPage.innerHTML = ShowText.innerHTML = "<h3>Right password</h3>";
        
           
   }
   else {
        alert("Wrong Password");
        alert("Check the page for hints");
   }

});


ButtonPress.addEventListener("click", () => {
        Goofy.innerHTML = Math.floor(Math.random() * 100);
        Goofy.style.color = "green";
        Goofy.style.border = "outset";
        Goofy.style.textAlign = "center";
        Goofy.style.backgroundColor = "black";

});

