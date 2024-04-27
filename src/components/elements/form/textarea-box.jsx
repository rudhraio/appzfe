function TextareaBox({ className, ...props }) {
    return (<>
        <textarea rows="3" className={`p-2 border rounded-sm focus:ring-1 focus:ring-black focus:outline-none ${className}`} {...props}></textarea>
    </>)
}

export default TextareaBox;