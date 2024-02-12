
// to choose template

const selectTemplate = document.getElementById("select");
const twoColumnsTemp = document.getElementById("twoColumnTemplate");
const minimalistic = document.getElementById("minimalisticTemplate");

selectTemplate.addEventListener("change" , e => {
    // console.log(e.target.value);
    if(e.target.value === "Two-columns"){
        twoColumnsTemp.style.display = "block";
        minimalistic.style.display = "none";
    }else if(e.target.value === "Minimalistic"){
        minimalistic.style.display = "block";
        twoColumnsTemp.style.display = "none";
    }
})

// to select the header color

const headerColor = document.getElementById("headerColorInput");
const twoTempHeader = document.getElementById("header");
const minimalisticHeader = document.getElementById("header2");

headerColor.addEventListener("input" , e => {
    // console.log(e.value);
    twoTempHeader.style.backgroundColor = e.target.value;
    minimalisticHeader.style.backgroundColor = e.target.value;
})


// to choose the header text color

const headerTextColor = document.getElementById("headerTextColorInput");
const headerText1 = document.getElementById("info");
const headerText2 = document.getElementById("info2");

headerTextColor.addEventListener("input" , e => {
    // console.log(e.value);
    headerText1.style.color = e.target.value;
    headerText2.style.color = e.target.value;
    document.getElementById("contactSection2").style.color = e.target.value;
})


// to append all the personal details inputs in templates

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const addressInput = document.getElementById("addressInput");

const nameInTemplates = document.getElementById("name");
const email = document.getElementById("mail");
const phone = document.getElementById("phone");
const address = document.getElementById("location");

nameInput.addEventListener("input" , () => {
    nameInTemplates.innerText = nameInput.value;
    document.getElementById("nameMinimalistic").innerText = nameInput.value;
})
emailInput.addEventListener("input" , () => {
    email.innerText = emailInput.value;
    document.getElementById("mailMinimalistic").innerText = emailInput.value;
})
phoneInput.addEventListener("input" , () => {
    phone.innerText = phoneInput.value;
    document.getElementById("phoneMinimalistic").innerText = phoneInput.value;
})
addressInput.addEventListener("input" , () => {
    address.innerText = addressInput.value;
    document.getElementById("locationMinimalistic").innerText = addressInput.value;
})

// to add skills
let skillsInput = document.getElementById("skillsInput");
skillsInput.addEventListener("input" , () => {
   
    let inputValue = skillsInput.value;
    let words = inputValue.split(',');

    let skillsOutput = document.getElementById("skillsOutput");

    // Clear previous content
    skillsOutput.innerHTML = '';

    // Append each word to outputDiv
    words.forEach(function(word) {
      let span = document.createElement("span");
      span.textContent = word.trim(); // Remove leading/trailing spaces

      skillsOutput.appendChild(span);
      skillsOutput.appendChild(document.createTextNode(' ')); // Add space between words
    });
  })
skillsInput.addEventListener("input" , () => {
   
    let inputValue = skillsInput.value;
    let words = inputValue.split(',');

    let skillsOutput2 = document.getElementById("skillsOutput2");

    // Clear previous content
    skillsOutput2.innerHTML = '';

    // Append each word to outputDiv
    words.forEach(function(word) {
      let span = document.createElement("span");
      span.textContent = word.trim(); // Remove leading/trailing spaces

      skillsOutput2.appendChild(span);
      skillsOutput2.appendChild(document.createTextNode(' ')); // Add space between words
    });
  })

// to append all professional details in templates

const jobRoleInput = document.getElementById("jobRoleInput");
const jobRole = document.getElementById("jobRole");
const jobRoleMinimalistic = document.getElementById("jobRoleMinimalistic");

jobRoleInput.addEventListener("input" , () => {
    jobRole.innerText = jobRoleInput.value;
    jobRoleMinimalistic.innerText = jobRoleInput.value;
})


const descriptionInput = document.getElementById("descriptionInput");
const summarySection = document.getElementById("summaryPara");
const summarySection2 = document.getElementById("summaryPara2");

descriptionInput.addEventListener("input" , () => {
    summarySection.innerText = descriptionInput.value;
    summarySection2.innerText = descriptionInput.value;
})

// button events

