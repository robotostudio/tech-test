import {
  Box,
  Container,
  Stack,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BlogCard } from "../../components/blog/BlogCard";
import { posts } from "../../components/blog/data";
import { 
  sanityClient ,
} from "../../lib/sanity.server"


const blogQuery = `*[_type=='post']{
  _id,
  title,
  slug,
  body,
  mainImage,
  categories,
  publishedAt,
  author->{
    name,
    slug,
    image,
    bio
  }
}`



export async function getServerSideProps(context) {
  const blogs = await sanityClient.fetch(blogQuery);

  console.log("blogs",blogs);
  return {
    props: {
      blogs
    }, // will be passed to the page component as props
  }
}


export default function Blog({blogs}) {
  return (
    <Box as="main" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Box mb={8}>
          <Heading mb={2}>List all blog posts page</Heading>
          <Link href="/" passHref>
            <ChakraLink>← Back to homepage</ChakraLink>
          </Link>
          <Text mt={4}>This page will list all of the blog posts Ships</Text>
        </Box>
        <Stack spacing={8} shouldWrapChildren>
          <Box maxW="3xl" mx="auto">
            <Stack spacing="16">
              {/* Instead of posts, fetch the data from Sanity and show those blog posts */}
              {blogs && blogs.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
