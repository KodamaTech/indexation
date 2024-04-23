import { Input } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";

function Amount() {
	return (
		<Box w="300px">
			<label>
				Salary or price for a service (product)
				<Input variant="flushed" placeholder="Amount (USD)" type="number" />
			</label>
		</Box>
	);
}

export default Amount;
