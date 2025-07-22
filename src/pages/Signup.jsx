import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const Signup=()=>{
    return <div className="w-full h-screen flex justify-center items-center bg-gray-200">
        <div className="bg-white p-8 rounded-xl shadow min-w-48">
            <div>
            <Input placeholder={"Username"}></Input>
            </div>
            <div><Input placeholder={"Password"}></Input>
            </div>
            <div className="flex justify-center pt-4 px-2">
            <Button variant="primary" size="md" text="Sign Up" fullwidth={true}></Button>
            </div>
        </div>

    </div>
}