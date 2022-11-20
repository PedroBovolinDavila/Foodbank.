import { Pressable, Text, IPressableProps } from "native-base";

interface CategoryCardProps extends IPressableProps {
  title: string
  isSelected: boolean
}

export function CategoryCard({ title, isSelected, ...rest }: CategoryCardProps) {
  return (
    <Pressable 
      borderWidth={1}
      borderRadius="sm"
      borderColor={isSelected ? "green.500" : "gray.300"}
      px={6}
      py={1}
      mr={2}
      {...rest}
    >
      <Text 
        color={isSelected ? "black" : "gray.300"} 
        fontSize="sm"
      > 
        {title}
      </Text>
    </Pressable>
  )
}