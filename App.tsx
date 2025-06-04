import Container from 'components/Container';
import './global.css';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import PickerItem from 'components/PickerItem';
import { useEffect, useState } from 'react';
import { api } from 'service/api';
import Spinner from 'components/Spinner';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState<any[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [currencyValue, setCurrencyValue] = useState(null);
  const [convertedValue, setConvertedValue] = useState(0);

  async function loadCurrency() {
    const response = await api.get('/all');
    let currency: any[] = [];
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
      <View className="mb-px w-[90%] rounded-t-lg bg-[#f9f9f9] p-2">
        <Text className="pl-1 pt-1 text-base font-medium text-[#000]">Selecione sua moeda</Text>
        <PickerItem
          currency={currency}
          selectedCurrency={selectedCurrency}
          onChange={(curr) => setSelectedCurrency(curr)}
        />
      </View>
      <View className="w-[90%] gap-4 rounded-b-lg bg-[#f9f9f9] py-2">
        <Text className="pl-1 pt-1 text-base font-medium text-[#000]">
          Digite um valor para ser convertido em R$
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          placeholder="Ex: 1.50"
          keyboardType="numeric"
          className="mx-2 rounded-lg border pl-5 placeholder:text-gray-400"
        />
      </View>
      <TouchableOpacity 
      className="mt-2 w-[90%] rounded-lg bg-[#fb4b57] p-3">
        <Text className="text-center text-xl font-semibold">Converter</Text>
      </TouchableOpacity>
      {convertedValue !== 0 && (
        <View className="mt-9 w-[90%] items-center justify-center rounded-lg bg-[#fff] p-6">
          <Text className="text-3xl font-semibold text-[#000]">3 BTC</Text>
          <Text className="my-4 text-lg font-semibold text-[#000]">corresponde a</Text>
          <Text className="text-3xl font-semibold text-[#000]">R$ 100,00</Text>
        </View>
      )}
    </Container>
  );
}
