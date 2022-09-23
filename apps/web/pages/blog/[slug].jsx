import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Skeleton,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { 
  sanityClient ,
} from "../../lib/sanity.server"

import { 
  urlFor,usePreviewSubscription
} from "../../lib/sanity"

// This is the portable text functionality
import { PortableText } from "@portabletext/react";


const blogQuery = `*[_type=='post' && slug.current == $slug ][0]{
  _id,
  title,
  slug,
  body,
  mainImage,
  categories,
  author->{
    name,
    slug
  }
}`


export async function getStaticPaths(context){
  const paths = await sanityClient.fetch(`
    *[_type == 'post' && defined(slug.current)]{
      "params":{
        "slug": slug.current
      }
    }
  `)
  console.log("paths",paths);
  return {
    paths,
    fallback : true
  }
}


export async function getStaticProps({params}) {
  const slug  = params.slug;
  console.log("params: static",slug);
  const blog = await sanityClient.fetch(blogQuery, { slug });
  return {
    props:{
        blog,preview :true
    }
  }
}


export default function BlogPage({blog,preview}) {

  const {data} = usePreviewSubscription(blogQuery, {
    params: {
      slug: blog?.slug.current,
    },
    initialData: blog,
    enabled: preview,
  });
  return (
    <Box as="main" py={{ base: "16", md: "24" }}>
      {
        data && 
      <Container maxW="6xl">
        <Box>
          <AspectRatio ratio={16 / 9} mb={4}>
        
             <Image
              src={urlFor(data.mainImage).url()}
              objectPosition="top"
              objectFit="cover"
              fallback={<Skeleton />}
              alt="Some alt text"
              borderRadius="xl"
            /> 
          </AspectRatio>
          <Box mb={8}>
            <Heading mb={2}>{data && data.title  }</Heading>
            <Link href="/" passHref>
              <ChakraLink>← Back to blog</ChakraLink>
            </Link>
          </Box>
          {/* <Text>
            You will need to replace this text with portable text from here
          </Text> */}
          {/* Like this below 👇 */}
          {
           data.body && <PortableText value={data.body} />
          }
        </Box>
      </Container>
}
    </Box>
  );
}
