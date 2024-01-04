
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
  
  // const firstName = "firstName"
  // const lastName = "lastName"
  // const email = "email@gmail.com"
  // const MobileNo =  70025488555
  // const Password = "Password123"
  
  // // Function to perform signup
  function signupUser(firstName,lastName,email, MobileNo, Password) {
    const signupData = {
      firstName : firstName,
      lastName : lastName,  
      email: email,
      MobileNo : MobileNo,
      Password: Password
      // You can include additional data for signup if required
    };
    console.log(JSON.stringify(signupData));
  
    // Make a POST request to the signup endpoint

      fetch('http://localhost:3000/user/sign-up', {
        // mode : 'no-cors', 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({firstName : "Kalpan", lastName : "Patel" , email : "kalpan123.patel@gmail.com",MobileNo : 8525929667,Password : "Kalpan@123"}),
        body: JSON.stringify(signupData),
        credentials: 'include',
      })
    
    .then(response => {
      if (!response.ok) {
        // throw new Error(response);
        console.log('res', response)
      }``
      return response.json();
    })
    .then(data => {
        // alert("successful sign up")
      console.log('Signup successful:', data);
      // Handle successful signup (if needed)
    })
    .catch(error => {
        console.error('Signup failed:', error);
        
      });
}
  