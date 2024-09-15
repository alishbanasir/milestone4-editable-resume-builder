var _a;
(_a = document.getElementById("formGi")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var imageElement = document.getElementById("image");
    var firstnameElement = document.getElementById("firstname");
    var lastnameElement = document.getElementById("lastname");
    var emailElement = document.getElementById("email");
    var numberElement = document.getElementById("number");
    var loactionElement = document.getElementById("loaction");
    var EducationElement = document.getElementById("Education");
    var SkillsElement = document.getElementById("Skills");
    var ExperienceElement = document.getElementById("Experience");
    if (imageElement &&
        firstnameElement &&
        lastnameElement &&
        emailElement &&
        numberElement &&
        loactionElement &&
        EducationElement &&
        SkillsElement &&
        ExperienceElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var number = numberElement.value;
        var loaction = loactionElement.value;
        var Education = EducationElement.value;
        var Skills = SkillsElement.value;
        var Experience = ExperienceElement.value;
        var imageInput = document.getElementById("image");
        var imagefile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var image = imagefile ? URL.createObjectURL(imagefile) : "";
        var output = "\n    <br><br>\n    <h2>Congrats your First Generated!</h2><br><br>\n  ".concat(image
            ? "<img src=\"".concat(image, "\" alt=\"image\" width=\"150px\"  border: 2px solid black;\n    object-fit: cover; height=\"150px\" class=\"image\">")
            : "", "\n    <br><br>\n    <p><strong>Firstname:</strong> <span id=\"edit-firstname\" class=\"Editable\"> ").concat(firstname, " </span> </p>\n    <br><br>\n    <p><strong>Lastname:</strong> <span id=\"edit-lastname\" class=\"Editable\"> ").concat(lastname, " </span> </p>\n    <br><br>\n    <p><strong>Email:</strong> <span id=\"edit-edit\" class=\"Editable\"> ").concat(email, " </span> </p>\n    <br><br>\n    <p><strong>Number:</strong> <span id=\"edit-number\" class=\"Editable\"> ").concat(number, " </span> </p>\n    <br><br>\n    <p><strong>Loaction:</strong> <span id=\"edit-loaction\" class=\"Editable\"> ").concat(loaction, " </span> </p>\n    \n    <br><br>\n\n<h3>Education:</h3>\n<p id=\"edit-Education\" class=\"Editable\">").concat(Education, "</p>\n<br><br>\n\n<h3>Skills:</h3>\n<p id=\"edit-Skills\" class=\"Editable\">").concat(Skills, "</p><br><br>\n\n<h3>Experience:</h3>\n<p id=\"edit-Experience\" class=\"Editable\">").concat(Experience, "</p><br><br>\n");
        var outputElement = document.getElementById("output");
        if (outputElement) {
            outputElement.innerHTML = output;
            makeEditable();
        }
    }
    else {
        console.error("one or more output element are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll("Editable");
    editableElements.forEach(function (Element) {
        Element.addEventListener("click", function () {
            var _a;
            var currentElement = Element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
