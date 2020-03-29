import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bg_img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute"
  },
  login_text: {
    zIndex: 100,
    top: Dimensions.get("window").height / 1.7,
    paddingLeft: 20
  },
  get_started_button: {
    paddingTop: 30,
    width: 250,
  },
  button_text: {
    textAlign:'center',
    borderWidth: 2,
    padding:15,
    paddingLeft:20,
    paddingRight:20,
    color: "white",
    fontFamily: "nexa-bold",
    borderColor:"#D2326E",
    borderRadius:20
  },
  main_heading: {
    fontFamily: "nexa-bold",
    color: "#D2326E",
    fontSize: 30
  },
  heading_description: {
    fontFamily: "nexa-bold",
    color: "white",
    marginBottom: 20,
    fontSize: 15,
    width: 180
  },

  text_description: {
    fontFamily: "nexa-bold",
    color: "white",
    width: 350
  }
});
