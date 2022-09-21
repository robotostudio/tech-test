import {
  Box,
  Container,
  Stack,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BlogCard } from "../../../components/blog/BlogCard";
import { posts } from "../../../components/blog/data";

export default function Blog() {
  return (
    <Box as="main" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Box mb={8}>
          <Heading mb={2}>Sailing ships tagged page</Heading>
          <Link href="/" passHref>
            <ChakraLink>← Back to homepage</ChakraLink>
          </Link>
          <Text mt={4}>
            This page will list all of the blog posts by tag. So for example:
            /sailing-ships will list all the pages with the category Sailing
            Ships
          </Text>
        </Box>

        <Stack spacing={8} shouldWrapChildren>
          <Box maxW="3xl">
            <Stack spacing="16">
              {/* Instead of posts, fetch the data from Sanity and show those blog posts */}
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
