import { Box, Text, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";


interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return(
    <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small" >{title}</Text>
          <Stack>
            {children}
          </Stack>
        </Box>
  )
}