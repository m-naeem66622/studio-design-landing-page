import React from "react";
import Text from "./common/Text";
import Container from "./common/Container";
import Image from "./common/Image";
import Facebook from "../assets/Logo/facebook.svg";
import LinkedIn from "../assets/Logo/linkedin.svg";
import Twitter from "../assets/Logo/twitter.svg";
import FooterOptions from "./common/FooterOptions";

function Footer() {
    const footerData = [
        {
            heading: "What We Do",
            links: [
                "Web Design",
                "App Design",
                "Social Media Manage",
                "Market Analysis Project",
            ],
        },
        {
            heading: "Company",
            links: ["About Us", "Career", "Become Investor"],
        },
        {
            heading: "Support",
            links: ["FAQ", "Policy", "Business"],
        },
        {
            heading: "Contact",
            links: ["WhatsApp", "Support 24"],
        },
    ];
    return (
        <section>
            <Container className="flex flex-col">
                <div className="h-[1px] bg-[#E4E4E4] mb-[60px]"></div>
                <div className="flex mb-[29px] gap-x-48">
                    <div className="max-w-[270px]">
                        <div className="text-black text-[27.147px] leading-[34px] mb-[26px]">
                            <span className="font-bold">A+</span>
                            <span className="font-normal"> Studio</span>
                        </div>
                        <Text className="text-[#565656] text-sm leading-snug mb-10">
                            Leading digital agency with solid design and
                            development expertise. We build readymade websites,
                            mobile applications, and elaborate online business
                            services.
                        </Text>
                        <div className="flex gap-x-4">
                            <Image src={Facebook} />
                            <Image src={LinkedIn} />
                            <Image src={Twitter} />
                        </div>
                    </div>
                    <div className="flex w-full justify-between">
                        {footerData.map((data, index) => (
                            <FooterOptions key={index} {...data} />
                        ))}
                    </div>
                </div>
                <div className="h-[1px] bg-[#F1F1F1] mb-[17px]"></div>
                <Text className="text-[#757575] text-lg text-center mb-6 leading-snug">
                    Copyright © 2022 Avi Yansah
                </Text>
            </Container>
        </section>
    );
}

export default Footer;
