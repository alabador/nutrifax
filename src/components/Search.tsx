import { Center, Container, Input } from "@chakra-ui/react";

export default function Search() {
    return (
        <>
            <Container maxWidth="lg">
                <Center as="section">
                    <Input placeholder="Search for food..."/>
                </Center>
            </Container>
        </>
    )
}