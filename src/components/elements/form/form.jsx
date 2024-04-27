export function Form({ children, className, ...props }) {
    return (<>
        <form className={`flex flex-col gap-3 ${className}`} {...props}>
            {children}
        </form>
    </>)
}