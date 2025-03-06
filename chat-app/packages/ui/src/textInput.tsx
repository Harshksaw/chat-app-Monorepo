
interface TextInputProps{
    placeholder: string;
    size : "small" | "medium" | "large";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function TextInput({
    placeholder,
    size, onChange
}: TextInputProps) {
 
    return(
        <input 
            type="text" 
            placeholder={placeholder}
    style={{
                padding: : size ==="bug"? 20 : 10,
                margin: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",

            }}
        />
    )
}