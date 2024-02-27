import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "./logo";

export default function Navbar() {
  return (
    <Box className={"not-print"}>
      <Flex minH={"80px"} py={2} align={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <HStack as="a" href="/">
            <Image
              className="h-10 w-fit"
              width={50}
              height={50}
              src="/fhat-ari.png"
              alt="logo"
            />
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontWeight={600}
              color={"#171716"}
              fontSize={"18px"}
            >
              CVChisel
            </Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
