import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import { BlogPageHeader } from "../../components/blog/BlogPageHeader";
import { BlogCard } from "../../components/blog/BlogCard";
import { posts } from "../../components/blog/data";

export default function Blog() {
  return (
    <Container py={{ base: "16", md: "24" }} maxW="6xl">
      <Stack spacing={8} shouldWrapChildren>
        <BlogPageHeader />
        <Box maxW="3xl" mx="auto">
          <Stack spacing="16">
            {/* Instead of posts, fetch the data from Sanity and show those blog posts */}
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
