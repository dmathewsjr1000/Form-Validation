// Declaring  of Variables

const registerForm = document.getElementById('registration');
const errorDisplayDiv = document.getElementById('errorDisplay');
const username = registerForm["username"];
const email = registerForm["email"];
const password = registerForm["password"];
const passwordCheck = registerForm["paswordCheck"];

console.log(username);

registerForm.addEventListener('submit', validate);

function validate(e) {
     const regex = /^.{4,}$/;
     const nameVal = checkUserName();
     function checkUserName() {}
     if (nameVal === false) {
           e.returnValue = false;
      alert("Please provide a User Name.");
         username.focus();
        // e.preventdefault();
        // return false;
    
     } 

     if (!regex.test(username.value)) {
        
        alert('Please re-enter name with 4 or more character.');
        username.focus();
        // return false;
    }
    
     
    const twoUniqueChars = /^(?=.*(.).*\1).*$/;

    if (!twoUniqueChars.test(username.value)) {
        alert('Provide two special characters');
        username.focus();
        return false;
    }
    return username.value;

    const emailVal = validateEmail();
  if (emailVal === false) {
    e.returnValue = false;
    return false;
  }

   
}

  
      
  

