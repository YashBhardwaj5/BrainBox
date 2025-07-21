import { useState } from "react";
import { CrossIcon } from "./CrossIcon";
import { Button } from "./Button";
export const CreateContentModal = (props) => {
  const { open, onClose } = props;
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
                    <Input placeholder="Title"></Input>
                    <Input placeholder="Link"></Input>
                </div>
                <div className="flex justify-center">
                <Button variant="primary" size="md" text="Submit"/>
                </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};
const Input=(props)=>{
    const {placeholder,onChange}=props;
    return <div><input  type="text" placeholder={placeholder} className="px-4 py-2 border rounded m-2" onChange={onChange} /></div>
}
