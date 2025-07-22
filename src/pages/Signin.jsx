import axios from "axios";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { backenduri } from "../config";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
export const Signin=()=>{
    const usernameRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
    const tosignup=()=>{
        navigate("/signup");
    }
    const signin=async ()=>{
        const Username=usernameRef.current.value;
        const password=passwordRef.current.value;
        const response =await axios.post(backenduri+"/api/v1/signin",{
            Username,
            password
        })
        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");
    }
    return <div className="w-full h-screen flex justify-center items-center bg-gray-200">
        <div className="bg-white p-8 rounded-xl shadow min-w-48">
            
            <Input ref={usernameRef} placeholder={"Username"}></Input>
            
            <Input ref={passwordRef} placeholder={"Password"}></Input>
            
            <div className="flex justify-center pt-4 px-2">
            <Button onClick={signin} variant="primary" size="md" text="Sign In" fullwidth={true}></Button>
            </div>
            <div className="flex justify-center pt-4 px-2">
            <Button onClick={tosignup} variant="primary" size="md" text="Sign Up" fullwidth={true}></Button>
            </div>
        </div>

    </div>
}