const employementBtn = document.getElementById("addEmployement"); 
const addEmployementSection = document.getElementById("Employement-details"); 
const experience = document.getElementById("experienceList"); 
const experience2 = document.getElementById("experienceList2");

employementBtn.addEventListener("click", () => {
    
    let div1 = document.createElement("div");
    div1.innerHTML = `<p>Start Date</p><input type="month" id="startDateInput"><p>End Date</p><input type="month" id="endDateInput"><input type="text" id="jobTitleInput" placeholder="Job Title"><input type="text" id="employerInput" placeholder="Employer"><textarea id="JobdescriptionInput" placeholder="Description"></textarea>`
    div1.classList.add("btnDiv");
    addEmployementSection.appendChild(div1);

  
    let rightDiv1 = document.createElement("li");
    rightDiv1.innerHTML = `
        <div id="employementInfo">
            <div id="topInfo">
                <div id="jobTitleInfo"></div>
                <div id="duration">
                    <span id="JobStartDate"></span> to <span id="JobEndDate"></span>
                </div>
            </div>
            <div id="bottomInfo">
                <div id="employerInfo"></div>
                <div id="jobDescriptionInfo"></div>
            </div>
        </div>`;
    let rightDiv2 = document.createElement("li");
    rightDiv2.innerHTML = `
            <div id="MiniemployementInfo">
                <div id="MinitopInfo">
                    <div id="MinijobTitleInfo"></div>
                    <div id="Miniduration">
                        <span id="MiniJobStartDate"></span> to <span id="MiniJobEndDate"></span>
                    </div>
                </div>
                <div id="MinibottomInfo">
                    <div id="MiniemployerInfo"></div>
                    <div id="MinijobDescriptionInfo"></div>
                </div>
            </div>`;
    experience.appendChild(rightDiv1);
    experience2.appendChild(rightDiv2);

    const startDateInput = div1.querySelector("#startDateInput");
    const endDateInput = div1.querySelector("#endDateInput");
    const jobTitleInput = div1.querySelector("#jobTitleInput");
    const employerInput = div1.querySelector("#employerInput");
    const descriptionInput = div1.querySelector("#JobdescriptionInput");

// two column 
    const JobStartDate = rightDiv1.querySelector("#JobStartDate");
    const JobEndDate = rightDiv1.querySelector("#JobEndDate");
    const jobTitleInfo = rightDiv1.querySelector("#jobTitleInfo");
    const employerInfo = rightDiv1.querySelector("#employerInfo");
    const jobDescriptionInfo = rightDiv1.querySelector("#jobDescriptionInfo");
    JobStartDate.style.fontWeight = "bold";
    JobEndDate.style.fontWeight = "bold";
    jobTitleInfo.style.fontWeight = "bold";
// minimalistic
    const JobStartDate2 = rightDiv2.querySelector("#MiniJobStartDate");
    const JobEndDate2 = rightDiv2.querySelector("#MiniJobEndDate");
    const jobTitleInfo2 = rightDiv2.querySelector("#MinijobTitleInfo");
    const employerInfo2 = rightDiv2.querySelector("#MiniemployerInfo");
    const jobDescriptionInfo2 = rightDiv2.querySelector("#MinijobDescriptionInfo");
    JobStartDate2.style.fontWeight = "bold";
    JobEndDate2.style.fontWeight = "bold";
    jobTitleInfo2.style.fontWeight = "bold";


    startDateInput.addEventListener("input" , () => {
        JobStartDate.innerText = startDateInput.value;
        JobStartDate2.innerText = startDateInput.value;
    });

    endDateInput.addEventListener("input" , () => {
        JobEndDate.innerText = endDateInput.value;
        JobEndDate2.innerText = endDateInput.value;
    });

    jobTitleInput.addEventListener("input", () => {
        jobTitleInfo.innerText = jobTitleInput.value;
        jobTitleInfo2.innerText = jobTitleInput.value;
    });

    employerInput.addEventListener("input", () => {
        employerInfo.innerText = employerInput.value;
        employerInfo2.innerText = employerInput.value;
    });

    descriptionInput.addEventListener("input", () => {
        jobDescriptionInfo.innerText = descriptionInput.value;
        jobDescriptionInfo2.innerText = descriptionInput.value;
    });
});




