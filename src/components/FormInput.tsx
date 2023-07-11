import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label?: string;
  name: string;
  type?: "text" | "checkbox" | "password" | "number" | "email";
  defaultValue?: string | number | boolean;
  defaultChecked?: boolean;

};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  defaultValue,
  defaultChecked,
  ...props
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [fieldValue, setFieldValue] = useState<string | number | boolean | undefined>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFieldValue(newValue);
  };

  useEffect(() => {
    if(defaultChecked){
      setValue(name, defaultValue);
    } else {
      setValue(name, fieldValue);
    }
  }, [name, defaultChecked]);

  if (type === "checkbox") {
    return (
      <div className="flex items-center mb-4 ">
          <input
            type={type}
            id={name}
            className={`form-checkbox h-4 w-4 text-blue-500 ${defaultChecked ? `bg-gray-300 select-none` : 'bg-white'}`}
            {...register(name)}
            onChange={handleChange}
            readOnly={defaultChecked}
          />

        <label htmlFor={name} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          {label}
        </label>
        {errors[name] && (
          <span className="text-red-500 text-xs pt-1 block">
            {errors[name]?.message as string}
          </span>
        )}
      </div>
    );
  } 


  return (
    <div className="">
      {/* <label htmlFor={name} className="block text-ct-blue-600 mb-3">
        {label}
      </label> */}
      <input
        type={type}
        placeholder={label}
        className={`pl-2 outline-none border-none w-full ${defaultChecked ? `bg-gray-300 select-none` : 'bg-white'}`}
        {...register(name)}
        onChange={handleChange}
        readOnly={defaultChecked}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;