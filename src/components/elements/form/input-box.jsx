export function InputBox(props) {
    const { type = "text" } = props;
    return (<>
        <input type={type} className="p-2 border rounded-sm focus:ring-1 focus:ring-black focus:outline-none" />
    </>)
}