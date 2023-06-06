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

    const options = {
        scales: {
            y: {
                max: props.nf_sodium ?? 0 + 50
            }
        }
    }

    const data = {
        labels: ['Carbohydrates', 'Cholesterol', 'Fiber', 'Protein', 'Sodium', 'Sugar'],
        datasets: [
            {
            label: `% Daily Value per 2000 Calories`,
            data: [ (props.nf_total_carbohydrate! / dailyValues.carbohydrates),
                (props.nf_cholesterol! / dailyValues.cholesterol),
                (props.nf_dietary_fiber! / dailyValues.fiber),
                (props.nf_protein! / dailyValues.protein),
                (props.nf_sodium! / dailyValues.sodium),
                (props.nf_sugars! / dailyValues.sugars),
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

                    {props.nf_total_carbohydrate ? <ListItem>
                         <Text className="flex-between">Carbohydrates: <span>{props.nf_total_carbohydrate}g</span></Text>
                    </ListItem> : null}
                    
                    {props.nf_cholesterol ? <ListItem>
                         <Text className="flex-between">Cholesterol: <span>{props.nf_cholesterol}g</span></Text>
                    </ListItem> : null}

                    {props.nf_dietary_fiber ? <ListItem>
                        <Text className="flex-between">Fiber: <span>{props.nf_dietary_fiber}g</span></Text>
                    </ListItem> : null}    

                    {props.nf_protein ? <ListItem>
                        <Text className="flex-between">Protein: <span>{props.nf_protein}g</span></Text>
                    </ListItem> : null}
                    
                    {props.nf_sodium ? <ListItem>
                        <Text className="flex-between">Sodium: <span>{props.nf_sodium}g</span></Text>
                    </ListItem> : null}

                    {props.nf_sugars ? <ListItem>
                        <Text className="flex-between">Sugar: <span>{props.nf_sugars}g</span></Text>
                    </ListItem> : null}

                </List>
            </Box>
            <Box className="flex-center">
                <Image src={props.photo.thumb}/>
            </Box>
            <Bar data={data} />
        </>
    )
}