const projectBtn = document.getElementById("addProject");
const projectSection = document.getElementById("projectDetails");
const projectList1 = document.getElementById("projectsList");
const projectList2 = document.getElementById("projectsList2");

projectBtn.addEventListener("click" , () => {
    let div2 = document.createElement("div");
    div2.innerHTML = `<p>Start Date</p><input type="month" id="projectStart"><p>End Date</p><input type="month" id="projectEnd"><input type="text" id="projectTitleInput" placeholder="Project Title"><textarea name="" id="projectDescriptionInput" placeholder="Description"></textarea>`
    div2.classList.add("btnDiv");
    projectSection.append(div2);

    let projectDiv1 = document.createElement("li");
    projectDiv1.innerHTML = `
        <div id="projectInfo">
            <div id="topInfo">
                <div id="projectTitleInfo"></div>
                <div id="duration">
                    <span id="projectStartDate"></span> to <span id="projectEndDate"></span>
                </div>
            </div>
            <div id="bottomInfo">
                <div id="projectDescriptionInfo"></div>
            </div>
        </div>`;
    let projectDiv2 = document.createElement("li");
    projectDiv2.innerHTML = `
            <div id="MiniprojectInfo">
                <div id="MinitopInfo">
                    <div id="MiniprojectTitleInfo"></div>
                    <div id="Miniduration">
                        <span id="MiniprojectStartDate"></span> to <span id="MiniprojectEndDate"></span>
                    </div>
                </div>
                <div id="MinibottomInfo">
                    <div id="MiniprojectDescriptionInfo"></div>
                </div>
            </div>`;
    projectList1.appendChild(projectDiv1);
    projectList2.appendChild(projectDiv2);

    const projectStartInput = div2.querySelector("#projectStart");
    const projectEndInput = div2.querySelector("#projectEnd");
    const projectInput = div2.querySelector("#projectTitleInput");
    const projectdescriptionInput = div2.querySelector("#projectDescriptionInput");

// two column 
    const projectStartDate = projectDiv1.querySelector("#projectStartDate");
    const projectEndDate = projectDiv1.querySelector("#projectEndDate");
    const projectTitleInfo = projectDiv1.querySelector("#projectTitleInfo");
    const projectDescriptionInfo = projectDiv1.querySelector("#projectDescriptionInfo");
    projectStartDate.style.fontWeight = "bold";
    projectEndDate.style.fontWeight = "bold";
    projectTitleInfo.style.fontWeight = "bold";
// minimalistic
    const projectStartDate2 = projectDiv2.querySelector("#MiniprojectStartDate");
    const projectEndDate2 = projectDiv2.querySelector("#MiniprojectEndDate");
    const projectTitleInfo2 = projectDiv2.querySelector("#MiniprojectTitleInfo");
    const MiniprojectDescriptionInfo = projectDiv2.querySelector("#MiniprojectDescriptionInfo");
    projectStartDate2.style.fontWeight = "bold";
    projectEndDate2.style.fontWeight = "bold";
    projectTitleInfo2.style.fontWeight = "bold";


    projectStartInput.addEventListener("input" , () => {
        projectStartDate.innerText = projectStartInput.value;
        projectStartDate2.innerText = projectStartInput.value;
    });

    projectEndInput.addEventListener("input" , () => {
        projectEndDate.innerText = projectEndInput.value;
        projectEndDate2.innerText = projectEndInput.value;
    });

    projectInput.addEventListener("input", () => {
        projectTitleInfo.innerText = projectInput.value;
        projectTitleInfo2.innerText = projectInput.value;
    });

    projectdescriptionInput.addEventListener("input", () => {
        projectDescriptionInfo.innerText = projectdescriptionInput.value;
        MiniprojectDescriptionInfo.innerText = projectdescriptionInput.value;
    });
});


const educationBtn = document.getElementById("addEducation");
const educationSection = document.getElementById("educationalDetails");

const qualification1 = document.getElementById("educationList1");
const qualification2 = document.getElementById("educationList2");

