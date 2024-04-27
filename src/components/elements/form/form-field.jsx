

export function FormField({ children, className }) {
    return (<>
        <div className={`flex flex-col mb-2 max-w-lg gap-y-1 ${className}`}>
            {children}
        </div>
    </>)
}