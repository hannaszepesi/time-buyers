import {useState} from "react";
import '../static/CSS/Register.css';
import {useNavigate} from "react-router-dom";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    export let [loggedIn, setLoggedIn] = useState(false);

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
        setLoggedIn(true);
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
            // console.log(response.headers.get('Authorization'));
            let header = response.headers.get('Authorization');
            localStorage.setItem("username", JSON.stringify(payload.username));
            localStorage.setItem("header", JSON.stringify(header));
            // console.log(localStorage);
            return response.headers.get('Authorization');
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