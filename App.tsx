import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import MenuScreen from './screens/MenuScreen';
import ProductScreen from './screens/ProductScreen';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePostScreen from './screens/CreatePostScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'

const HomeStack = createNativeStackNavigator();
const ProductStack = createDrawerNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen(){
  return(
    <SafeAreaProvider>
      <HomeStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#ffffff'},
        headerTintColor:'white',
        headerTitleStyle:{fontWeight:'bold'},
      }}
      >
        <HomeStack.Screen
          name='Home'
          component={HomeScreen}
          options={{title:'หน้าหลัก',
          headerTitleAlign:'center',
          }}
        />
        <HomeStack.Screen 
          name='About' 
          component={AboutScreen}
          // options={{
          //   title:'เกี่ยวกับเรา',
          //   headerStyle:{backgroundColor:'#6388ff'},
          //   headerTintColor:'white',
          //   headerTitleStyle:{fontWeight:'bold'},
          //   headerTitleAlign:'center',
          // }}  
        />
        <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/>
      </HomeStack.Navigator>
    </SafeAreaProvider>
  )
}
function ProductStackScreen(){
  return(
      <ProductStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerTitleStyle:{fontWeight:'bold'},
      }}
      >
        <ProductStack.Screen
          name='Product'
          component={ProductScreen}
        />
      </ProductStack.Navigator>
  )
}
const App = () => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType='native'>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{headerShown:false}}
          drawerContent={props => <MenuScreen{...props}/>}
        >
          <Drawer.Screen name='HomeStack' component={HomeStackScreen}/>
          <Drawer.Screen name='ProductStack' component={ProductStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </HeaderButtonsProvider>
    </SafeAreaProvider>
  
  )
}

export default App