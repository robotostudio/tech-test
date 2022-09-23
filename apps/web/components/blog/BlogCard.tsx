import {
  AspectRatio,
  Avatar,
  Box,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { Post } from "./data";

import { urlFor } from "../../lib/sanity"


interface BlogCardProps {
  post: Post;
}

// You will need to refactor this component to fit the Sanity elements
// E.g for the image you will need to use Sanity createImageUrlBuilder
// available within lib/sanity.js

export const BlogCard = (props: BlogCardProps) => {
  const { post } = props;
  return (
    <Stack spacing="6">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={urlFor(post?.mainImage).url()}
          objectPosition="top"
          objectFit="cover"
          fallback={<Skeleton />}
          alt={post?.title}
          borderRadius="xl"
        />
      </AspectRatio>
      <Stack spacing="3">
        <Stack spacing="1">
          <Text fontSize="sm" fontWeight="semibold" color="accent">
            News
          </Text>
          <Heading
            size="xs"
            fontWeight="semibold"
            fontSize={{ base: "xl", lg: "2xl" }}
            lineHeight={{ base: "1.5", lg: "2rem" }}
          >
            {post.title}
          </Heading>
        </Stack>
        {/* <Text>{post.excerpt}</Text> */}
      </Stack>
      <HStack spacing="3">
        <Avatar size="md" name={post.author.name} src={urlFor(post.author.image).url()} />
        <Box lineHeight="1.25rem">
          <Text fontSize="sm" color="default">
            {post.author.name}
          </Text>
          <Text fontSize="sm"> {new Date(post.publishedAt).toLocaleString()}</Text>
        </Box>
      </HStack>
    </Stack>
  );
};
