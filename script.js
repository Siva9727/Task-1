let form = document.getElementById('login-form')
// add event listener at form 

form.addEventListener('submit',function(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    var password = document.getElementById('pass-word').value;

    if (username === 'admin' && password === 'nintriva') {
      alert('Login successful!');

      // Redirect to the logged-in page
      
    } else {
      let error = document.getElementById('error-msg');
      error.style.display = "block";
    }
})

// set eventlistener at icon and inbox

let user = document.getElementById('user-input');
let password = document.getElementById('pass-input');

user.addEventListener('click', ()=>{
  user.style.borderBottom = "1px solid #1d95cf";
  setTimeout(() => {
    user.style.borderBottom = "";
  },100);
});


password.addEventListener('click', ()=>{
  password.style.borderBottom = "1px solid #1d95cf";
  setTimeout(() => {
    password.style.borderBottom = "";
  },100);
});