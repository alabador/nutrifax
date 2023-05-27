import { Container, Text } from "@chakra-ui/react";
import ResultCard from "./subcomponents/ResultCard";
import { ResultProps } from "../pages/Home";

export default function Results(props:ResultProps) {
    return (
        <Container as="section" maxWidth="4xl" py="20px">
            <ResultCard foodName={props.common[0].food_name} image={props.common[0].photo.thumb}/>
        </Container>
    )
}