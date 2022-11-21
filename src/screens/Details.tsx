import { useNavigation } from "@react-navigation/native";
import { Avatar, Heading, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Organizer } from "../components/Organizer";
import { ProgressCard } from "../components/ProgressCard";

export function Details() {
  const navigation = useNavigation()

  function handleGoToDonateScreen() {
    navigation.navigate('donate')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <Header title="Detalhes" />
      
      <ScrollView showsVerticalScrollIndicator={false} px={6} bg="white">
        <VStack >
          <Image 
            source={require('../assets/card.jpg')}
            alt=""
            h="175px"
            rounded="md"
            mt={46}
          />

          <Heading fontSize="xl" my={25}>
            Ajude crianças a voltar para boas escolas
          </Heading>

          <HStack alignItems="center" mb={5}>
            <HStack space={1}>
              <Avatar bg="green.500" size="sm" source={{ uri: 'https://i.pravatar.cc/300' }} />
              <Avatar bg="yellow.500" size="sm" source={{ uri: 'https://i.pravatar.cc/400' }} />
              <Avatar bg="blue.500" size="sm" source={{ uri: 'https://i.pravatar.cc/500' }} />
            </HStack>

            <Text ml={11} color="gray.400">
              100+ pessoas doaram
            </Text>
          </HStack>

          <Text color="gray.400" fontSize="sm" lineHeight="lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum temporibus corrupti dicta pariatur possimus quaerat exercitationem dolorum facere nesciunt, saepe expedita similique vel quibusdam soluta molestiae consequuntur labore iste quidem?
          </Text>

          <ProgressCard />

          <Organizer />

          <Button title="Doar agora" mb={5} onPress={handleGoToDonateScreen} />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}