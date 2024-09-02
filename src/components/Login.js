import { useRef, useState } from "react"
import { apiPost } from "../services/axios-api"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    const [credentialsForm, setCredentialsForm] = useState({
        email: "",
        password: ""
    })

    const formRef = useRef()

    async function login() {
        try {
            formRef.current.reportValidity()
            const response = await apiPost("auth/login", credentialsForm)
            const data = response.data
            localStorage.setItem("token", data.accessToken?.toString())
            navigate("/vacations")
        } catch (error) {
            console.error(error.message)
        }
    }

    return (<>
        <form ref={formRef} >
            <span>
                <label>email:</label>
                <input required max={50} onChange={e => { setCredentialsForm({ ...credentialsForm, email: e.target.value }) }} />
            </span>
            <span>
                <label>password:</label>
                <input required minLength={"8"} type="password" onChange={e => { setCredentialsForm({ ...credentialsForm, password: e.target.value }) }} />
            </span>

            <button type="button" onClick={login}>login</button>
        </form>
    </>)

}