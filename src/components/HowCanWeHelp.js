import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import Text from "./common/Text";
import SquareElement from "./common/SquareElement";
import Card from "./common/Card";
import Icons_1 from "../assets/Icons/box-search.svg";
import Icons_2 from "../assets/Icons/code.svg";
import Icons_3 from "../assets/Icons/empty-wallet.svg";
import Icons_4 from "../assets/Icons/chart-square.svg";
import Dot from "./common/Dot";

function HowCanWeHelp() {
    const cardData = [
        {
            src: Icons_1,
            bg: "bg-[#F1F7FF]",
            heading: "Business Idea Planning",
            text: "We present you a proposal and discuss niffty-gritty like",
        },
        {
            src: Icons_2,
            bg: "bg-[#FFF2F8]",
            heading: "Development Website and App",
            text: "Communication protocols apart from engagement models",
        },
        {
            src: Icons_3,
            bg: "bg-[#FFF7E3]",
            heading: "Financial Planning System",
            text: "Protocols apart from aengage models, pricing billing",
        },
        {
            src: Icons_4,
            bg: "bg-[#DEFFEE]",
            heading: "Market Analysis Project",
            text: "Protocols apart from aengage models, pricing billing",
        },
    ];

    return (
        <section className="mb-[170px]">
            <Container
                id="wrapper__HowCanWeHelp"
                className="relative pr-0 mr-0"
            >
                <Dot className="dot-2 left-0 bottom-11 -z-30" />
                <div className="relative min-w-fit">
                    <Heading className="relative leading-tight mb-[30px]">
                        <SquareElement className="w-[178px] bg-[#FFF5DB] rounded-tl-[100px] -top-[60px] -left-[40px]" />
                        How can we help
                        <br />
                        your Business ?
                    </Heading>
                    <Text className="text-[#565656] text-base">
                        We build readymade websites, mobile applications,
                        <br />
                        and elaborate online business services.
                    </Text>
                    <SquareElement className="w-[178px] bg[#FFF5DB] -top-[60px] -left-10" />
                </div>
                <div className="flex gap-x-[34px] w-full justify-center">
                    <div className="flex flex-col gap-y-[30px] relative top-6">
                        <Card data={cardData[0]} />
                        <Card data={cardData[1]} />
                    </div>
                    <div className="flex flex-col gap-y-[30px] relative bottom-14">
                        <Card data={cardData[2]} />
                        <Card data={cardData[3]} className="relative">
                            <SquareElement className="w-[120px] rounded-full border-[8.8px] border-[#FF007A] -bottom-11 -right-10 !-z-30" />
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default HowCanWeHelp;
