import {useState} from "react";
import '../static/CSS/Register.css';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = function(event) {
        setUsername(event.target.value)
    }
    const handlePassword = function(event) {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser({username, password})
    }

    async function loginUser(loginData) {
        return apiPost("/login",loginData);
            // .then(r => {setUpLogin(r)});

    }

    async function apiPost(url, payload) {
        let response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        });
        if (response.status === 200) {
            return response.json();
        }
    }



    return (
        <div>
            <form>
                <label> Username
                    <input onChange={handleUsername} className="input" name="username" type="text"
                           value={username} />
                </label>
                <label> Password
                    <input onChange={handlePassword} className="input" name="password" type="password"
                           value={password} />
                </label>
                <button type="submit" onClick={handleSubmit}>Log in</button>
            </form>
        </div>
    );
}

export default Login;