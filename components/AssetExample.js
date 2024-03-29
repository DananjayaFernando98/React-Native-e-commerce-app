import * as React from 'react';
import { Text, View, StyleSheet, Image,StatusBar, TouchableOpacity} from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyles}>Hello, How Are You</Text>
    <Image source={require('../assets/notification.png')} style={styles.pageoneimage}></Image>
    
    <View style={{positoin:'absolute',bottom:'5%',right:0,left:0,justifyContent:'center', alignItems:'center'}}>
    <Text style={styles.description}>Grow your bussiness by accepting card payment with new card reader</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.getstartedText} >Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.skipButton}>Skip</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop:70,
  },
  pageoneimage:{
        alignItems:'center',
        justifyContent:'center',
        width:400,
        height:350,
        resizeMode:'contain',
        marginHorizontal:15,
    
      },
      textstyles:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
      },
      buttonStyle:{
        paddingHorizontal:100,
        backgroundColor:'#F9D901',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        marginTop:50,
        marginBottom:20,
        borderRadius:25,
      },
      getstartedText:{
        fontWeight:'500',
      },
      skipButton:{
        fontSize:18,
        color:'gray',
        marginTop:30,
      },
      description:{
        marginTop:35,
      textAlign:'center',
      fontWeight:'600',
      color:'#62656d',
    },
});
