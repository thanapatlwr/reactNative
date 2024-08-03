import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App():React.JSX.Element {
  const onClickMe = ()=>{
    Alert.alert("Hello");
  }

  return (
    <View style={styles.container}>
        <AppHeader fullname="Thanapat Larpwaree" messages="Message from App.tsx"/>
        <Content Message="Message from App.tsx"/>
      <AppFooter/>  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});