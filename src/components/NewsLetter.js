import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import Text from "./common/Text";
import Image from "./common/Image";
import Reactangle from "../assets/rectangle-1.svg";
import Button from "./common/Button";
import SquareElement from "./common/SquareElement";
import Dot from "./common/Dot";

function NewsLetter() {
    return (
        <section className="pt-14 pb-10 mb-[107px]">
            <Container className="!px-0 !pl-[92px] !mx-[120px] flex bg-[#F4F9FF] rounded-[75px] justify-between items-center relative">
                <div className="">
                    <Heading className={"mb-[17px]"}>
                        Subscribe Newsletter
                    </Heading>
                    <Text className="text-[#757575] text-lg">
                        I will update good news and promotion service not spam
                    </Text>
                </div>
                <div className="">
                    <div id="input__wrapper" className="">
                        <input
                            type="text"
                            className="placeholder:text-base placeholder:text-[#959595] text-base text-[#959595] bg-[#FFFFFF] outline-0 ml-[22px] w-[230px] mr-[17px]"
                            placeholder="Enter your email address.."
                        />
                        <Button className="text-base h-[60px]">
                            Contact Now
                        </Button>
                    </div>
                    <Image className="w-[497px]" src={Reactangle} />
                </div>
                <SquareElement className="w-[178px] -bottom-[38px] -left-[38px] rounded-bl-[100px] bg-[#FFF5DB]" />
                <Dot className="-top-[56px] -right-[37px]" />
            </Container>
        </section>
    );
}

export default NewsLetter;
