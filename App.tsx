import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExampl from './components/UseEffectExample'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import WeatherLondon from './WeatherLondon'
import WeatherBangkok from './WeatherBangkok'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <FlastListExample/> */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
      

    </View>
  )
}

export default App