//import  form and display area
const form = document.getElementById ("resume") as HTMLFormElement;

const myResume = document.getElementById ("display-resume") as HTMLDivElement;

const shareableResumeLink = document.getElementById ("shareableResume-container") as HTMLDivElement;

const shareableResumeContainer = document.getElementById ("shareable-link") as HTMLAnchorElement;

const buttonDownloadPdf = document.getElementById ("Download-pdf") as HTMLAnchorElement;

// For submmission form

form.addEventListener ("submit" , (event : Event) => {
     event.preventDefault ();

     //Collect userInformation
     const username = (document.getElementById("username") as HTMLInputElement).value;
     const name = (document.getElementById ("name") as HTMLInputElement).value;
     const email = (document.getElementById ("email") as HTMLInputElement).value;
     const phone = (document.getElementById ("phone") as HTMLInputElement).value;
     const education = (document.getElementById ("education") as HTMLTextAreaElement).value;
     const experience = (document.getElementById ("experience") as HTMLTextAreaElement).value;
     const skills = (document.getElementById ("skills") as HTMLTextAreaElement).value;

     //save in local storage with usernamme

     const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
     };

     localStorage.setItem(username , JSON.stringify(resumeData));

     //Generate Dynamic Resume

     const getResume = 
     `<h2><b> Editable Resume</b></h2>

       <h3>Personal Information</h3>
       <p><b>Name :</b><div contenteditable = "true">${name}</div></p>
       <p><b>Email :</b><div contenteditable = "true">${email}</div></p>
       <p><b>Phone :</b><div contenteditable = "true">${phone}</div></p>

       <h3>Education</h3>
       <p contenteditable = "true">${education}</p>

       <h3>Experience</h3>
       <p contenteditable = "true">${experience}</p>

       <h3>Skills</h3>
       <p contenteditable = "true">${skills}</p>`;

    //Display Generated Resume

    myResume.innerHTML = getResume;
   
    //Generate shareable lonk with the username only

    const shareableURL = `${window.location.origin}? username = ${encodeURIComponent(username)}`;

    //for display shareabl link
     shareableResumeLink.style.display = "block";
    shareableResumeContainer.href = shareableURL;
    shareableResumeContainer.textContent = shareableURL;

    });

    //for PDF Download

    buttonDownloadPdf.addEventListener("click" , () => {
        window.print();
    });

    //Prefill the form based on the username in URL

    window.addEventListener("DOMContentLoaded" , () => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get("username");

        if (username) {
               //Autofill the form if data found in localstorage
              const savedResumeData = localStorage.getItem (username);

            if (savedResumeData) {

        const resumeData = JSON.parse(savedResumeData);

        (document.getElementById ("username") as HTMLInputElement).value = username;
        (document.getElementById ("name") as HTMLInputElement).value = resumeData.name;
        (document.getElementById ("email") as HTMLInputElement).value = resumeData.email;
        (document.getElementById ("phone") as HTMLInputElement).value = resumeData.phone;
        (document.getElementById ("education") as HTMLTextAreaElement).value = resumeData.education;
        (document.getElementById ("experience") as HTMLTextAreaElement).value = resumeData.experience;
        (document.getElementById ("skills") as HTMLTextAreaElement).value = resumeData.skills;
       }
     }
 });

