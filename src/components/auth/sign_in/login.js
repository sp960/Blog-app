// Function to handle login
document.getElementById('signinForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const email = document.getElementById('email').value;
            const Password = document.getElementById('Password').value;
        
            loginUser(email, Password);
        });
        // Function to perform login
        function loginUser(email, Password) {
                    const loginData = {
                                email: email,
                                Password: Password,
                        };
        
            fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                console.log("successfully Loged in" + data);
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
        }
        