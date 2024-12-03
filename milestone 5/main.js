//import  form and display area
var form = document.getElementById("resume");
var myResume = document.getElementById("display-resume");
var shareableResumeLink = document.getElementById("shareableResume-container");
var shareableResumeContainer = document.getElementById("shareable-link");
var buttonDownloadPdf = document.getElementById("Download-pdf");
// For submmission form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Collect userInformation
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //save in local storage with usernamme
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //Generate Dynamic Resume
    var getResume = "<h2><b> Editable Resume</b></h2>\n\n       <h3>Personal Information</h3>\n       <p><b>Name :</b><div contenteditable = \"true\">".concat(name, "</div></p>\n       <p><b>Email :</b><div contenteditable = \"true\">").concat(email, "</div></p>\n       <p><b>Phone :</b><div contenteditable = \"true\">").concat(phone, "</div></p>\n\n       <h3>Education</h3>\n       <p contenteditable = \"true\">").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p contenteditable = \"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p contenteditable = \"true\">").concat(skills, "</p>");
    //Display Generated Resume
    myResume.innerHTML = getResume;
    //Generate shareable lonk with the username only
    var shareableURL = "".concat(window.location.origin, "? username = ").concat(encodeURIComponent(username));
    //for display shareabl link
    shareableResumeLink.style.display = "block";
    shareableResumeContainer.href = shareableURL;
    shareableResumeContainer.textContent = shareableURL;
});
//for PDF Download
buttonDownloadPdf.addEventListener("click", function () {
    window.print();
});
//Prefill the form based on the username in URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        //Autofill the form if data found in localstorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value = username;
            document.getElementById("name").value = resumeData.name;
            document.getElementById("email").value = resumeData.email;
            document.getElementById("phone").value = resumeData.phone;
            document.getElementById("education").value = resumeData.education;
            document.getElementById("experience").value = resumeData.experience;
            document.getElementById("skills").value = resumeData.skills;
        }
    }
});
