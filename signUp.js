let signInBtn = document.querySelector('.btn-primary');
// let emailContainers = document.querySelectorAll('.email-input');
let emailContainers = document.querySelectorAll('.email-input');
let emailContainer = document.querySelectorAll('.email-input')[0];
let pwdContainer = document.querySelectorAll('.email-input')[1];

signInBtn.addEventListener('click', validateUser);
emailContainer.addEventListener('blur',getEmailAndPwd);
pwdContainer.addEventListener('blur',getEmailAndPwd);

// emailContainer.addEventListener('focus',() => {
//     let emailPlaceHolder = document.getElementById('email-placeholder');
//     let x = emailPlaceHolder;
//     (x.style.display == 'none')? x.style.display = "block":console.log("no need");
// });

// pwdContainer.addEventListener('focus',() => {
//     let pwdPlacdHolder = document.getElementById('pwd-placeholder');
//     // pwdPlacdHolder.style.display = "block";
//     let x = pwdPlacdHolder;
//     (x.style.display == 'none')? x.style.display = "block":console.log("no need");
//     // if(pwdPlacdHolder.style.display == )
// });


function getEmailAndPwd() {

    console.log("this", this == emailContainer);

    if(this == emailContainer) {
        // user unfocused email container
        let email = document.getElementById('user-email').value;
        let emailMsg = document.getElementById('user-email-msg');
        let emailPlaceHolder = document.getElementById('email-placeholder');
        console.log("Email    : ", email);
        displayInputError(emailContainer, email, emailMsg, emailPlaceHolder);
    }else {
        let pwd = document.getElementById('user-pwd').value;
        let pwdMsg = document.getElementById('user-pwd-msg');
        let pwdPlacdHolder = document.getElementById('pwd-placeholder');
        console.log("Password : ", pwd);
        displayInputError(pwdContainer, pwd, pwdMsg, pwdPlacdHolder);
    }



    // validate the input
}

function displayInputError(container, inputField, errMsg, inputPlaceHolder) {
    if(inputField == '') {
        if(container.classList.contains('invalid-input')) {
            console.log(`${container} is empty and error UI is present.`);
        }else {
            // change the background of the input container
            container.classList.toggle('invalid-input');
            // display the message
            console.log("Error msg : ", errMsg);
            console.log("Error msg : ", errMsg.classList.contains('hidden'));
            errMsg.classList.toggle('hidden');
        }
    }else {
        // input field is not empty so remove the place holder too
        inputPlaceHolder.style.display = "none";

        if(container.classList.contains('invalid-input')) {
            console.log("No error in ", container);
            container.classList.toggle('invalid-input');
            errMsg.classList.toggle('hidden');
        }
    }

}

function validateUser() {
    let email = document.getElementById('user-email').value;
    let pwd = document.getElementById('user-pwd').value;

    if(email == 'shashi@nomail.com' && pwd == '1234') {
        console.log("User validated successfully");
        window.location.href = "./profile.html";
    }else {
        alert("Username or password incorrect.");
    }


}

