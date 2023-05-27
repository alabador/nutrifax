import { Container, Text } from "@chakra-ui/react";
import ResultCard from "./subcomponents/ResultCard";
import { ResultProps } from "../pages/Home";
import { Common } from "../App";

export default function Results(props:ResultProps) {
    const searchResults:Array<Common> = props.common;
    return (
        <Container as="section" maxWidth="4xl" py="20px">
            {searchResults.map((result, index) => {
                return (
                <ResultCard 
                    foodName={result.food_name} 
                    image={result.photo.thumb} 
                />
                )
            })}
            <ResultCard foodName={props.common[0].food_name} image={props.common[0].photo.thumb}/>
        </Container>
    )
}