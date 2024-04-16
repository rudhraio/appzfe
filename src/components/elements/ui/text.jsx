export function Text({ children, className, ...props }) {
    return (<>
        <p className={`mb-1 ${className}`} {...props}>
            {children}
        </p>
    </>)
}