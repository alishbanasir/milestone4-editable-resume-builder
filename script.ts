document.getElementById("formGi")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const imageElement = document.getElementById("image") as HTMLInputElement;
  const firstnameElement = document.getElementById(
    "firstname"
  ) as HTMLInputElement;
  const lastnameElement = document.getElementById(
    "lastname"
  ) as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const numberElement = document.getElementById("number") as HTMLInputElement;
  const loactionElement = document.getElementById(
    "loaction"
  ) as HTMLInputElement;

  const EducationElement = document.getElementById(
    "Education"
  ) as HTMLInputElement;
  const SkillsElement = document.getElementById("Skills") as HTMLInputElement;
  const ExperienceElement = document.getElementById(
    "Experience"
  ) as HTMLInputElement;

  if (
    imageElement &&
    firstnameElement &&
    lastnameElement &&
    emailElement &&
    numberElement &&
    loactionElement &&
    EducationElement &&
    SkillsElement &&
    ExperienceElement
  ) {
    const firstname = firstnameElement.value;
    const lastname = lastnameElement.value;
    const email = emailElement.value;
    const number = numberElement.value;
    const loaction = loactionElement.value;
    const Education = EducationElement.value;
    const Skills = SkillsElement.value;
    const Experience = ExperienceElement.value;

    const imageInput = document.getElementById("image") as HTMLInputElement;
    const imagefile = imageInput.files?.[0];
    const image = imagefile ? URL.createObjectURL(imagefile) : "";

    const output = `
    <br><br>
    <h2>Congrats your First Generated!</h2><br><br>
  ${
    image
      ? `<img src="${image}" alt="image" width="150px"  border: 2px solid black;
    object-fit: cover; height="150px" class="image">`
      : ""
  }
    <br><br>
    <p><strong>Firstname:</strong> <span id="edit-firstname" class="Editable"> ${firstname} </span> </p>
    <br><br>
    <p><strong>Lastname:</strong> <span id="edit-lastname" class="Editable"> ${lastname} </span> </p>
    <br><br>
    <p><strong>Email:</strong> <span id="edit-edit" class="Editable"> ${email} </span> </p>
    <br><br>
    <p><strong>Number:</strong> <span id="edit-number" class="Editable"> ${number} </span> </p>
    <br><br>
    <p><strong>Loaction:</strong> <span id="edit-loaction" class="Editable"> ${loaction} </span> </p>
    
    <br><br>

<h3>Education:</h3>
<p id="edit-Education" class="Editable">${Education}</p>
<br><br>

<h3>Skills:</h3>
<p id="edit-Skills" class="Editable">${Skills}</p><br><br>

<h3>Experience:</h3>
<p id="edit-Experience" class="Editable">${Experience}</p><br><br>
`;

    const outputElement = document.getElementById("output");
    if (outputElement) {
      outputElement.innerHTML = output;
      makeEditable();
    }
   
  } else {
    console.error("one or more output element are missing");
  }
});

function makeEditable() {
  const editableElements = document.querySelectorAll("Editable");
  editableElements.forEach((Element) => {
    Element.addEventListener("click", function () {
      const currentElement = Element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "p" || currentElement.tagName === "span") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
