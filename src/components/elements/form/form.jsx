export function Form({ children, ...props }) {
    return (<>
        <form className="flex flex-col gap-3" {...props}>
            {children}
        </form>
    </>)
}