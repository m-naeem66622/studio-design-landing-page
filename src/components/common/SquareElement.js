import React from "react";

function SquareElement({ children, className }) {
    return (
        <div className={`absolute aspect-square -z-10 ${className || ""}`}>
            {children}
        </div>
    );
}

export default SquareElement;
