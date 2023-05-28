import { Container, Input } from "@chakra-ui/react";

interface Change {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    food: string;
}

export default function Search({handleChange, food}:Change) {
    return (
        <Container as="section" maxWidth="4xl" py="20px"> 
            <Input 
                type='text' 
                placeholder="Search for food..."
                value={food}
                onChange={handleChange}
            />
        </Container>
    )
}