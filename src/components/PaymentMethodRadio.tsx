import { Box, IPressableProps, Pressable, Radio } from "native-base";

interface PaymentMethodRadioProps extends IPressableProps {
  value: string
  isSelected: boolean
}

export function PaymentMethodRadio({ value, isSelected,  ...rest }: PaymentMethodRadioProps) {
  return (
    <Box 
      borderWidth={1} 
      w="full"
      borderColor={isSelected ? "green.500" : "gray.200"}
      p={14}
      mb={2}
      rounded="md"
    >
      <Radio colorScheme="green" value={value}>
        {value}
      </Radio>
    </Box>
  )
}