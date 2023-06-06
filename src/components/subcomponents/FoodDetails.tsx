import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import { detailProps } from "./InfoModal";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./FoodDetails.css"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const dailyValues = {
    carbohydrates: 275,
    cholesterol: 300,
    fiber: 28,
    protein: 50,
    sodium: 2300,
    sugars: 50,
}

export default function FoodDetails(props:detailProps) {

    const data = {
        labels: ['Carbohydrates', 'Cholesterol', 'Fiber', 'Protein', 'Sodium', 'Sugar'],
        datasets: [
            {
            label: '% of Daily Recommended Value',
            data: [ (props.nf_total_carbohydrate ?? 0 / dailyValues.carbohydrates),
                (props.nf_cholesterol ?? 0 / dailyValues.cholesterol),
                (props.nf_dietary_fiber ?? 0 / dailyValues.fiber),
                (props.nf_protein ?? 0 / dailyValues.protein),
                (props.nf_sodium ?? 0 /dailyValues.sodium),
                (props.nf_sugars ?? 0 / dailyValues.sugars),
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    }

    console.log(props.nf_sodium ?? 0 /dailyValues.sodium)
    return(
        <>
            <Box className="foodDetails">
                <List>
                    <ListItem>
                        {props.nf_calories && <Text className="flex-between">Calories: <span>{props.nf_calories}</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_cholesterol && <Text className="flex-between">Cholesterol: <span>{props.nf_cholesterol}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_sodium && <Text className="flex-between">Sodium: <span>{props.nf_sodium}mg</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_sugars && <Text className="flex-between">Sugar: <span>{props.nf_sugars}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_total_carbohydrate && <Text className="flex-between">Carbohydrates: <span>{props.nf_total_carbohydrate}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_protein && <Text className="flex-between">Protein: <span>{props.nf_protein}g</span></Text>}
                    </ListItem>
                    <ListItem>
                        {props.nf_dietary_fiber && <Text className="flex-between">Fiber: <span>{props.nf_dietary_fiber}g</span></Text>}
                    </ListItem>
                </List>
            </Box>
            <Box className="flex-center">
                <Image src={props.photo.thumb}/>
            </Box>
            <Bar data={data} />
        </>
    )
}