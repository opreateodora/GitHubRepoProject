import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Switch,
} from "react-native";

import { theme } from "./globalStyle";

const screenWidth = Dimensions.get("window").width;

export default class Sceren1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      username: "",
    };
  }
  textMode = () => {
    if (this.state.mode) {
      return theme.textDarkStyle;
    }
    return theme.textLightStyle;
  };
  changeMode = () => {
    this.setState({ mode: !this.state.mode });
  };

  themeMode = () => {
    console.log(this.state.mode);
    if (this.state.mode) {
      return theme.dark;
    }
    return theme.light;
  };

  static navigationOptions = {
    title: "Gittable",
    headerStyle: {
      backgroundColor: "#f4511e",
    },

    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  _handleChange = (evt) => {
    this.setState({
      username: evt.nativeEvent.text,
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.container, this.themeMode()]}>
        <Switch
          value={this.state.mode}
          onValueChange={this.changeMode}
        ></Switch>
        <Text style={[styles.label, this.textMode()]}>GitHub Username</Text>
        <TextInput
          placeholder="Enter your github username"
          placeholderTextColor="#FF7F50"
          style={styles.input}
          onChange={this._handleChange}
          value={this.state.username}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() =>
            this.props.navigation.navigate("Screen2", {
              username: this.state.username,
              mode: this.state.mode,
            })
          }
        >
          <Text style={[styles.buttonText, this.textMode()]}>
            Find most successful repository
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    borderColor: "#FF7F50"
  },
  input: {
    width: screenWidth - 20,
    height: 38,
    padding: 4,
    fontSize: 16,
    borderColor: "#FF7F50",
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "#FF7F50",
    borderColor: "#FF7F50",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FF7F50",
    fontSize: 18,
    alignSelf: "center",
  },
});
