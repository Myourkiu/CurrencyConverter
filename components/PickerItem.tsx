import { View } from "react-native"
import {Picker} from '@react-native-picker/picker';

interface PickerProps {
  currency: any[],
  selectedCurrency: any,
  onChange: (curr: any) => void

}

const PickerItem = ({currency, selectedCurrency, onChange} : PickerProps) => {
  return (
    <Picker selectedValue={selectedCurrency} onValueChange={(value) => onChange(value)}>
      {currency.map((item, index) => (
        <Picker.Item key={index} label={item.key} value={item.key}/>
      ))}
    </Picker>
  )
}

export default PickerItem
