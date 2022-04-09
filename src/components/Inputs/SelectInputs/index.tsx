import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { OptionSelect } from "../../../models/OptionsSelect.models";

interface SelectCustomProps {
  name?: string;
  label?: string;
  value?: boolean | string | number;
  onChange: (target: any) => void;
  options: OptionSelect[];
}

const SelectCustom = ({
  name,
  label,
  value,
  onChange,
  options = [],
}: SelectCustomProps) => {
  const handleChange = ({ target }: any) => {
    onChange(target);
  };

  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id={`label-${name}`}>{label}</InputLabel>
        <Select
          labelId={`label-${name}`}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          label={label}
          defaultValue=""
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          {options.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCustom;
