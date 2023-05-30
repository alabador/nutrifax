import { Button, Card, CardBody, Flex, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import './ResultCard.css'
import InfoModal from "./InfoModal";

interface CardProps {
    foodName: string,
    image: string,
}

export default function ResultCard({foodName, image}:CardProps) {  

    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <>
            <Card mb="8px" className="resultCard" onClick={onOpen}>
                <CardBody >
                    <Flex justify="space-between" align="center" >
                        <Text>{foodName}</Text>
                        <Image
                            src={image}
                            borderRadius='lg'
                            height="30px"
                        />
                    </Flex>
                </CardBody>
            </Card>
            <InfoModal 
                isOpen={isOpen} 
                onOpen={onOpen} 
                onClose={onClose} 
                foodName={foodName}
            />
        </>
    )
}