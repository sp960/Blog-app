// Function to handle login
// document.getElementById('signinForm').addEventListener('submit', function(event) {
//             event.preventDefault(); // Prevent default form submission
//             const email = document.getElementById('email').value;
//             const Password = document.getElementById('Password').value;
        
//             loginUser(email, Password);
//         });
//         // Function to perform login
        // function loginUser(email, Password) {
                    const loginData = {
                                email: "sanket.prajapati0906@gmail.com",
                                Password: "Sanket@9624",
                        };
                                    // console.log(loginData)
        
            fetch('http://localhost:3000/user/login', {
                mode : 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({email : "sanket.prajapati0906@gmail.com",Password : "Sanket@9624"}),
                body: JSON.stringify(loginData),
                credentials: 'include', // Include credentials in the request
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                console.log('Login successful:', data);
                // Handle successful login (if needed)
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
        // }
        