educationBtn.addEventListener("click" , () => {
    let div3 = document.createElement("div");
    div3.innerHTML = `<p>Start Date</p><input type="month" id="educationStartInput"><p>End Date</p><input type="month" id="educationEndInput"><input type="text" id="qualificationInput" placeholder="Qualification"><input type="text" id="instituteInput" placeholder="School/College"><textarea name="" id="educationDescription" placeholder="Description"></textarea>`
    div3.classList.add("btnDiv");
    educationSection.append(div3);


    let educationDiv1 = document.createElement("li");
    educationDiv1.innerHTML = `
        <div id="educationInfo">
            <div id="topInfo">
                <div id="educationTitleInfo"></div>
                <div id="duration">
                    <span id="educationStartDate"></span> to <span id="educationEndDate"></span>
                </div>
            </div>
            <div id="bottomInfo">
                <div id="instituteInfo"></div>
                <div id="educationDescriptionInfo"></div>
            </div>
        </div>`;
    let educationDiv2 = document.createElement("li");
    educationDiv2.innerHTML = `
            <div id="MinieducationInfo">
                <div id="MinitopInfo">
                    <div id="MinieducationTitleInfo"></div>
                    <div id="Miniduration">
                        <span id="MinieducationStartDate"></span> to <span id="MinieducationEndDate"></span>
                    </div>
                </div>
                <div id="MinibottomInfo">
                    <div id="MiniinstituteInfo"></div>
                    <div id="MinieducationDescriptionInfo"></div>
                </div>
            </div>`;
    qualification1.appendChild(educationDiv1);
    qualification2.appendChild(educationDiv2);

    const educationStartIp = div3.querySelector("#educationStartInput");
    const educationEndIp = div3.querySelector("#educationEndInput");
    const educationTitleIp = div3.querySelector("#qualificationInput");
    const instituteIp = div3.querySelector("#instituteInput");
    const educationdescriptionIp = div3.querySelector("#educationDescription");

// two column 
    const educationStart = educationDiv1.querySelector("#educationStartDate");
    const educationEnd = educationDiv1.querySelector("#educationEndDate");
    const educationTitle = educationDiv1.querySelector("#educationTitleInfo");
    const education = educationDiv1.querySelector("#instituteInfo");
    const educationDescription = educationDiv1.querySelector("#educationDescriptionInfo");
    educationStart.style.fontWeight = "bold";
    educationEnd.style.fontWeight = "bold";
    educationTitle.style.fontWeight = "bold";
// minimalistic
    const educationStart2 = educationDiv2.querySelector("#MinieducationStartDate");
    const educationEnd2 = educationDiv2.querySelector("#MinieducationEndDate");
    const educationTitle2 = educationDiv2.querySelector("#MinieducationTitleInfo");
    const education2 = educationDiv2.querySelector("#MiniinstituteInfo");
    const educationDescription2 = educationDiv2.querySelector("#MinieducationDescriptionInfo");
    educationStart2.style.fontWeight = "bold";
    educationEnd2.style.fontWeight = "bold";
    educationTitle2.style.fontWeight = "bold";


    educationStartIp.addEventListener("input" , () => {
        educationStart.innerText = educationStartIp.value;
        educationStart2.innerText = educationStartIp.value;
    });

    educationEndIp.addEventListener("input" , () => {
        educationEnd.innerText = educationEndIp.value;
        educationEnd2.innerText = educationEndIp.value;
    });

    educationTitleIp.addEventListener("input", () => {
        educationTitle.innerText = educationTitleIp.value;
        educationTitle2.innerText = educationTitleIp.value;
    });

    instituteIp.addEventListener("input", () => {
        education.innerText = instituteIp.value;
        education2.innerText = instituteIp.value;
    });

    educationdescriptionIp.addEventListener("input", () => {
        educationDescription.innerText = educationdescriptionIp.value;
        educationDescription2.innerText = educationdescriptionIp.value;
    });
})

// downloadBtn

// const downloadBtn = document.getElementById("downloadPdf");

function generatePDF(){
   if(selectTemplate.value === "Two-columns"){
    const element = document.getElementById("twoColumnTemplate");
    html2pdf(element, {
        margin: 10,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
   }else if(selectTemplate.value === "Minimalistic"){
    const element = document.getElementById("minimalisticTemplate");
    html2pdf(element, {
        margin: 10,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
   }
    
}

// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };
 
 
// $('#downloadPdf').click(function () {
//     doc.fromHTML($('#htmlContent').html(), 15, 15, {
//         'width': 700,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample_file.pdf');
// });