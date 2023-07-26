import React from "react";
import Text from "./Text";

function FooterOptions({ heading, links }) {
    return (
        <div className="">
            <h1 className="text-2xl mb-6">{heading}</h1>
            <ul className="">
                {links.map((link, index) => (
                    <Text
                        as="li"
                        className="text-black mb-3 text-sm"
                        key={index}
                    >
                        <a href="/">{link}</a>
                    </Text>
                ))}
            </ul>
        </div>
    );
}

export default FooterOptions;
