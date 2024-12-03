//import  form and display area
var form = document.getElementById("resume");
var myResume = document.getElementById("display-resume");
// Get UserGenerate Resume Form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Collect userInformation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //Generate Dynamic Resume
    var getResume = "<h2><b> Editable Resume</b></h2>\n\n       <h3>Personal Information</h3>\n       <p><b>Name :</b><div contenteditable = \"true\">".concat(name, "</div></p>\n       <p><b>Email :</b><div contenteditable = \"true\">").concat(email, "</div></p>\n       <p><b>Phone :</b><div contenteditable = \"true\">").concat(phone, "</div></p>\n\n       <h3>Education</h3>\n       <p contenteditable = \"true\">").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p contenteditable = \"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p contenteditable = \"true\">").concat(skills, "</p>");
    //Display Generated Resume
    if (myResume) {
        myResume.innerHTML = getResume;
    }
    else {
        console.error("Your Resume Element is Missing.");
    }
});
