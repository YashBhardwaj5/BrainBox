import { Logo } from "../icons/Logo"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const Sidebar=()=>{
    return <div className="h-screen bg-white border border-gray-100 w-72 absolute top-0 left-0 pl-6">
            <div className="text-2xl font-medium pt-8 flex">
                <Logo/>
                BrainBox
            </div>
            <div className="pt-8 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>}></SidebarItem>
                <SidebarItem text="Youtube" icon={<YoutubeIcon/>}></SidebarItem>
            </div>
    </div>
}