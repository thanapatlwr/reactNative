import React from "react";
import{Text, View, Button, Alert } from "react-native";
import {stylesPractice } from '../styles/styles'

interface ContentProps {
  message: string;
  fullname: string;
  // onButtonClick:() => void;
};

const Content = ({ message, fullname }: ContentProps): React.JSX.Element => {

  const [displayFullname, setDisplayFullname] = React.useState('');
  const handleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>

      <Button title="Click ME" onPress={handleButtonClick}/> 

    </View>
  );
};

export default Content;
