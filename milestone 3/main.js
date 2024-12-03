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
    var getResume = "<h2>Resume</h2>\n\n       <h3>Personal Information</h3>\n       <p><b>Name :</b> ".concat(name, "</p>\n       <p><b>Email :</b> ").concat(email, "</p>\n       <p><b>Phone :</b> ").concat(phone, "</p>\n\n       <h3>Education</h3>\n       <p>").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p>").concat(experience, "</p>\n       </ul>\n\n       <h3>Skills</h3>\n       <p>").concat(skills, "</p>");
    //Display Generated Resume
    if (myResume) {
        myResume.innerHTML = getResume;
    }
    else {
        console.error("Your Resume Element is Missing.");
    }
});
