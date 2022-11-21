import { HStack, Icon, Image, IPressableProps, Pressable, Progress, Text, VStack } from "native-base";

import { EvilIcons } from '@expo/vector-icons'

interface SmallCardProps extends IPressableProps { 
  titleOnly?: boolean
}

export function SmallCard({ titleOnly = false, ...rest }: SmallCardProps) {
  return ( 
    <Pressable {...rest}>
      <HStack
        h={titleOnly ? 88 : 40}
        mb={5}
        p={titleOnly ? 3 : 5}
        alignItems="center"
        borderWidth={1}
        borderColor="green.100"
        rounded="md"
      >
        <Image          
          source={require('../assets/card.jpg')}
          alt="Card image"
          rounded="md"
          mr={5}
          w={titleOnly ? "88px" : "96px"}
          h={titleOnly ? "62px" : "118px"}
        />

        <VStack flex={1}>
          <Text 
            numberOfLines={titleOnly ? 2 : 1}
            fontSize="md"
            fontWeight="bold"
          >
            Ajude crianças a voltar para boas escolas
          </Text>

          {!titleOnly && (
            <>
              <HStack alignItems="center" my={1}>
                <Icon as={EvilIcons} name="clock" mr={1} color="gray.400" />

                <Text color="gray.400">
                  8 horas atrás
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text fontWeight="bold" fontSize="lg" mr={1}>
                  R$ 500
                </Text>

                <Text color="gray.400">
                  Doados
                </Text>
              </HStack>

              <HStack alignItems="center" my={2}>
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
            </>
          )}
        </VStack>
      </HStack>
    </Pressable>
  )
}