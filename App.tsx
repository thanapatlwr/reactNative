import "react-native-gesture-handler";

import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-sliec";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import CameraScreen from "./screens/CameraScreen";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getProfile } from "./services/auth-service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeStack = createNativeStackNavigator();
const ProducStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home";
          if (route.name === "Home") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          // You can return any component that you like here!​
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown:false,
        tabBarActiveBackgroundColor:'lightblue'
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStrackScreen}
        options={{ tabBarLabel: "หน้าหลัก" }}
      />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "กล้อง" }}
      />
    </Tab.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
    </CameraStack.Navigator>
  );
}

function HomeStrackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "หน้าหลัก" }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        // options={{title: 'เกี่ยวกับเรา',
        //   headerStyle: {backgroundColor:'#20b2aa'},
        //   headerTintColor:'White',
        //   headerTitleStyle:{fontWeight:'bold'},
        //   headerTitleAlign:'center'
        // }}
      />
      <HomeStack.Screen name="Post" component={PostScreen} />
    </HomeStack.Navigator>
  );
}

function ProducStackScreen() {
  return (
    <ProducStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProducStack.Screen name="Products" component={ProductScreen} />
      <ProducStack.Screen name="Details" component={DetailScreen} />
    </ProducStack.Navigator>
  );
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}
const App = (): React.JSX.Element => {
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.data.user) {
        dispatch(setProfile(response.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkLogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProducStack" component={ProducStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
