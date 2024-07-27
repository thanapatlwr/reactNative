import { StyleSheet, Text, View } from "react-native";
import React from "react";

type HeaderProps = {
  fullname: string;
  messages?: string;
};

const AppHeader = ({ fullname, messages }: HeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>    
      <Text>
        {fullname}
      </Text>
      <Text>
        {messages}
      </Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});