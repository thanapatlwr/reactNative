import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = ():React.JSX.Element => {
    const hello = "Hello TNI Footerr";
    const hello2 = <Text>Hello JSX</Text>;
    const isLogin = true;
  return (
    <View>
      <Text style={styles.myText}>
        {hello} Date:{new Date().toLocaleDateString()}
      </Text>
      {hello2}
      {isLogin && <Text>Welcome Boss</Text>}
      {
        isLogin ? <Text>Welcome Marry</Text> : <Text>ยังไม่ได้ Login</Text> 
      }
    
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
    myText:{color:'red'}
})