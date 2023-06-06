import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FoodDetails from "./FoodDetails";

interface ModalProps {
    foodName: string,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export interface detailProps {
    food_name: string,
    nf_calories?: number,
    nf_cholesterol?: number,
    nf_dietary_fiber?: number,
    nf_protein?: number,
    nf_sodium?: number,
    nf_sugars?: number,
    nf_total_carbohydrate?: number,
    serving_weight_grams?: number,
    photo: {
        highres: string,
        thumb: string,
    }
}


export default function InfoModal(props:ModalProps) {  

    const [details, setDetails] = useState<detailProps>({
        food_name: "apple",
        nf_calories: 0,
        nf_cholesterol: 0,
        nf_dietary_fiber: 0,
        nf_protein: 0,
        nf_sodium: 0,
        nf_sugars: 0,
        nf_total_carbohydrate: 0,
        serving_weight_grams: 0,
        photo: {
            highres: "test",
            thumb: "test",
        }
    })
    
    useEffect(() => {
        async function getDetails(data = {query:props.foodName}) {
            const res = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients' , {
                method: "POST",
                headers: {
                  'x-app-id': `${import.meta.env.VITE_APP_ID}`,
                  'x-app-key': `${import.meta.env.VITE_APP_KEY}`,
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
              })
            const responseData = await res.json()
            setDetails(responseData.foods[0])
            console.log(details)
        }
        if(props.isOpen) {
            getDetails()
        }
    }, [props.isOpen])

    return(
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.foodName}</ModalHeader>
                    <ModalBody>
                        <FoodDetails
                            food_name={details.food_name} 
                            nf_calories={details.nf_calories}
                            nf_cholesterol = {details.nf_cholesterol}
                            nf_dietary_fiber = {details.nf_dietary_fiber}
                            nf_protein = {details.nf_protein}
                            nf_sodium = {details.nf_sodium}
                            nf_sugars = {details.nf_sugars}
                            nf_total_carbohydrate = {details.nf_total_carbohydrate}
                            serving_weight_grams = {details.serving_weight_grams} 
                            photo={details.photo} 
                        />
                    </ModalBody>
                    <ModalFooter gap={2}>
                        <Button onClick={props.onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
