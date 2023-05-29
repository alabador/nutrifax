import { Container, Card, CardBody, Image, Text} from "@chakra-ui/react";
import ResultCard from "./subcomponents/ResultCard";
import { Common } from "../App";

interface Results {
    common: Common[],
    
}

export default function Results(props:Results) {
    const searchResults:Array<Common> = props.common;
    return (
        <Container as="section" maxWidth="4xl" py="20px">
            {props.common ? searchResults.map((result, index) => {
                return (
                <ResultCard 
                    key={result.food_name + index}
                    foodName={result.food_name} 
                    image={result.photo.thumb} 
                />
                )
            }) : (
                <Card direction={"row"} align={"center"}>
                    <CardBody >
                        <Text>No results found.</Text>
                    </CardBody>
                    <Image 
                        w={"200px"} 
                        src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    />
                </Card>
            )}
        </Container>
    )
}