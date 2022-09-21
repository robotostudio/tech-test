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

// This is the portable text functionality
import { PortableText } from "@portabletext/react";

export default function helloWorld() {
  return (
    <Box as="main" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Box>
          <AspectRatio ratio={16 / 9} mb={4}>
            <Image
              src="https://tinyurl.com/4wzh2ph9"
              objectPosition="top"
              objectFit="cover"
              fallback={<Skeleton />}
              alt="Some alt text"
              borderRadius="xl"
            />
          </AspectRatio>
          <Box mb={8}>
            <Heading mb={2}>Hello world</Heading>
            <Link href="/" passHref>
              <ChakraLink>← Back to blog</ChakraLink>
            </Link>
          </Box>
          <Text>
            You will need to replace this text with portable text from here
          </Text>
          {/* Like this below 👇 */}
          {/* <PortableText value={richText} /> */}
        </Box>
      </Container>
    </Box>
  );
}
