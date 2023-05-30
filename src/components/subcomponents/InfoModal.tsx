import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

interface ModalProps {
    foodName: string,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}


export default function InfoModal(props:ModalProps) {  
    

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
