import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import Text from "./common/Text";
import Image_3 from "../assets/image-3.jpeg";
import Image from "./common/Image";
import Dot from "./common/Dot";
import SquareElement from "./common/SquareElement";
import client_1 from "../assets/Clients/client-1.jpeg";
import client_2 from "../assets/Clients/client-2.jpeg";
import client_3 from "../assets/Clients/client-3.jpeg";
import client_4 from "../assets/Clients/client-4.jpeg";
import client_5 from "../assets/Clients/client-5.jpeg";
import client_6 from "../assets/Clients/client-6.jpeg";
import client_7 from "../assets/Clients/client-7.jpeg";
import client_8 from "../assets/Clients/client-8.jpeg";

function HappyClient() {
    return (
        <section className="mb-[92px]">
            <Container className="flex flex-col pr-0">
                <div className="text-center mb-28">
                    <Heading className="mb-4">
                        What our happy client say
                    </Heading>
                    <Text className="text-[#757575] text-lg leading-[28.80px]">
                        Several selected clients, who already believe in our
                        service.
                    </Text>
                </div>
                <div className="flex justify-between">
                    <div className="relative w-[390px]">
                        <Image
                            className="w-[389px] aspect-square rounded-full rounded-tr-none overflow-hidden shadow-custom"
                            src={Image_3}
                        />
                        <Dot className="-right-9 -top-[42px]" />
                        <SquareElement className="w-[120px] rounded-full border-[8.8px] border-[#FF007A] bottom-3 -left-[10px] !-z-30" />
                    </div>
                    <div className="max-w-[412px] m-3">
                        <h1 className="text-black text-2xl mb-6">
                            Matthew Paul
                        </h1>
                        <Text className="text-[#565656] text-base leading-relaxed">
                            Perfect, very good job! Thank you for the amazing
                            design and work. Really impressed with the high
                            quality and quick turnaround time. Highly recommend.
                        </Text>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-174 grid-rows-355 w-[348px] h-[355px]">
                            <SquareElement className="w-[" />
                            <Image
                                src={client_1}
                                className="w-[120px] aspect-square col-start-[124] row-start-[107] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_2}
                                className="w-[98px] aspect-square col-start-[0] row-start-[59] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_3}
                                className="w-[68px] aspect-square col-start-[136] row-start-[0] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_4}
                                className="w-[54px] aspect-square col-start-[250] row-start-[64] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_5}
                                className="w-[54px] aspect-square col-start-[294] row-start-[151] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_6}
                                className="w-[68px] aspect-square col-start-[226] row-start-[228] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_7}
                                className="w-[98px] aspect-square col-start-[98] row-start-[258] rounded-full overflow-hidden"
                            />
                            <Image
                                src={client_8}
                                className="w-[68px] aspect-square col-start-[0] row-start-[204] rounded-full overflow-hidden"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default HappyClient;
