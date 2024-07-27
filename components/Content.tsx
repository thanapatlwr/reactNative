import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

type ContentProps = {
    Message: string;
}

const Content = ({Message}:ContentProps) => {
    const handleButton = () => {
        Alert.alert("Hello", "Thanapat Larpwaree")
    }

  return (
    <View>
      <Text>{Message}</Text>
      <Button title="Click Me" onPress={handleButton}/>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});