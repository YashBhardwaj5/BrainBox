import { DocumentIcon } from "../icons/DocumentIcon"
import { HashtagIcon } from "../icons/HashtagIcon"
import { LinksIcon } from "../icons/LinksIcon"
import { Logo } from "../icons/Logo"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const Sidebar=()=>{
    return <div className="h-screen bg-white border border-gray-100 w-72 absolute top-0 left-0 pl-6">
            <div className="text-3xl font-medium pt-8 flex">
                <div className="text-purple-800 pr-1"><Logo/></div>
                <div>BrainBox</div>
            </div>
            <div className="pt-8 pl-6">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>}></SidebarItem>
                <SidebarItem text="Videos" icon={<YoutubeIcon/>}></SidebarItem>
                <SidebarItem text="Documents" icon={<DocumentIcon/>}></SidebarItem>
                <SidebarItem text="Links" icon={<LinksIcon/>}></SidebarItem>
                <SidebarItem text="Tags" icon={<HashtagIcon/>}></SidebarItem>
                
            </div>
    </div>
}