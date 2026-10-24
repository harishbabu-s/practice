import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyCalendar from './src/components/MyCalendar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import MyAgedna from './src/components/MyAgenda';
import CustomCalendar from './src/components/ColourCalendar';
import TestCustomCalendar from './src/components/TestCalendar';
import LoginForm from './src/components/auth/login';
import AnimatedSpinner from './src/components/checking/MySpinner';

export default function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <MyCalendar /> */}
        {/* <MyAgedna /> */}
        {/* <CustomCalendar /> */}
        {/* <TestCustomCalendar /> */}
        <AutomatedSpinner />
        {/* <LoginForm /> */}
        <StatusBar style="auto" />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
