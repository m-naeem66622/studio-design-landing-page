import React from "react";
import Container from "./common/Container";

function TopMenu() {
    const menuOptions = [
        "Home",
        "What We Do",
        "Service",
        "Project",
        "Blog",
        "Contact",
    ];
    return (
        <header className="mt-[42px] mb-[40px]">
            <Container className={"flex justify-between"}>
                <div className="text-black text-[27.147px] leading-[34px]">
                    <span className="font-bold">A+</span>
                    <span className="font-normal"> Studio</span>
                </div>
                <nav className="flex items-center">
                    <ul className="flex gap-x-[60px] text-base font-medium">
                        {menuOptions.map((option, index) => (
                            <li key={index}>
                                <a href="/">{option}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default TopMenu;
