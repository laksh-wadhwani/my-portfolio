import React, { useRef } from "react";

const InputFile = ({
  label,
  multiple = false,
  files,
  setFiles,
  className = "",
}) => {

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (multiple) {
      setFiles((prev) => [...prev, ...selectedFiles]);
    } else {
      setFiles(selectedFiles[0]);
    }
  };

  // remove single file
  const removeSingle = () => {
    setFiles(null);
  };

  // remove specific screenshot
  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
  };

  return (
    <div className="flex flex-col gap-3">

      {label && (
        <label className="text-sm tracking-wide text-gray-300 font-serif">
          {label}
        </label>
      )}

      {/* Upload Box */}
      <div
        onClick={() => inputRef.current.click()}
        className={`relative w-40 h-40 rounded-xl border-2 border-dashed border-[#2f2f2f]
        flex flex-col items-center justify-center gap-2 cursor-pointer
        transition-all duration-300
        hover:border-[#dac5a7]
        hover:shadow-[0_0_20px_rgba(218,197,167,0.25)]
        ${className}`}
      >

        <span className="text-3xl text-[#dac5a7]">+</span>

        <p className="text-xs text-gray-400 text-center px-3 font-serif">
          {multiple ? "Upload Screenshots" : "Upload Thumbnail"}
        </p>

        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />

      </div>

      {/* Preview */}
      <div className="flex gap-4 flex-wrap mt-2">

        {multiple
          ? files?.map((file, index) => (
              <div key={index} className="relative w-28 h-28 group">

                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg border border-[#2f2f2f]"
                />

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#1d1d1d] border border-[#2f2f2f] 
                  rounded-full text-xs text-white flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  hover:border-red-500 hover:text-red-500"
                >
                  ×
                </button>

              </div>
            ))

          : files && (
              <div className="relative w-28 h-28 group">

                <img
                  src={URL.createObjectURL(files)}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg border border-[#2f2f2f]"
                />

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={removeSingle}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#1d1d1d] border border-[#2f2f2f]
                  rounded-full text-xs text-white flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  hover:border-red-500 hover:text-red-500"
                >
                  ×
                </button>

              </div>
            )}

      </div>

    </div>
  );
};

export default InputFile;