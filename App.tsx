import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExampl from './components/UseEffectExample'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'


const App = ():React.JSX.Element => {
  return (
    <View>
      <FlastListExample/>
      <FlatListcallBackend/>
      
      

    </View>
  )
}

export default App