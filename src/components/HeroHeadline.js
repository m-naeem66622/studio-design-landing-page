import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import Image_1 from "../assets/image-1.png";
import Image from "./common/Image";
import Text from "./common/Text";
import Button from "./common/Button";
import SquareElement from "./common/SquareElement";
import Dot from "./common/Dot";

function HeroHeadline() {
    return (
        <section className="mb-[136px]">
            <Container className="flex pr-0 mr-0 justify-between">
                <div className="flex flex-col justify-center max-w-[462px]">
                    <Heading className="mb-[40px]">
                        A Digital Product Agency
                    </Heading>
                    <Text className="mb-[33px] text-base">
                        Leading digital agency with solid design and development
                        expertise. We build readymade websites, mobile
                        applications, and elaborate online business services.
                    </Text>
                    <div className="relative">
                        <Button className="text-xl h-[60px]">
                            Contact Now
                        </Button>
                        <Dot className="dot-2 top-[35px]" />
                    </div>
                </div>
                <div className="relative">
                    <SquareElement className="w-[129px] bg-[#DAE9FF] -translate-x-2/4 rounded-full" />
                    <SquareElement className="w-[178px] bg-[#FFF5DB] rounded-br-full right-[120px] -bottom-[96px]" />
                    <Image
                        src={Image_1}
                        className="w-[754px] h-[512px] rounded-bl-[200px] overflow-hidden"
                    />
                </div>
            </Container>
        </section>
    );
}

export default HeroHeadline;
