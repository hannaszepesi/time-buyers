import { useState } from 'react';
import PasswordChecklist from "react-password-checklist"
import '../static/CSS/Register.css';

export default function RegisterForm() {

    // States for registration
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePasswordAgain = (e) => {
        setPasswordAgain(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {

        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            setError(true);
        }
        else {
            fetch('/api/new-user', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'userName': username, 'password': password, 'email': email})
            }).then(r => console.log("success", r));
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {username} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

   return (
       <div className="form">
           <div>
               <h1>User Registration</h1>
           </div>

           {/* Calling to the methods */}
           <div className="messages">
               {errorMessage()}
               {successMessage()}
           </div>

           <form action="/api/new-user" method="post">
                <label className="label">Username</label>
                <input onChange={handleName} className="input"
                       value={username} type="username" />

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                       value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                       value={password} type="password" />

               <label className="label">Confirm Password</label>
               <input onChange={handlePasswordAgain} className="input"
                      value={passwordAgain} type="password" />

               <PasswordChecklist
                   rules={["minLength","number","capital","match"]}
                   minLength={6}
                   value={password}
                   valueAgain={passwordAgain}
               />

                <button onClick={handleSubmit} className="btn" type="submit">a
                    Submit
                </button>
            </form>
        </div>
    );
}