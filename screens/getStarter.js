import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import styles from "../styles/loginStyles.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 function GetStarted({navigation}) {
    return (
      
      <View>
            <Image style={styles.bg_img} source={require("../assets/images/home_bg.png")} />

            <View style={styles.login_text}>
              <Text>DARTdrones provides the nation’s highest quality 
                drone training with a simple yet comprehensive model 
                for enterprise clients, government agencies, public safety 
                departments, and individuals.
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreenTwo')} style={styles.get_started_button}>
                <View>
                  <Text>Get Started</Text>
                </View>
              </TouchableOpacity>
            </View>
    </View>
    );
  }


  export default GetStarted;