export function Heading1({ children }) {
    return (<>
        <h1 className="text-5xl font-semibold mb-2">
            {children}
        </h1>
    </>)
}

export function Heading2({ children }) {
    return (<>
        <h2 className="text-3xl font-semibold mb-2">
            {children}
        </h2>
    </>)
}

export function Heading3({ children }) {
    return (<>
        <h3 className="text-xl font-semibold mb-2">
            {children}
        </h3>
    </>)
}