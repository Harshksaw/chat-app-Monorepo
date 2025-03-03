
interface TextInputProps{
    placeholder: string;
}
export function TextInput({
    placeholder
}: TextInputProps) {
 
    return(
        <input 
            type="text" 
            placeholder={placeholder}
    style={{
                padding: "10px",
                margin: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",

            }}
        />
    )
}