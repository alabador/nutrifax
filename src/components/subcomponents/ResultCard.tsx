import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {
    foodName: string,
    image: string,
}

export default function ResultCard({foodName, image}:CardProps) {
    return (
        <Card>
            <CardBody>
                <Flex justify="space-between" align="center">
                    <Text>{foodName}</Text>
                    <Image
                        src={image}
                        borderRadius='lg'
                        height="50px"
                    />
                </Flex>
            </CardBody>
        </Card>
    )
}