import { ShareIcon } from "../icons/ShareIcon"

export const Card=()=>{
    return <div className="bg-white rounded-md p-4 outline-slate-200 border max-w-72 border-gray-200">
        <div className="flex justify-between items-center align-middle">
            <div className="flex items-center text-md">
                <div className="text-gray-500 pr-2"><ShareIcon size="md"/></div>
                Playlist
            </div>
            <div className="flex items-center">
                <div className="text-gray-500 pr-2"><ShareIcon size="md"/></div>
                <div className="text-gray-500"><ShareIcon size="md"/></div>
            </div>
        </div>
        <iframe className="w-full pt-4" src="https://www.youtube.com/embed/CqWF2fZJ_p0?si=JQaTGOlCK7j2Ex9r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullScreen></iframe>
        
    </div>
}