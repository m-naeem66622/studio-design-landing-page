import React from "react";
import Container from "./common/Container";
import Image from "./common/Image";
import Image_2 from "../assets/image-2.jpeg";
import PlayBtn from "../assets/Icons/play-btn.svg";
import Heading from "./common/Heading";
import Text from "./common/Text";
import SquareElement from "./common/SquareElement";

function GreatSince() {
    return (
        <section className="mb-[181px]">
            <Container className="flex justify-between items-center">
                <div className="relative">
                    <Image
                        src={Image_2}
                        className="w-[550px] h-[372px] rounded-[20px] overflow-hidden shadow-[10px_20px_50px_0px_rgba(0,0,0,0.15)]"
                    />
                    <Image
                        src={PlayBtn}
                        className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer"
                    />
                    <SquareElement className="w-[129px] bg-[#FFF5DB] -bottom-16 rounded-full -right-10" />
                </div>
                <div className="">
                    <div className="relative wrapper max-w-[532px]">
                        <Heading className="mb-[30px] leading-[normal]">
                            Great Digital Product
                            <br />
                            Agency since 2016
                        </Heading>
                        <Text className="text-[#565656] text-base">
                            Our Business Plan is a written document describing a
                            company's core business activites, Objectives, and
                            how it plans to achieve its goals. Our goal is to
                            provide our client high quality Product with modern
                            idea accordingly their budgets and according thir
                            reuirements.
                        </Text>
                        <SquareElement className="w-[178px] bg-[#EFF1FF] rounded-br-[100px] -top-6 -left-10" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default GreatSince;
