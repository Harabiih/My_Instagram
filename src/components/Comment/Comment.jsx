import { Flex, Avatar,Text } from "@chakra-ui/react";

const Comment = ({createdAt,username,profilePic,text}) => {
  return (
    <Flex gap={4}>
        <Avatar src={profilePic} name={username} size={"sm"}/>
        <Flex direction={"column"}>
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>{username}</Text>
                <Text fontSize={"xs"}>{createdAt}</Text>
            </Flex>
            <Text fontSize={12} color={"gray"}>{text}</Text>
        </Flex>
      
    </Flex>
  );
}

export default Comment;
