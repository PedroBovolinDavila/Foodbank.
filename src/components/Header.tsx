import { HStack, Icon, Menu, Pressable, Text } from "native-base";
import { AntDesign, Ionicons } from '@expo/vector-icons'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <HStack 
      justifyContent="space-between" 
      mt={7}
      alignItems="center"
      px={6}
    >
      <Icon 
        as={AntDesign}
        name="arrowleft"
        size="lg"
      />

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