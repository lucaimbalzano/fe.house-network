import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label?: string;
  name: string;
  type?: "text" | "checkbox" | "password" | "number";

};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (type === "checkbox") {
    return (
      <div className="flex items-center mb-4">
        <input
          type={type}
          id={name}
          className="form-checkbox h-4 w-4 text-blue-500"
          {...register(name)}
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
        className="pl-2 outline-none border-none w-full"
        {...register(name)}
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
