import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
 }
 userSignUp=(emailId,password) =>{
     firebase.auth().createUserWithEmailAndPassword(emailId,password)
     .then((Response) => {
         return Alert.alert("User added Successfully")
     })
     .catch(function(error){
var errorCode=error.code;
var errorMessage=error.message;
return Alert.alert(errorMessage)
     })
   }
   userLogin=(emailId,password) =>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(() => {
        return Alert.alert("Successfully Login")
    })
    .catch(function(error){
var errorCode=error.code;
var errorMessage=error.message;
return Alert.alert(errorMessage)
    })
  }

    render(){
        return(
            <View style={styles.container}>
                <View>
<Text style={styles.title}>BOOK SANTA</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text) => {
                        this.setState({
                            emailId:text
                        })
                    }}
                    >

                    </TextInput>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.setState({
                            password:text
                        })
                    }}
                    >
            </TextInput> 
                    <TouchableOpacity 
                    style={[styles.button,{marginBottom:20, marginTop:20}]}
                    onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}
                    >
<Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {this.userSignUp(this.state.emailId, this.state.password)}}
                    >
<Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}