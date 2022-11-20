import { HStack, Icon, IconButton, Text } from "native-base";
import { Ionicons } from '@expo/vector-icons'

export function Header() {
  return (
    <HStack 
        mt={12} 
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <HStack>
          <Text
            fontWeight="bold"
            fontSize="3xl"
          >
            Food
          </Text>
          <Text
            fontWeight="bold"
            fontSize="3xl"
            color="green.500"
          >
            bank.
          </Text>
        </HStack>

        <IconButton 
          icon={<Icon as={Ionicons} name="notifications-outline" />}
          rounded="full"
          _icon={{
            size: "xl",
            color: "black"
          }}
        />
      </HStack>
  )
}