import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import { Common } from "../App";

interface Props {
    common: Common[],
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Home(props:Props) {
    return (
        <>
            <Navbar />
            <Search />
            <Results common={props.common} />
        </>
    )
}