import { View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles"; // เรียกใช้สไตล์จากไฟล์ styles.ts

const Login = () => {

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        keyboardType="email-address"
      />
      <View>
        <Button title="SUBMIT"/>
      </View>
    </View>
  );
};

export default Login;
