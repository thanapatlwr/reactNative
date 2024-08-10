import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { stylesProfile } from '../styles/styles' // เรียกใช้สไตล์จากไฟล์ styles.ts
import Login from "./login";

const ProfileScreen = (): React.JSX.Element => {
    const initialProfileImage = require("../assets/dgd.jpg");
    const newProfileImage = require("../assets/fsf.png");

    const [name, setName] = useState("Thanapat Larpwaree");
    const [profileImage, setProfileImage] = useState(initialProfileImage);

    const handleChangeName = () => {
        setName(name == "Thanapat Larpwaree" ? "THANK" : "Thanapat Larpwaree");
    };

    const handleChangeImage = () => {
        setProfileImage(profileImage == initialProfileImage ? newProfileImage : initialProfileImage);
    };

    return (
        <View style={stylesProfile.container}>
            <View style={stylesProfile.profileContainer}>
                <Image source={profileImage} style={stylesProfile.profileImage} />
                <View>
                    <Text style={stylesProfile.profileName}>{name}</Text>
                    <Button title="Change Name" onPress={handleChangeName} />
                    <Text>{'\n'}</Text>
                    <Button title="Change Image" onPress={handleChangeImage} />
                </View>
            </View>
            <Login />
        </View>
    );
};
//
export default ProfileScreen;