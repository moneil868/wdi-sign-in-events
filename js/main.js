document.addEventListener('DOMContentLoaded', function () {

  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var closeButton = document.querySelector('.close');
  var formGetStarted = document.querySelector('.getstarted');
  var submitButton = document.querySelector('.submit');
  var userInput = document.querySelector('#user');
  var passwordInput = document.querySelector('#pass');



  // When the user presses the .signin button, fade in the modal window
  signIn.addEventListener('click', function(){
    modal.style.display = 'inline';
  })

  // When the user presses the .close button, fade out the modal window
  closeButton.addEventListener('click', function(){
    modal.style.display = 'none';
  });


  formGetStarted.addEventListener('click', function(){
    modal.style.display = 'none';
  })

  // When the user presses the .submit button, add an .error class to both input elements
  submitButton.addEventListener('click', function(e){
    userInput.classList = 'error';
    passwordInput.classList = 'error';
    e.stopPropagation();
  })

  // When the user puts their cursor in one of the input fields, remove the .error class

  userInput.addEventListener('click', function(e){
    e.stopPropagation();
  });

  userInput.addEventListener('pointerover', function(){
    userInput.classList = 'none';
  });

  passwordInput.addEventListener('click', function(e){
    e.stopPropagation();
  });

  passwordInput.addEventListener('pointerover', function(){
    passwordInput.classList = 'none';
  })

})
