import { HStack, Text, VStack, Progress  } from "native-base";

export function ProgressCard() {
  return (
    <VStack 
      borderWidth={1}
      borderColor="green.100"
      rounded="lg"
      mt={7}
      p={3}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="md">
          Progresso atual
        </Text>

        <Text color="gray.400">
          8 horas atrás
        </Text>
      </HStack>

      <HStack mt={5} alignItems="center">
        <Progress 
          mr={14}
          value={80} 
          flex={1} 
          _filledTrack={{
            bg: "green.500"
          }}
          h={2}
        />

        <Text color="gray.400" fontSize="xs">
          80%
        </Text>
      </HStack>

      <HStack alignItems="center" mt={2}>
        <Text fontWeight="bold" fontSize="lg" mr={1}>
          R$ 500
        </Text>

        <Text color="gray.400">
          Doados
        </Text>
      </HStack>
    </VStack>
  )
}