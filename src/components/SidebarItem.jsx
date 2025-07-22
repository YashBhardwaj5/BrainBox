export const SidebarItem=(props)=>{
    const {icon,text}=props;
    return <div className="flex font-medium text-gray-800 py-2 hover:bg-gray-100 w-48 rounded-md cursor-pointer mb-1">
        <div className="pr-2">{icon}</div>
        <div>{text}</div>
    </div>
}