import { useState } from 'react';
import PasswordChecklist from "react-password-checklist"
import '../static/CSS/Register.css';
import {useNavigate} from "react-router-dom";


export default function RegisterForm() {
    const navigate = useNavigate();
    // States for registration
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [alreadyExistsError, setAlreadyExitsError] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    const [emailError, setEmailError] = useState('');
    const regex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
        if (regex.test(email) === false) {
            setEmailError("Please enter a valid e-mail address")
        }
        else {
            setEmailError("")
        }
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
            if (error === false && checkIfPasswordValid() && emailError === "") {
                setSubmitted(true);
                fetch('/api/new-user', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({'userName': username, 'password': password, 'email': email})
                }).then((r) => checkIfRegistered(r));
            }
        }
    };

    async function checkIfRegistered(resp) {
        if (resp.status === 200) {
            setAlreadyExitsError("");
            console.log("Successful registration")
            alert("You've registered successfully!")
            navigate("/login")
        }
        if (resp.status === 418) {
            setAlreadyExitsError(await resp.text());
        }
    }

    function checkIfPasswordValid() {
        let tickBoxes = document.getElementsByClassName("eAyRRL")
        for (let tickBox of tickBoxes) {
            if (tickBox.classList.contains("invalid")) {
                return false;
            }
        }
        return true;
    }

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
               {alreadyExistsError}
           </div>


           <form action="/api/new-user" method="post">
                <label className="label">Username</label>
                <input onChange={handleName} className="input"
                       value={username} type="username" />

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                       value={email} type="email" />
               <div className="messages">
                   {emailError}
               </div>

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                       value={password} type="password" />

               <label className="label">Confirm Password</label>
               <input onChange={handlePasswordAgain} className="input"
                      value={passwordAgain} type="password" />
                <div className="password-checklist">
               <PasswordChecklist
                   rules={["minLength","number","capital","match"]}
                   minLength={6}
                   value={password}
                   valueAgain={passwordAgain}
               />
                </div>
                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}