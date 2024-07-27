import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, {useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { styles } from '../styles/styles'


const ProfileScreen = ():React.JSX.Element => {
    
  const [profileImage,setImage] = useState(require("../assets/fsf.png"))
  const [name,setName] = useState("Thanapat Larpwaree")

  const handleChangeName = ()=>{
    setName(name == "Thanapat Larpwaree" ? "Thank": "Thanapat Larpwaree")
  }
  const handleChangeImage = ()=>{
    setImage(profileImage == require("../assets/fsf.png") ? require("../assets/dgd.jpg") : require("../assets/fsf.png"))
  }
    
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage}/>
            <View>
                <Text style={styles.profileName}>{name}</Text>
                <Button title="Change Name" onPress={handleChangeName}/>
                <Text></Text>
                <Button title="Change Image" onPress={handleChangeImage}/>
            </View>
        </View>
    </View>
    
  )
}

export default ProfileScreen

