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
import { 
  sanityClient ,
} from "../../../lib/sanity.server"



const blogQuery =`*[_type=="category" && title==$title ][0]{
  "blogs":*[_type=="post" && references(^._id)]{
    _id,
    title,
    slug,
    body,
    mainImage,
    categories,
    author->{
      name,
      slug,
      image,
      bio
    }
  }
}`;


export async function getStaticPaths(context){
  const paths = await sanityClient.fetch(`
    *[_type == 'post' && defined(title)]{
      "params":{
        "title": title
      }
    }
  `)
  console.log("paths",paths);
  return {
    paths,
    fallback : true
  }
}


export async function getStaticProps({ params }) {
  const title  = params.title;
  const blogs = await sanityClient.fetch(blogQuery, { title });
  console.log("b;ogs", blogs);
  const finalBlogs = blogs?.blogs  !== undefined  ? blogs?.blogs : null;  
  return {
    props: {
      blogs: finalBlogs
    },
  };
}



export default function Categories({blogs}) {
  console.log("categories: ",blogs);
  
  return (
    <Box as="main" py={{ base: "16", md: "24" }}>
      {
        blogs && 
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
              {
                blogs && blogs.map((post)=>(
                  <BlogCard key={post._id} post={post} />
                ))
              }
              {/* Instead of posts, fetch the data from Sanity and show those blog posts */}
              {/* {posts.map((post) => (
              ))} */}
            </Stack>
          </Box>
        </Stack>
      </Container>
    }
    </Box>
  );
}
