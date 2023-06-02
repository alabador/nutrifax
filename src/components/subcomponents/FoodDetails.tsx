import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import { detailProps } from "./InfoModal";
import "./FoodDetails.css"

export default function FoodDetails(props:detailProps) {
    return(
        <>
            <Box className="foodDetails">
                <List>
                    <ListItem>
                        {props.nf_calories && <Text className="flex">Calories: <span>{props.nf_calories}</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_cholesterol && <Text className="flex">Cholesterol: <span>{props.nf_cholesterol}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_sodium && <Text className="flex">Sodium: <span>{props.nf_sodium}mg</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_sugars && <Text className="flex">Sugar: <span>{props.nf_sugars}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_total_carbohydrate && <Text className="flex">Carbohydrates: <span>{props.nf_total_carbohydrate}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_protein && <Text className="flex">Protein: <span>{props.nf_protein}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_dietary_fiber && <Text className="flex">Fiber: <span>{props.nf_dietary_fiber}g</span></Text>}
                    </ListItem>
                </List>
            </Box>
            <Image src={props.photo.highres}/>
        </>
    )
}