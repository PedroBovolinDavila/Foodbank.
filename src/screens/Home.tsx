import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView, Text, VStack } from "native-base";
import { useState } from "react";
import { Alert, Dimensions, findNodeHandle } from "react-native";
import { Card } from "../components/Card";
import { CategoryCard } from "../components/CategoryCard";

import { HomeHeader } from "../components/HomeHeader";
import { Input } from "../components/Input";
import { SmallCard } from "../components/SmallCard";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('medicina')

  const navigation = useNavigation()

  function handleGoToDetailsScreen() {
    navigation.navigate('details')
  }

  return (
    <VStack flex={1} bg="white">
      <HomeHeader />

      <ScrollView mx={4} mt={7} showsVerticalScrollIndicator={false}>
        <Input placeholder="Procurar categoria" />

        <FlatList 
          data={[1, 2, 3, 4 ,5,6,7,8]}
          keyExtractor={item => item.toString()}
          renderItem={() => (
            <Card onPress={handleGoToDetailsScreen} />
          )}

          my={7}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
       
        <Text 
          fontSize={16} 
          color="black"
          mb={3}
        >
          Categorias
        </Text>

        <FlatList 
          data={['Medicina', 'Food', 'Educação', 'Copa']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <CategoryCard 
              title={item} 
              isSelected={selectedCategory.toLowerCase() === item.toLowerCase()}
              onPress={() => setSelectedCategory(item)}
            />
          )}

          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <FlatList 
          data={[1, 2, 3, 4 ,5,6,7,8]}
          keyExtractor={item => item.toString()}
          renderItem={() => (
            <SmallCard onPress={handleGoToDetailsScreen} />
          )}

          mt={31}
        />
      </ScrollView>
    </VStack>
  )
}