import { Box, Image, Text } from "@chakra-ui/react";
import { detailProps } from "./InfoModal";

export default function FoodDetails(props:detailProps) {
    return(
        <>
            <Box>
                <Text>Calories: {props.nf_calories}</Text>
                <Text>Cholesterol: {props.nf_cholesterol}g</Text>
                <Text>Sodium: {props.nf_sodium}mg</Text>
                <Text>Sugar: {props.nf_sugars}g</Text>
                <Text>Carbohydrates: {props.nf_total_carbohydrate}g</Text>
                <Text>Protein: {props.nf_protein}g</Text>
                <Text>Fiber: {props.nf_dietary_fiber}g</Text>
            </Box>
            <Image src={props.photo.highres}/>
        </>
    )
}