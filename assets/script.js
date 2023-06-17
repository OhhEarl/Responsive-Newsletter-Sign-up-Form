

    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var emailInput = document.getElementById('emailInput');
      var email = emailInput.value;

      var successMessage = document.getElementById('showSucces');
      var removeMain = document.getElementById('main');
   
  
      if (isValidEmail(email)) {
        document.getElementById('usersEmail').textContent = email;
        successMessage.style.display = 'block';
        removeMain.style.display = 'none';

      } else {
        document.getElementById('emailError').textContent = 'Valid email required';
        emailInput.classList.add('invalid'); 
        emailInput.addEventListener('focus', function() {
            email.classList.add('focused');
          });

      
      }
    });
  
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }



var returnButton = document.getElementById("returnButton");    
var successMessage = document.getElementById('showSucces');
var removeMain = document.getElementById('main');
var emailInput = document.getElementById('emailInput');
returnButton.addEventListener("click", function() {
    successMessage.style.display = 'none';
    removeMain.style.display = 'block';
    emailInput.value = '';
});




