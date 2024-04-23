import { Select } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";

function Country() {
	return (
		<Box w="250px">
			<label>
				Country
				<Select variant="flushed">
					<option value="Turkey">Turkey</option>
					<option value="Japan">Japan</option>
					<option value="Norway">Norway</option>
				</Select>
			</label>
		</Box>
	);
}

export default Country;
