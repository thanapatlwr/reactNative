import { View, Text } from 'react-native'
import React from 'react'

type HeaderProps = {
    fullname:string;
}

const Header = ({fullname}:HeaderProps):React.JSX.Element => {
  return (
    <View>
        <Text>{fullname}</Text>
    </View>
  )
}

export default Header