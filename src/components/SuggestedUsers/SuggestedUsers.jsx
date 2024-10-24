import { Flex, Text, VStack, Link, Box } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      {/* Header Section */}
      <SuggestedHeader />

      {/* Suggested Users Header */}
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight="bold"
          _hover={{ color: "gray.400" }}
          cursor="pointer"
        >
          See All
        </Text>
      </Flex>

      {/* Suggested Users */}
        <SuggestedUser  username="Mufti Menk" followers={40000} avatar='Muftimenk.jpeg' />
        <SuggestedUser username="Zakir Naik" followers={50000} avatar='ZakirNaik.jpeg' />
        <SuggestedUser username="Flowers for her" followers={1300} avatar='3.jpeg' />

      {/* Footer Section */}
      <Box fontSize={12} color="gray.500" mt={5} alignSelf="start">
        © 2024 Built By{" "}
        <Link
          href="https://www.linkedin.com/in/hauwa-bukar/"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Hauwah Muhammad Bukar
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
