import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}) {
  return (
    <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
          <Text>Josué Labres</Text>
          <Text color="gray.300" fontSize="small">josue.labres.cruz@gmail.com</Text>
        </Box>
        )}
        <Avatar size="md" name="Josué Labres"  />
      </Flex>
  )
}