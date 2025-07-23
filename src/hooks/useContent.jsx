import { useEffect, useState } from "react"
import { backenduri } from "../config";
import axios from "axios";

export const useContent=()=>{
    const [contents,setContents]=useState([]);
    useEffect(()=>{
        axios.get(backenduri+"/api/v1/content",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then((response)=>{
            // console.log(response);
            setContents(response.data.contents);
        }).catch((err)=>{console.error("Failed to fetch content:", err);})
    },[])
    return contents;
}