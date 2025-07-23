import { useRef, useState } from "react";
import { CrossIcon } from "./CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { backenduri } from "../config";
const ContentType={
  Youtube:"youtube",
  Twitter:"twitter"
}
export const CreateContentModal = (props) => {
  const { open, onClose } = props;
  const titleRef=useRef();
  // const typeRef=useRef();
  const linkRef=useRef();
  const [type,setType]=useState(ContentType.Youtube);
  const addcontent=async ()=>{
    const title=titleRef.current.value;
    const link=linkRef.current.value;
    
    await axios.post(backenduri+"/api/v1/content",{
      title,
      link,
      type
    },{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
  }

  return (
    <>
      {open === true && (<div>
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500 opacity-60 z-40"></div>
        <div className="w-screen h-screen fixed flex justify-center top-0 left-0 z-50">
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-md p-4">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon />
                </div>
                <div>
                    <Input ref={titleRef} placeholder="Title"></Input>
                    <Input ref={linkRef} placeholder="Link"></Input>
                    
                </div>
                <div className="text-center text-gray-500 pb-1">
                  <h1>Content Type</h1>
                </div>
                <div className="flex justify-center pb-2">
                  <div className="px-1">
                  <Button onClick={()=>{
                    setType(ContentType.Youtube)
                  }} variant={type===ContentType.Youtube?"primary":"secondary"} size="md" text="Youtube"/>
                  </div>
                  <div className="px-1">
                  <Button onClick={()=>setType(ContentType.Twitter)} variant={type===ContentType.Twitter?"primary":"secondary"} size="md" text="Twitter"/>  
                  </div>
                </div>
                <div className="flex justify-center">
                <Button onClick={addcontent} variant="primary" size="md" text="Submit"/>
                </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

