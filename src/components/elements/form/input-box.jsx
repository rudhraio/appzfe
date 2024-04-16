export function InputBox({ type = "text", className, ...props }) {
    return (<>
        <input type={type} className={`p-2 border rounded-sm focus:ring-1 focus:ring-black focus:outline-none ${className}`} {...props} />
    </>)
}