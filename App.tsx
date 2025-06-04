import Container from 'components/Container';
import './global.css';
import { Text, View } from 'react-native';
import PickerItem from 'components/PickerItem';
import { useEffect, useState } from 'react';
import { api } from 'service/api';
import Spinner from 'components/Spinner';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState<any[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  async function loadCurrency() {
    const response = await api.get('/all');
    let currency:any[] = [];
    Object.keys(response.data).map((key) => {
      currency.push({
        key: key,
        label: key,
        value: key,
      });
    });
    setCurrency(currency);
    setSelectedCurrency(currency[0].key);
    setLoading(false);
  }

  useEffect(() => {
    loadCurrency();
  }, []);

  if (loading) return <Spinner />;

  return (
    <Container>
      <View className="w-[90%] rounded-t-lg bg-[#f9f9f9] p-2">
        <Text className="pl-1 pt-1 text-base font-medium text-[#000]">Selecione sua moeda</Text>
        <PickerItem currency={currency} selectedCurrency={selectedCurrency} onChange={ (curr) => setSelectedCurrency(curr)}/>
      </View>
    </Container>
  );
}
