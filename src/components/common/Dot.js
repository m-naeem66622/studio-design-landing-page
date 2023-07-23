import React from "react";
import DotSVG from "../../assets/dot.svg";
import Image from "./Image";

function Dot({ className }) {
    return (
        <div className={`absolute flex gap-x-3 ${className || ""}`}>
            <Image
                src={DotSVG}
                // className="absolute w-[196px] h-[154px] top-[35px] -left-[53px] -z-10"
                className="w-[196px] h-[154px] -z-10"
            />
            {className?.includes("dot-2") && (
                <Image
                    src={DotSVG}
                    // className="absolute w-[196px] h-[154px] top-[35px] left-[157px] -z-10"
                    className="w-[196px] h-[154px] -z-10"
                />
            )}
        </div>
    );
}

export default Dot;
