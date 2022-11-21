import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '../screens/Details'
import { Donate } from '../screens/Donate'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="details"
        component={Details}
      />

      <Screen 
        name="donate"
        component={Donate}
      />
    </Navigator>
  )
}
