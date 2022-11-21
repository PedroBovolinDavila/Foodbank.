import { IPressableProps, Pressable, Text, useTheme } from "native-base";

interface PriceCardProps extends IPressableProps {
  amount: number
  isSelected: boolean
}

export function PriceCard({ amount, isSelected, ...rest }: PriceCardProps) {
  return (
    <Pressable
      w="49%"
      borderWidth={1}
      borderColor={isSelected ? "green.500" : "gray.200"}
      bg={isSelected ? "green.500" : "white"}
      borderRadius="md"
      h={24}
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={isSelected ? "white" : "black"}
      >
        R$ {amount}
      </Text>
    </Pressable>
  )
}