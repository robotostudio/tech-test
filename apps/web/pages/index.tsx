import {
  Box,
  Container,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Index() {
  return (
    <Box as="main" pt={32}>
      <Container maxW="6xl">
        <Heading>Roboto Tech Test</Heading>
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
          </ChakraLink>
        </Text>
        <Stack mt={4}>
          <Link href="/blog" passHref>
            <ChakraLink textDecoration="underline">Blog list page</ChakraLink>
          </Link>
          <Link href="/blog/hello-world" passHref>
            <ChakraLink textDecoration="underline">Blog single page</ChakraLink>
          </Link>
          <Link href="/blog/press-release" passHref>
            <ChakraLink textDecoration="underline">
              Press release (list of tagged blog posts tagged with
              &apos;press-release&apos;)
            </ChakraLink>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
