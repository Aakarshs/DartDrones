import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import styles from "../styles/chooseType.js"

 function HomeScreenTwo() {
    return (
      <View>
      <Image style={styles.bg_img} source={require("../assets/images/Untitled-2-04.png")} />
      <View style={styles.login_text}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreenThree')}>
      <Image style={styles.item} source={require("../assets/images/Untitled-2-08.png")} />
      </TouchableOpacity>
      <Image style={styles.item} source={require("../assets/images/Untitled-2-09.png")} />
      <Image style={styles.item} source={require("../assets/images/Untitled-2-10.png")} />

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreenTwo')} style={styles.get_started_button}>
          <View>
            <Text>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
</View>
    );
  }


  export default HomeScreenTwo;