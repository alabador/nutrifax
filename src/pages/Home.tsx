import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export interface ResultProps {
    common: []
    branded: []
}

export default function Home(props:ResultProps) {
    return (
        <>
            <Navbar />
            <Search />
            <Results common={props.common} branded={props.branded}/>
        </>
    )
}