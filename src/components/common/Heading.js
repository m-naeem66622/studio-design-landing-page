import React from "react";

function Heading({ children, className }) {
    return (
        <h1 className={`text-black font-black text-[40px] ${className || ""}`}>
            {children}
        </h1>
    );
}

export default Heading;
