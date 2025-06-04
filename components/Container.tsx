import { ReactNode } from "react"
import { SafeAreaView, View } from "react-native"

interface ContainerProps {
    children: ReactNode
}

const Container = ({children} : ContainerProps) => {
  return (
    <SafeAreaView className="flex-1 bg-[#101215] items-center">
      {children}
    </SafeAreaView>
  )
}

export default Container
