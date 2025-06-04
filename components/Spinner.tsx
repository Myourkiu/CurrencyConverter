import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';

const Spinner = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#101215" hidden />

      <SafeAreaView className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator color="#FFF" size="large" />
      </SafeAreaView>
    </>
  );
};

export default Spinner;
