import { Container, Heading, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Container as="header" maxWidth="4xl" py="20px" display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Heading>Nutrifax</Heading>
            <Text>Search for nutrition details on your favorite foods.</Text>
        </Container>
    )
}