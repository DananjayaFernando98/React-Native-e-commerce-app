import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const handlesignup = () => {navigation.navigate('SignupPage');};
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginTop: 20 }}>Welcome Back!</Text>
      <Text style={{ fontSize: 16, marginTop: 20, color: 'gray' }}>
        Sign in to comtinue
      </Text>

      <TextInput
        placeholder="UserName"
        style={{
          marginTop: 40,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        style={{
          marginTop: 40,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: '#0d47a1',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            marginTop: 30,
          }}>
          <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>
            Login Now
          </Text>
        </TouchableOpacity>
        <Text style={{ marginTop:20, }}>
            Forget Pasword ?
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 60 }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#3f51b5',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>f</Text>
          </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#f44336',
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>G</Text>
          </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#1565c0',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>in</Text>
          </View>
      </View>
      <View style={{flexDirection:'row',marginTop:20,}}>
       <Text style={{ color:'gray' }}>
            Don't have an account ? 
          </Text>
          <Text style={{ fontWeight:'bold',marginHorizontal: 10, }} onPress={handlesignup}>
            SignUp
          </Text>
      </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
