import axios from "axios";

const Login = (username, password) => {
    return axios.post("http://localhost:5000/login",
        {username, password})
        .then(response => {
            alert(response.message)
        })
        .catch(error => {
            console.log(error.message)
        })
}

const Register = (username, password) => {
    return axios.post("http://localhost:5000/registration",
        {username, password})
        .then(response => console.log(response.message))
        .catch(error => {
            console.log(error.message);
        })
}
export {Login, Register}
