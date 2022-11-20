import { FlatList, ScrollView, Text, VStack } from "native-base";
import { useState } from "react";
import { Alert, Dimensions } from "react-native";
import { Card } from "../components/Card";
import { CategoryCard } from "../components/CategoryCard";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { SmallCard } from "../components/SmallCard";

export function Home() {
  const data = [1, 2, 3, 5, 6, 7, 8]
  const category = ['Medicina', 'Food', 'Educação', 'Copa']

  const [selectedCategory, setSelectedCategory] = useState('medicina')

  return (
    <VStack flex={1}>
      <Header />

      <ScrollView mx={4} mt={5} showsVerticalScrollIndicator={false}>
        <Input placeholder="Procurar categoria" />

        <FlatList 
          data={data}
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
          data={category}
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
          data={data}
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