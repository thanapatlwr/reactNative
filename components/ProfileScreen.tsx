import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { styles } from '../styles/styles'

const ProfileScreen = ():React.JSX.Element => {
    
  const profileImage = require("../assets/fsf.png")
    
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage}/>
            <Text style={styles.profileName}>Thanapat Larpwaree</Text>
        </View>
    </View>
    
  )
}

export default ProfileScreen

