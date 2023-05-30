import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import { Common } from "../App";

interface Props {
    common: Common[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    food: string;
}

export default function Home(props:Props) {
    return (
        <>
            <Navbar />
            <Search handleChange={props.handleChange} food={props.food}/>
            <Results common={props.common} />
        </>
    )
}