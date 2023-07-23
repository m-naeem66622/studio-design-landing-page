import React from "react";

function Image({ src, className, objectFit }) {
    return (
        <div className={`image__wrapper ${className || ""}`}>
            <img
                className={`w-full h-full ${objectFit || "object-cover"}`}
                src={src}
                alt=""
            />
        </div>
    );
}

export default Image;
