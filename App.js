import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from './screens/Layout';




const Stack = createStackNavigator();



export default function App() {
  return (
    <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false,gestureEnabled: true}} >
            <Stack.Screen name="GameStartScreen" component={GameStartScreen}  />
            <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </TailwindProvider>
  );
}


