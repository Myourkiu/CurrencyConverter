import Container from 'components/Container';
import './global.css';
import { Text, View } from 'react-native';
import PickerItem from 'components/PickerItem';

export default function App() {
  if(loading)
    return <Spinner/>

  return (
    <Container>
      <View className="w-[90%] rounded-t-lg bg-[#f9f9f9] p-2">
        <Text className="pl-1 pt-1 text-base font-medium text-[#000]">Selecione sua moeda</Text>
        <PickerItem/>
      </View>
    </Container>
  );
}
