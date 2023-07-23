import React from "react";

function Text({ children, className }) {
    return (
        <p className={`text-[#565656] font-normal ${className || ""}`}>
            {children}
        </p>
    );
}

export default Text;
