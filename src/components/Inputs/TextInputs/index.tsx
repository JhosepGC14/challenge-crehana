import { TextField } from "@mui/material";

interface TextInputProps {
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: boolean | string | number;
  onChange: (target: any) => void;
  type?: string;
}

const TextInput = ({
  disabled,
  name,
  label,
  value,
  onChange,
  type = "text",
}: TextInputProps) => {
  const handleChange = ({ target }: any) => {
    onChange(target);
  };
  return (
    <>
      <TextField
        id={name}
        disabled={disabled}
        name={name}
        label={label}
        variant="filled"
        margin="none"
        type={type}
        fullWidth={true}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default TextInput;
