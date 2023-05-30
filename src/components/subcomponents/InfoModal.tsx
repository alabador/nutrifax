import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ModalProps {
    foodName: string,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}


export default function InfoModal(props:ModalProps) {  

    const [details, setDetails] = useState([])
    
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
            setDetails(responseData)
            console.log(details)
        }
        getDetails()
    }, [props.isOpen])

    return(
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.foodName}</ModalHeader>
                    <ModalBody>
                        <Text>test text</Text>
                    </ModalBody>
                    <ModalFooter gap={2}>
                        <Button onClick={props.onClose}>Close</Button>
                        <Button colorScheme="green">Add to Calorie Count</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
