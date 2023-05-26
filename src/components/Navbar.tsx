import { Container, Flex, Heading } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Container as="header" maxWidth="4xl" py="20px">
            <Heading>Nutrifax</Heading>
        </Container>
    )
}