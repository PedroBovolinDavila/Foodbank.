import { FlatList, ScrollView, Text, VStack } from "native-base";
import { useState } from "react";
import { Alert, Dimensions } from "react-native";
import { Card } from "../components/Card";
import { CategoryCard } from "../components/CategoryCard";

import { HomeHeader } from "../components/HomeHeader";
import { Input } from "../components/Input";
import { SmallCard } from "../components/SmallCard";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('medicina')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <ScrollView mx={4} mt={5} showsVerticalScrollIndicator={false}>
        <Input placeholder="Procurar categoria" />

        <FlatList 
          data={[1, 2, 3, 4 ,5,6,7,8]}
          keyExtractor={item => item.toString()}
          renderItem={() => (
            <Card />
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
            <SmallCard onPress={() => Alert.alert('doar')} />
          )}

          mt={31}
        />
      </ScrollView>
    </VStack>
  )
}