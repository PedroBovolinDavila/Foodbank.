import { HStack, Image, Text, VStack } from "native-base";

export function Organizer() {
  return (
    <HStack mt={10} mb={10} alignItems="center">
      <Image 
        source={{ uri: 'https://i.pravatar.cc/500' }} 
        alt=""
        w={12}
        h={12}
        mr={4}
        rounded="md"
      />

      <VStack >
        <Text fontSize="lg" fontWeight="bold">Suzana's organization</Text>
        <Text color="green.500">Organização verificada</Text>
      </VStack>
    </HStack>
  )
}