import { View } from "react-native"
import {Picker} from '@react-native-picker/picker';
const PickerItem = () => {
  return (
    <Picker>
      <Picker.Item key={0} label="BTC" value={"BTC"}/>
    </Picker>
  )
}

export default PickerItem
