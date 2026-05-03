let target = document.querySelectorAll("strong");

function highlight() {
    target.forEach((element) => {
        element.style.color = "green";
    });
}

function return_normal() {
    target.forEach((element) => {
        element.style.color = "black";
    });
}