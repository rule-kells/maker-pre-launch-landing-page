const form = document.getElementById('form');
const emailBtn = form.querySelector('.btn');

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validate = _ => {
    const email = document.querySelector("email")

    if (validateEmail(email)) {
        form.classList.remove('invalid')
    } else if (!validateEmail(email)){
        form.classList.add('invalid')
    }
}


emailBtn.addEventListener('click', validate)
