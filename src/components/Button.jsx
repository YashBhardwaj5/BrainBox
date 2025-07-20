
const variantStyles={
    "primary":"bg-indigo-600 text-white",
    "secondary":"bg-indigo-100 text-indigo-600"
}
const sizeStyles={
    "sm":"py-1 px-2 text-sm",
    "md":"py-2 px-4 text-md",
    "lg":"py-4 px-6 text-lg",
}
const defaultStyles=" rounded-md flex items-center"

export const Button=(props)=>{
    const { variant, size, text, startIcon, onClick } = props;
    return <button className={variantStyles[variant]+" "+sizeStyles[size]+ defaultStyles}>{startIcon?<div className="pr-2 font-light">{startIcon}</div>:null}{text}</button>}

