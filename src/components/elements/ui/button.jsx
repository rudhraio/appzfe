export function Button({ children, className, ...props }) {
    // const { className = "" } = props;
    console.log("className", className);
    return (<>
        <button className={`bg-black text-white rounded-sm py-2 font-medium hover:bg-gray-800 ${className}`}>
            {children}
        </button>
    </>)
}