export function Button({ children, className, ...props }) {
    return (<>
        <button className={`bg-black text-white rounded-sm py-2 font-medium hover:bg-gray-800 ${className}`} {...props}>
            {children}
        </button>
    </>)
}