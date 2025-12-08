document.addEventListener('DOMContentLoaded', function() { 

    // Get form and feedback div elements

    const form= document.getElementById('registration-form');
    const feedbackdiv= document.getElementById('form-feedback');

    form.addEventListener('submit',function(event) {
      event.preventDefault(); //prevents form submission
    });

//Get inputs and trim

const username= document.getElementById('username').value.trim();
const email= document.getElementById('email').value.trim();
const password= document.getElementById('password').value.trim();

//validation

let isValid=true;
let messages=[];

//check username
if (username.length <3){
    isValid=false;
    messages.push("Username must be at least 3 characters.");
}

//check email
if (!email.includes('@') ('.')){
    isValid=false;
    messages.push("Please enter a valid email address.");
}

//check password
if (password.length <6){
    isValid=false;
    messages.push("Password must be at least six characters long.");
}

//display feedback
if (!isValid){
    feedbackdiv.textContent= "Registration successful!";
    feedbackdiv.style.color='#28a745';
} else {
    feedbackdiv.innerHTML= messages.join('<br>');
    feedbackdiv.style.color='#dc3545';
}
});

