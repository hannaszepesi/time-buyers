import {useContext, useState} from "react";
import '../static/CSS/Register.css';
import {useNavigate} from "react-router-dom";
import {LogContext} from "./Navbar";



function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let isLoggedIn = useContext(LogContext)

    const handleUsername = function(event) {
        setUsername(event.target.value)
    }
    const handlePassword = function(event) {
        setPassword(event.target.value)
    }
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser({username, password})
        isLoggedIn = true;
        navigate("/");
    }

    async function loginUser(loginData) {
        return apiPost("/login",loginData);
    }

    async function apiPost(url, payload) {
        console.log(payload)
        let response = await fetch(url, {
            credentials: 'include',
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        });
        console.log(response.status)
        if (response.status === 200) {
            let header = response.headers.get('Authorization');
            localStorage.setItem("username", JSON.stringify(payload.username));
            localStorage.setItem("header", JSON.stringify(header));
            return response.headers.get('Authorization');
        }
    }



    return (
        <div>
            <form>
                <label> Username </label>
                    <input onChange={handleUsername} className="input" name="username" type="username"
                           value={username} />

                <label> Password </label>
                    <input onChange={handlePassword} className="input" name="password" type="password"
                           value={password} />

                <button type="submit" onClick={handleSubmit} className="btn">Login</button>
            </form>
        </div>
    );
}

export default Login;