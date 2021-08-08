const refs = {
    name: document.querySelector("#name"),
    telephone: document.querySelector("#telephone"),
    email: document.querySelector("#email"),
    comment: document.querySelector("#comment"),
    form: document.querySelector("#modal-form")
}

refs.comment.addEventListener("input", onCommentInput)
refs.name.addEventListener("input", onNameInput)
refs.telephone.addEventListener("input", onTelInput)
refs.email.addEventListener("input", onEmailInput)

refs.form.addEventListener("submit", onFormSubmit)


populateTextarea();

function onCommentInput(evt) {
    const commentValue = evt.target.value;
    localStorage.setItem("comment-text", commentValue)
}

function onNameInput(evt) {
    const nameValue = evt.target.value;
    localStorage.setItem("name", nameValue)
}

function onTelInput(evt) {
    const telValue = evt.target.value;
    localStorage.setItem("telephone", telValue)
}

function onEmailInput(evt) {
    const emailValue = evt.target.value;
    localStorage.setItem("email", emailValue)
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem("comment-text");
    localStorage.removeItem("name");
    localStorage.removeItem("telephone");
    localStorage.removeItem("email")
}

function populateTextarea() {
    const savedComment = localStorage.getItem("comment-text");
    const savedName = localStorage.getItem("name");
    const savedTel = localStorage.getItem("telephone");
    const savedEmail = localStorage.getItem("email");

    if (savedComment) {
        refs.comment.value = savedComment;
    }
    if (savedName) {
        refs.name.value = savedName;
    }
    if (savedTel) {
        refs.telephone.value = savedTel;
    }
    if (savedEmail) {
        refs.email.value = savedEmail;
    }
}
