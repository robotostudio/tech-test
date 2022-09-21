import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Index() {
  return (
    <Box as="main" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Heading mb={2}>Roboto Tech Test</Heading>
        <Text>
          Build out the pages below, if you get stuck,{" "}
          <ChakraLink
            textDecoration="underline"
            href="mailto:jono@roboto.studio"
          >
            email me
          </ChakraLink>{" "}
          or refer to the{" "}
          <ChakraLink
            textDecoration="underline"
            href="https://github.com/sanity-io/next-sanity#example-minimal-blog-post-template"
          >
            documentation here
          </ChakraLink>{" "}
          the original test document can be{" "}
          <ChakraLink
            textDecoration="underline"
            href="https://www.notion.so/robotostudio/Tech-Test-f9b7353178ff481abef7c316db5ded85"
          >
            found here
          </ChakraLink>
        </Text>
        <Stack mt={4}>
          <Link href="/blog/hello-world" passHref>
            <ChakraLink textDecoration="underline">Blog single page</ChakraLink>
          </Link>
          <Link href="/blog" passHref>
            <ChakraLink textDecoration="underline">Blog list page</ChakraLink>
          </Link>
          <Link href="/blog/tags/sailing-ships" passHref>
            <ChakraLink textDecoration="underline">
              Sailing Ships (list of tagged blog posts tagged with &apos;Sailing
              Ships&apos;)
            </ChakraLink>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
