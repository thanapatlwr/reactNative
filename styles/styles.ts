import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        borderColor:"#f5f5f5"
    },
    profileImage:{
        borderRadius:50,
        width:100,
        height:100,
        marginRight:20,

    },
    profileContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        elevation:5,
        marginTop:50,
        
    },
    profileName:{
        fontSize:20,
        color:'red',
        fontWeight:"bold",
        
    },
})
const stylesPractice = StyleSheet.create({ 
    container: { 
      //flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 16, 
      backgroundColor: '#ffffff' 
    }, 
    header: { 
      backgroundColor: "#AEC6CF",
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop:100 
    }, 
    headerText: { 
      fontSize: 20, 
      fontWeight: 'bold', 
      color: '#fff', 
    }, 
    subtitleText: { 
      fontSize: 16, 
      color: '#666' 
    }, 
    content: { 
        alignItems: "center",
        justifyContent: "center",
    }, 
    text: { 
      fontSize: 18, 
      marginBottom: 20, 
    }, 
    footer: { 
      padding: 20, 
      backgroundColor: '#f8f8f8', 
      width: '100%', 
      alignItems: 'center', 
      position: 'absolute', 
      bottom: 0, 
      left:0,
      right:0,
    },
    footerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
      },
    input: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginTop: 16, 
        paddingHorizontal: 8, 
        width: '80%', 
        borderRadius: 8, 
        marginLeft:50
    } 
  }); 

export { styles, stylesPractice}