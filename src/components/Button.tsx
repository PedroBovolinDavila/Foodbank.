import { Button as NativeBaseButton, IButtonProps as NativeBaseButtonProps, Text } from "native-base"

interface ButtonProps extends NativeBaseButtonProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      bg="green.500"
      p={4}
      rounded="md"

      _pressed={{
        bg: "green.400"
      }}

      {...rest}
    >
      <Text
        color="white"
        fontSize="md"
        fontWeight="bold"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}