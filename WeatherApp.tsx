import { StyleSheet, Text, View,Pressable,Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WeatherLondon from './WeatherLondon';
import WeatherBangkok from './WeatherBangkok';

const WeatherApp = (): React.JSX.Element => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const toggleModal = (city:string) => {
        setSelectedCity(city);
        setModalVisible(true);
    };
    const renderWeatherComponent = () => {
        if(selectedCity === 'London'){
            return <WeatherLondon/>;
        }else if (selectedCity === 'Bangkok'){
            return <WeatherBangkok/>;
        }
        return null;
    };
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>WeatherApp</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalView}>
          <View style={styles.modalView}>{renderWeatherComponent()}</View>
          <TouchableOpacity style={styles.buttonClose}
          onPress={() => setModalVisible(false)}
          >
          <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  )
}

export default WeatherApp

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#f5f5f5",
      marginTop: 50,
    },
    centeredContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      color: "red",
    },
    cityName: {
      fontSize: 36,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#333",
    },
    temp: {
      fontSize: 64,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#ff6347",
    },
    weatherMain: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 4,
      color: "#333",
    },
    weatherDescription: {
      fontSize: 20,
      fontStyle: "italic",
      marginBottom: 16,
      color: "#666",
    },
    details: {
      marginTop: 16,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    detailContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 4,
    },
    detailKey: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    detailValue: {
      fontSize: 18,
      color: "#333",
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
      },
      modalView: {
        margin: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
      },
  });
  