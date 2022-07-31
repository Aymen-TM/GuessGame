import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { View } from 'react-native';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="GameStartScreen" component={GameStartScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </TailwindProvider>
  );
}


