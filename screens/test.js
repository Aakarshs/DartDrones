import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import styles from "../styles/chooseType.js"

function HomeScreenTwo() {
  return (
    <View>
    
      <Image style={styles.bg_img} source={require("../assets/images/Untitled-2-04.png")} />
      <View style={styles.login_text}>
        <View style={styles.text_container}>
      <Text style={styles.heading}>Choose one</Text>
      <Text style={styles.heading_description}> 
      Since this is a demo app, the individual pages have not been yet implemented, all selections lead to a single home screen.
      </Text>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreenThree')}>
          <Image style={styles.item_one} source={require("../assets/images/Untitled-2-08.png")} />
        </TouchableOpacity>
        <Image style={styles.item_two} source={require("../assets/images/Untitled-2-09.png")} />
        <Image style={styles.item_three} source={require("../assets/images/Untitled-2-10.png")} />

        <TouchableOpacity style={styles.get_started_button} onPress={() =>  this.props.navigation.navigate('HomeScreenTwo')} style={styles.get_started_button}>
              <Text style={styles.button_text}>Skip</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}


export default HomeScreenTwo;