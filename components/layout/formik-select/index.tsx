import { useField } from "formik";
import { selectOption } from "../../types/filter";
import Dropdown from "../filters";

interface Props {
  name: string;
  label?: string;
  options: selectOption[];
  isLoading?: boolean;
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
}

const FormikDropdown = ({
  name,
  borderColor,
  options,
  isLoading,
  width,
  height,
  color,
}: Props) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (option: selectOption) => {
    helpers.setValue(option.key); // або весь option, якщо хочеш
  };

  const initialValue =
    options.find((opt) => opt.key === field.value) || options[0];

  return (
    <>
      <Dropdown
        borderColor={borderColor}
        options={options}
        onChange={handleChange}
        initialValue={initialValue}
        isLoading={isLoading}
        width={width}
        height={height}
        color={color}
      />
      {meta.touched && meta.error && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {meta.error}
        </div>
      )}
    </>
  );
};

export default FormikDropdown;
