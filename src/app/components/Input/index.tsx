"use client";

import { useEffect, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
interface IProps {
  type: "text" | "email" | "password";
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  validator?: SimpleReactValidator;
  handleChange: (str: string) => void;
}

export const Input = ({
  type,
  name,
  label,
  defaultValue,
  placeholder,
  validator,
  handleChange,
}: IProps): JSX.Element => {
  validator?.hideMessages();
  const [value, setValue] = useState<string>(defaultValue || "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (validator?.allValid()) {
    setError(null)
    }
    if (value) {
        setError(null)
      } 
    }, [validator])
  

  const onBlur = () => {
    console.log("blur");
    console.log("validator", validator);
    validator?.showMessageFor(name);
    if (name === "password") {
      if (value.length < 8) {
        setError("Password must be at least 8 characters long.");
      } else {
        setError(validator?.getErrorMessages()[name]);
      }
    } else if (name === "login") {
      if (value.trim() === "") {
        setError("The login field is required.");
      } else {
        setError(validator?.getErrorMessages()[name]);
      }
    } else if (name === "email") {
      if (value.trim() === "") {
        setError("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setError("Invalid email format.");
      } else {
        setError(validator?.getErrorMessages()[name]);
      }
    } else {
      setError(validator?.getErrorMessages()[name]);
    }

  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = ev.target.value || "";
    if (error) {
      setError('');
    }
    setValue(newValue);
    handleChange(newValue);
  };
  return (
    <div className="mt-8">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        required
        aria-label={label}
        type={type}
        name={name}
        id={name + "_" + label}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
     {error && (
        <div data-testid={`${name}-error`} style={{ color: "red" }}>
          {error}
        </div>
      )}

    </div>
  );
};
