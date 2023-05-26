import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home() {
    return (
        <>
            <Navbar />
            <Search />
            <Results />
        </>
    )
}