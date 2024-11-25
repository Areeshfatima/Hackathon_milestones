var hoverButton = document.getElementById("hover-skills");
var skills = document.getElementById("box5");
hoverButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
