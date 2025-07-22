export const Input=(props)=>{
    const {placeholder,onChange}=props;
    return <div><input  type="text" placeholder={placeholder} className="px-4 py-2 border rounded m-2" onChange={onChange} /></div>
}