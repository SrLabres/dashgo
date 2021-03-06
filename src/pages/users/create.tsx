import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export default function CreateUser() {
  return ( 
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid  minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid  minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="passoword_confirmation" type="password" label="Comfirmar a senha" />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
               <Button colorScheme="whiteAlpha">Cancelar</Button> 
               <Button colorScheme="pink">Salvar</Button>              
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}