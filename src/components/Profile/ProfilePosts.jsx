import { useEffect, useState } from 'react';
import { Grid, VStack, Skeleton, Box } from "@chakra-ui/react";
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
      mt={4}
      mb={4}
    >
      {isLoading && [0,1,2,3,4,5].map((_, index) => (
        <VStack key={index} alignItems={"flex-start"}>
        <Skeleton>
          <Box height="300px" width="100%" bg="gray.300">contents wrapped</Box> 
        </Skeleton>
      </VStack>
      ))}
      {!isLoading && (
        <>
         <ProfilePost img="/img1.png" />
         <ProfilePost img="/img2.png"/>
         <ProfilePost img="/img3.png"/>
         <ProfilePost img="/img4.png"/>
        </>
      )}
      
    </Grid>
  );
}

export default ProfilePosts;
