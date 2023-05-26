import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

export default function ResultCard() {
    return (
        <Card>
            <CardBody>
                <Flex justify="space-between" align="center">
                    <Text>Food</Text>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        height="50px"
                    />
                </Flex>
            </CardBody>
        </Card>
    )
}