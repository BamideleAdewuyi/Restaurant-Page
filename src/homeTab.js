export default function homePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const title = document.createElement("h1");
    title.textContent = "Let Him Cook";
    content.appendChild(title);
}

