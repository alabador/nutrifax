import { Container} from "@chakra-ui/react";
import ResultCard from "./subcomponents/ResultCard";
import { Common } from "../App";

interface Results {
    common: Common[],
    
}

export default function Results(props:Results) {
    const searchResults:Array<Common> = props.common;
    return (
        <Container as="section" maxWidth="4xl" py="20px">
            {searchResults.map((result, index) => {
                return (
                <ResultCard 
                    key={result.food_name + index}
                    foodName={result.food_name} 
                    image={result.photo.thumb} 
                />
                )
            })}
        </Container>
    )
}