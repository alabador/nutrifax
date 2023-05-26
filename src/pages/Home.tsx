import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Search from "../components/Search";

export default function Home() {
    return (
        <>
            <Container as="section" maxWidth="lg">
                <Heading>Chakra UI Components</Heading>
                <Text>Test to see nutrition</Text>

                <Box my="30px" p={"20px"} bg="orange" borderRadius="4px">
                    <Text>This is a box</Text>
                </Box>
            </Container>

            <Search />
            
        </>
    )
}