import { HStack, Icon, Image, Pressable, Progress, Skeleton, Text, useTheme, VStack } from "native-base";

import { EvilIcons } from '@expo/vector-icons';
import { Alert, Dimensions } from "react-native";

export function Card() {
  const { sizes } = useTheme()

  return (
    <Pressable onPress={() => Alert.alert('doacao')}>
      <VStack 
        borderWidth={1}
        borderColor="green.100"
        p={5}
        mr={2}
        rounded="md"
        w={Dimensions.get('window').width - (sizes[4] * 2)}
      >
        <Image 
          source={require('../assets/card.jpg')}
          alt="Card image"
          rounded="md"
          h={200}          
        />

        <Text 
          fontSize={16}
          fontWeight="bold"
          mt={13}
          numberOfLines={1}
        >
          Comida para promover vidas na África 123
        </Text>

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

        <HStack justifyContent="space-between" alignItems="center">
          <VStack>
            <Text color="gray.400" fontSize="xs">
              Doações feitas
            </Text>

            <Text fontWeight="bold" fontSize="lg">
              R$ 54.000
            </Text>
          </VStack>

          <HStack alignItems="center">
            <Icon as={EvilIcons} name="clock" mr={1} color="gray.400" />

            <Text color="gray.400">
              8 horas atrás
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Pressable>
  )
}