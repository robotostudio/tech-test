import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const BlogPageHeader = () => {
  return (
    <Box pt="8" pb="16">
      <Stack spacing={{ base: "8", md: "10" }} align="center">
        <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
          <Stack spacing="4">
            <Text
              fontWeight="semibold"
              color="pink"
              fontSize={{ base: "sm", md: "md" }}
            >
              Our Blog
            </Text>
            <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
              Latest Updates
            </Heading>
          </Stack>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" color="gray.500">
            Ice cream pudding dragée macaroon donut marzipan chocolate
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
