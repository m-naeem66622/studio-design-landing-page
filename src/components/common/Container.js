import React from "react";

function Container({ children, className, ...rest }) {
    return (
        <div
            {...rest}
            className={`content__wrapper mx-12 px-[72px] ${className || ""}`}
        >
            {children}
        </div>
    );
}

export default Container;
