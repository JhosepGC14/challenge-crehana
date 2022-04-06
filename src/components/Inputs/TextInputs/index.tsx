import { TextField } from "@mui/material";

interface TextInputProps {
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: boolean | string | number;
  errors?: any[];
  onChange: (target: any) => void;
  type?: string;
}

const TextInput = ({
  disabled,
  name,
  label,
  value,
  errors,
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
        // error={errors[name!] ? true : false}
        // helperText={errors[name!] && `${errors[name!]}`}
      />
    </>
  );
};

export default TextInput;
