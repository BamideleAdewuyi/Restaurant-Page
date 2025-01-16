import homePage from "./homeTab";
import menuPage from "./menuTab";
import "./style.css";
homePage();
const homeButton = document.getElementById("home");
homeButton.addEventListener("click", homePage());