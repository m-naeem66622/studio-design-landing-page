import React from "react";

function Text({ as, children, className }) {
    const ContainerElement = as || "p";
    return (
        <ContainerElement
            className={`font-normal ${className || ""}`}
        >
            {children}
        </ContainerElement>
    );
}

export default Text;
