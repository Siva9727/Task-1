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
      alert('Invalid username or password.');
    }
})