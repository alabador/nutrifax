import { Container, Input } from "@chakra-ui/react";


export default function Search() {
    return (
        <Container as="section" maxWidth="4xl" py="20px"> 
            <Input type='text' placeholder="Search for food..."/>
        </Container>
    )
}