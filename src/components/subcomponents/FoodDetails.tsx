import { Image, Text } from "@chakra-ui/react";
import { detailProps } from "./InfoModal";

export default function FoodDetails(props:detailProps) {
    return(
        <>
            <Text>Calories: {props.nf_calories}</Text>
            <Image src={props.photo.highres}/>
        </>
    )
}