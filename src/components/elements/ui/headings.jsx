export function Heading1({ children, className }) {
    return (<>
        <h1 className={`text-5xl font-semibold mb-2 ${className}`}>
            {children}
        </h1>
    </>)
}

export function Heading2({ children, className }) {
    return (<>
        <h2 className={`text-3xl font-semibold mb-2 ${className}`}>
            {children}
        </h2>
    </>)
}

export function Heading3({ children, className }) {
    return (<>
        <h3 className={`text-xl font-semibold mb-2 ${className}`}>
            {children}
        </h3>
    </>)
}