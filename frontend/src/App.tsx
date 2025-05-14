import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

function App() {
    return (
        <Box p={8}>
            <Heading mb={4}>Tasklane</Heading>
            <Text mb={4}>Chakra UI is working beautifully ✨</Text>
            <Stack direction="row" h={4}>
                <Button>Click me</Button>
                <Button>Or me</Button>
            </Stack>
        </Box>
    )
}

export default App