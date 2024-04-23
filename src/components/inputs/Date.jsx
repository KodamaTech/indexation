import { Input } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";

function Date() {
	return (
		<Box w="250px">
			<label>
				Last modified date
				<Input variant="flushed" type="date" />
			</label>
		</Box>
	);
}

export default Date;
