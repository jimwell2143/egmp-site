import React from "react";
import { useFormikContext } from "formik"
import get from "lodash/get"

const Input =  ({ label, name, value, placeholder, isRequired = true, type = "text", className = ""}) => {

  const { errors, touched, values, handleChange, handleBlur } =
  useFormikContext()

  return (
    <>
          <input
            type={type}
            className={className}
            placeholder={placeholder}
            name={name}
            value={get(values, name, "")}
            onChange={handleChange(name)}
        />
    </>
  );
};

export default Input;
