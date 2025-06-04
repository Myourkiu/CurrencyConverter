import { ReactNode } from "react"
import { View } from "react-native"

interface ContainerProps {
    children: ReactNode
}

const Container = ({children} : ContainerProps) => {
  return (
    <View className="flex-1 bg-[#101215] pt-16 items-center">
      {children}
    </View>
  )
}

export default Container
