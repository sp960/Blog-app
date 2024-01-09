
  //  // Function to handle signup
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const firstName =document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const Password = document.getElementById('Password').value;
    const MobileNo = document.getElementById('MobileNo').value
  
    signupUser(firstName,lastName,email, MobileNo ,Password);
  });
  
  // // Function to perform signup
  function signupUser(firstName,lastName,email, MobileNo, Password) {
    const signupData = {
      firstName : firstName,
      lastName : lastName,  
      email: email,
      MobileNo : MobileNo,
      Password: Password
    };
    // Make a POST request to the signup endpoint

      fetch('http://localhost:3000/user/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      })
    
    .then(response => {
      if (!response.ok) {
        // throw new Error(response);
        console.log('res', response)
      }``
      return response.json();
    })
    .then(data => {
      console.log('Signup successful:', data);
    })
    .catch(error => {
        console.error('Signup failed:', error);
      });
}
  