import { HStack, Radio, ScrollView, Text, VStack } from "native-base";
import { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { PaymentMethodRadio } from "../components/PaymentMethodRadio";
import { PriceCard } from "../components/PriceCard";
import { SmallCard } from "../components/SmallCard";

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(10)
  const [paymentMethod, setPaymentMethod] = useState('Pix')  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <Header title="Doar" />

      <ScrollView showsVerticalScrollIndicator={false} mx={7} bg="white">
        <VStack mt={6}>
          <SmallCard titleOnly />

          <Text fontSize="md">
            Selecione a quantidade
          </Text>

          <VStack space={1} justifyContent="center" alignItems="center">
            <HStack safeArea={true} space={1}>
              <PriceCard amount={10} isSelected={selectedAmount === 10} onPress={() => setSelectedAmount(10)}/>
              <PriceCard amount={20} isSelected={selectedAmount === 20} onPress={() => setSelectedAmount(20)}/>
            </HStack>
            <HStack space={1}>
              <PriceCard amount={50} isSelected={selectedAmount === 50} onPress={() => setSelectedAmount(50)}/>
              <PriceCard amount={100} isSelected={selectedAmount === 100} onPress={() => setSelectedAmount(100)}/>
            </HStack>
          </VStack>

          <Text fontSize="md" mt={6}>
            Selecione o meio de pagamento
          </Text>

          <VStack mt={4}>
            <Radio.Group defaultValue="Pix" name="paymentRadio" onChange={nextValue => setPaymentMethod(nextValue)}>
              <PaymentMethodRadio value="Pix" isSelected={paymentMethod === 'Pix'} />
              <PaymentMethodRadio value="Boleto" isSelected={paymentMethod === 'Boleto'} />
            </Radio.Group>
          </VStack>

          <Button title="Pagar e confirmar" mt={8} onPress={() => Alert.alert('Doação enviada', `Você doou R$ ${selectedAmount} para uma causa nobre!`)} />
        </VStack> 
      </ScrollView>
    </SafeAreaView>
  )
}