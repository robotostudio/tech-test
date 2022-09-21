import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Box as="main" pt={32}>
      <Container maxW="6xl">
        <Heading>Blog page</Heading>
        <Text>List all the blogs available from the CMS here</Text>
      </Container>
    </Box>
  );
}
