import React from "react";
import Image from "./Image";
import SquareElement from "./SquareElement";
import Heading from "./Heading";
import Text from "./Text";

function Card({ children, className, data }) {
    const { src, bg, heading, text } = data;

    return (
        <div className={`card ${className || ""}`}>
            <SquareElement
                className={`w-[121px] !static !z-10 flex items-center justify-center rounded-[20px] ${bg}`}
            >
                <Image src={src} />
            </SquareElement>
            <h1 className="text-2xl">{heading}</h1>
            <Text className="text-base">{text}</Text>
            {children}
        </div>
    );
}

export default Card;
