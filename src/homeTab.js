export default function homePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const title = document.createElement("h1");
    const description = document.createElement("div");
    const hours = document.createElement("div");
    const address = document.createElement("div");
    title.textContent = "Let Him Cook";
    content.appendChild(title);
}

