import { 
  Input as NativeBaseInput, 
  IInputProps as NativeBaseInputProps, 
  Pressable,
  Icon
} from "native-base"

import { AntDesign } from '@expo/vector-icons'

interface InputProps extends NativeBaseInputProps {}

export function Input({ ...rest }: InputProps) {
  return (
    <NativeBaseInput 
      h={12}
      px={5}
      rounded="md"
      borderColor="gray.100"
      borderWidth={1} 
      fontSize="sm"
      
      _focus={{
        borderColor: "green.500",
        bg: "white"
      }}

      InputRightElement={
        <Pressable mr={5}>
          <Icon 
            as={AntDesign} 
            name="search1"
            size="md"
            color="green.500"
          />
        </Pressable>
      }

      {...rest}
    />
  )
}