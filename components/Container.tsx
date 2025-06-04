import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <StatusBar style='light' backgroundColor="#101215" hidden />
      <SafeAreaView className="flex-1 items-center bg-[#101215]">{children}</SafeAreaView>
    </>
  );
};

export default Container;
