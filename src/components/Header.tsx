import { HStack, Icon, Menu, Pressable, Text } from "native-base";
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HStack 
      justifyContent="space-between" 
      mt={7}
      alignItems="center"
      px={6}
      bg="white"
    >
      <TouchableOpacity onPress={handleGoBack}>
        <Icon 
          as={AntDesign}
          name="arrowleft"
          size="lg"
        />
      </TouchableOpacity>


      <Text 
        fontSize={21}
        fontWeight="bold"
      >
        {title}
      </Text>

      <Menu
        placement="left top"
        trigger={triggerProps => (
          <Pressable {...triggerProps}>
            <Icon 
              as={Ionicons}
              name="ellipsis-vertical"
              size="md"
            />
          </Pressable>
        )}
      >
        <Menu.Item>Denunciar</Menu.Item>
        <Menu.Item>Entrar em contato</Menu.Item>
        <Menu.Item>Website</Menu.Item>
      </Menu>
    </HStack>
  )
}