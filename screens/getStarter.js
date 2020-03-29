import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import styles from "../styles/loginStyles.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

export default class GetStarted extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'nexa-bold': require('../assets/fonts/NexaBold.otf'),
    });
  }
  render() {
    return (
      <View>
        <Image style={styles.bg_img} source={require("../assets/images/home_bg.png")} />
        <View style={styles.login_text}>
          <Text style={styles.main_heading}>DART DRONES</Text>
          <Text style={styles.heading_description}>The nation's leader in drone training</Text>
            <Text style={styles.text_description}>DARTdrones provides the nation’s highest quality
            drone training with a simple yet comprehensive model
            for enterprise clients, government agencies, public safety
            departments, and individuals.
            </Text>
          <TouchableOpacity style={styles.get_started_button} onPress={() =>  this.props.navigation.navigate('HomeScreenTwo')} style={styles.get_started_button}>
              <Text style={styles.button_text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
