import React from "react";
// import clsx from "clsx";

// const styleMap = {
//     header: "text-4xl font-bold",
//     section: "",
//     h3: "",
//     h4: "",
//     h5: "",
//     h6: "",
//     p: "text-base",
// };

// function Container(props) {
//     const { as, children, className, ...rest } = props;
//     const ContainerElement = as;

//     console.log(rest);
//     return (
//         <ContainerElement className={`mx-12 px-6 ${className || ""}`}>
//             {children}
//         </ContainerElement>
//     );
// }

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
