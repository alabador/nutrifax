import { Container } from "@chakra-ui/react";
import ResultCard from "./subcomponents/ResultCard";

export default function Results() {
    return (
        <Container as="section" maxWidth="4xl" py="20px">
            <ResultCard />
        </Container>
    )
}