import React from "react";

const Button = React.forwardRef(({ className, onClick, text, type }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      type={type}
      className={`${className} px-8 py-3 cursor-pointer  rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform`}
    >
      {text}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
