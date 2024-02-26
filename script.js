//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(event){
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var remember = document.getElementById('checkbox').checked;
  if (remember) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  alert(`Logged in as ${username}`);
	if(localStorage.getItem('username')){
  var existingButton = document.createElement('button');
  existingButton.id = 'existing';
  existingButton.innerText = 'Login as existing user';
  document.body.appendChild(existingButton);
  existingButton.addEventListener( 'click', function() {
    alert(`Logged in as ${localStorage.getItem('username')}`);
  });
}
});


