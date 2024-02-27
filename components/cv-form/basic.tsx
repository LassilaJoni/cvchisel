"use client";

import useBasic from "@/app/stores/basic";
import {
  Box,
  Card,
  CardBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

function BasicForm() {
  const {
    name,
    email,
    location,
    website,
    phoneNumber,
    wantedJobTitle,
    setName,
    setEmail,
    setLocation,
    setWebsite,
    setPhoneNumber,
    setWantedJobTitle,
  } = useBasic((state) => state);

  const Editor = dynamic(() => import("@/components/editor"), {
    ssr: false,
  });

  return (
    <Card>
      <CardBody>
        <Stack spacing="4">
          <Box>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder=""
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Wanted Job Title</FormLabel>
              <Input
                value={wantedJobTitle}
                onChange={(e) => setWantedJobTitle(e.target.value)}
                type="text"
                placeholder=""
              />
            </FormControl>
          </Box>

          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "70%" }}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder=""
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", md: "30%" }}>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder=""
                />
              </FormControl>
            </Box>
          </Flex>
          <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
            <Box width={{ base: "100%", md: "70%" }}>
              <FormControl>
                <FormLabel>Website</FormLabel>
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  type="text"
                  placeholder=""
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", md: "30%" }}>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder=""
                />
              </FormControl>
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BasicForm;
