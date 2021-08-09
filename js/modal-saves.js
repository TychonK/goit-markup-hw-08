const refs = {
    name: document.querySelector("#name"),
    telephone: document.querySelector("#telephone"),
    email: document.querySelector("#email"),
    comment: document.querySelector("#comment"),
    form: document.querySelector("#modal-form")
}

let formData = {};

refs.form.addEventListener("submit", onFormSubmit)
refs.form.addEventListener("input", onFormInput)

function onFormInput(evt) {
    if ((evt.target.nodeName != "INPUT") && (evt.target.nodeName != "TEXTAREA")) {
        return;
    }
    formData[evt.target.name] = evt.target.value;
    console.log(formData)
    localStorage.setItem("form-saved-data", JSON.stringify(formData))
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem("form-saved-data")
}

function populateTextarea() {
    const savedData = localStorage.getItem("form-saved-data");
    if (savedData) {
        const parsedData = JSON.parse(savedData)
        const inputs = document.querySelectorAll("form input")
        formData = parsedData;

        inputs.forEach((input) => {
            if (input.name in parsedData) {
                input.value = parsedData[input.name];
            }    
        })
        if (refs.comment.name in parsedData) {
            refs.comment.value = parsedData[refs.comment.name]
        }
        
        
    }
}

populateTextarea();