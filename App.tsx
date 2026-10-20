import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListaProdutos from './components/ListaProdutos';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Busca from './components/Busca';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Busca/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
