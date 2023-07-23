import React from "react";

function Button({ children, className }) {
    return (
        <button
            className={`bg-[#2639ED] px-10 py-5 rounded-[60px] tracking-[1.3px] text-white font-normal inline-flex gap-2.5 justify-center items-center ${
                className || ""
            }`}
        >
            <span>{children}</span>
        </button>
    );
}

export default Button;
