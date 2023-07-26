import React from "react";
import Container from "./common/Container";
import Heading from "./common/Heading";
import Text from "./common/Text";
import Image from "./common/Image";
import AirbnbLogo from "../assets/Logo/Airbnb_Logo.svg";
import AmazonLogo from "../assets/Logo/Amazon_Logo.svg";
import GoogleLogo from "../assets/Logo/Google_Logo.svg";
import UberEatsLogo from "../assets/Logo/Uber_Eats_Logo.svg";

function OurClient() {
    return (
        <section className="mb-[150px]">
            <Container className="flex gap-[60px] items-end">
                <div>
                    <Heading className="mb-[17px]">Our Client</Heading>
                    <Text className="text-[#757575] w-[336px] text-lg">
                        Several selected clients, who already believe in our
                        service.
                    </Text>
                </div>
                <Image
                    className="mb-4"
                    objectFit="object-contain"
                    src={GoogleLogo}
                />
                <Image
                    className="mb-4"
                    objectFit="object-contain"
                    src={AirbnbLogo}
                />
                <Image
                    className="mb-7"
                    objectFit="object-contain"
                    src={UberEatsLogo}
                />
                <Image
                    className="mb-3"
                    objectFit="object-contain"
                    src={AmazonLogo}
                />
            </Container>
        </section>
    );
}

export default OurClient;
