import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = false,
  className = "",
}) => {

  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === "password"

  return (
    <div className="flex flex-col gap-2">

      {label && (
        <label className="text-sm tracking-wide text-gray-300 font-serif">
          {label}
        </label>
      )}

      <div className="relative">

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full font-serif bg-transparent border border-[#2f2f2f] rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-[#dac5a7] focus:shadow-[0_0_15px_rgba(218,197,167,0.3)] ${isPassword ? "pr-12" : ""} ${className}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#dac5a7] hover:drop-shadow-[0_0_6px_rgba(218,197,167,0.6)] transition-all"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        )}

      </div>

    </div>
  );
};

export default InputField;