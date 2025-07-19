
const variantStyles={
    "primary":"bg-indigo-600 text-white rounded-md mx-1",
    "secondary":"bg-indigo-100 text-indigo-600 rounded-md mx-1"
}
const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6",
}
export const Button=(props)=>{
    const { variant, size, text, startIcon, onClick } = props;
    return <button className={variantStyles[variant]+" "+sizeStyles[size]}>{text}</button>
}
