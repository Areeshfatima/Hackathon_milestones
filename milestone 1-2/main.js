"use strict";
const hoverSkills = document.getElementById("hover-skills");
const skill = document.getElementById("box5");
hoverSkills.addEventListener("click", () => {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
