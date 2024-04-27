export function Label({ children, className }) {
    return (<>
        <label className={`font-medium ${className}`}>
            {children}
        </label>
    </>)
}