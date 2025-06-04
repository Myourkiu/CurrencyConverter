import { ActivityIndicator, View } from "react-native"

const Spinner = () => {
  return (
    <View className="flex-1 bg-black justify-center items-center">
        <ActivityIndicator color="#FFF" size="large"/>
    </View>
  )
}

export default Spinner
