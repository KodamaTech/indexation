import { Flex } from "@chakra-ui/react";
import Amount from "./inputs/Amount";
import Date from "./inputs/Date";
import Country from "./inputs/Country";

function Inputs() {
	return (
		<Flex mt="8" justify="space-evenly">
			<Amount />
            <Date />
            <Country />
		</Flex>
	);
}

export default Inputs;
