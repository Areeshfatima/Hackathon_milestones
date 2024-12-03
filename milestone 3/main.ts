//import  form and display area
const form = document.getElementById ("resume") as HTMLFormElement;

const myResume = document.getElementById ("display-resume") as HTMLDivElement;

// Get UserGenerate Resume Form

form.addEventListener ("submit" , (event : Event) => {
     event.preventDefault ();

     //Collect userInformation

     const name = (document.getElementById ("name") as HTMLInputElement).value;
     const email = (document.getElementById ("email") as HTMLInputElement).value;
     const phone = (document.getElementById ("phone") as HTMLInputElement).value;
     const education = (document.getElementById ("education") as HTMLTextAreaElement).value;
     const experience = (document.getElementById ("experience") as HTMLTextAreaElement).value;
     const skills = (document.getElementById ("skills") as HTMLTextAreaElement).value;

     //Generate Dynamic Resume

     const getResume = 
     `<h2>Resume</h2>

       <h3>Personal Information</h3>
       <p><b>Name :</b> ${name}</p>
       <p><b>Email :</b> ${email}</p>
       <p><b>Phone :</b> ${phone}</p>

       <h3>Education</h3>
       <p>${education}</p>

       <h3>Experience</h3>
       <p>${experience}</p>
       </ul>

       <h3>Skills</h3>
       <p>${skills}</p>`;

    //Display Generated Resume

    if(myResume) {
        myResume.innerHTML = getResume;
    }
    else {
        console.error("Your Resume Element is Missing.");
    }


});