import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"
import { backenduri } from "../config"
import { useNavigate } from "react-router-dom"
export const Signup=()=>{
    const usernameRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
    const signup=async ()=>{
        const Username=usernameRef.current.value;
        const password=passwordRef.current.value;
        await axios.post(backenduri+"/api/v1/signup",{
            Username,
            password
        })
        navigate("/signin");
    }
    return <div className="w-full h-screen flex justify-center items-center bg-gray-200">
        <div className="bg-white p-8 rounded-xl shadow min-w-48">
            
            <Input ref={usernameRef} placeholder={"Username"}></Input>
            
            <Input ref={passwordRef} placeholder={"Password"}></Input>
            
            <div className="flex justify-center pt-4 px-2">
            <Button onClick={signup} variant="primary" size="md" text="Sign Up" fullwidth={true}></Button>
            </div>
        </div>

    </div>
}