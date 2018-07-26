let myHeading = document.querySelector("h2");
let usernameButton = document.querySelector("button");

function setUsername() {
    let myName = prompt("hello cunt pls enter name");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}! Welcome to the JellyBean Squad's official website!`;
}

let storedName = localStorage.getItem("name");
if (!storedName) {
    setUsername();
} else {
    myHeading.textContent = `Hello, ${storedName}! Welcome to the JellyBean Squad's official website!`;
}

usernameButton.onclick = function () {
    setUsername();
}


/*
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let imageSrc = myImage.getAttribute("src");
    if (imageSrc === "pics/squad-logo.png") {
        myImage.setAttribute("src", "pics/hidden-slut.png");
    } else {
        myImage.setAttribute("src", "pics/squad-logo.png");
    }
}
*/