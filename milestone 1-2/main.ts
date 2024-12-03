const hoverSkills = document.getElementById("hover-skills") as HTMLButtonElement;

const skill = document.getElementById("box5") as HTMLElement;

hoverSkills.addEventListener ("click" , () => {
     if (skill.style.display === "none") {
        skill.style.display = "block"
     }
     else {
        skill.style.display = "none"
     }
});