import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { theme } from "./globalStyle";

const screenWidth = Dimensions.get("window").width;

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      repos: [],
    };
  }
  static navigationOptions = {
    title: "RepositoryList",
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  _getUserRepos = (user_name) => {
    user_name = user_name.toLowerCase().trim();
    const url = `https://api.github.com/users/${user_name}/repos`;
    return fetch(url).then((res) => res.json());
  };
  _sortMyArray(res) {
    return res.sort((a, b) => {
      return a.stargazers_count < b.stargazers_count ? 1 : -1;
    });
  }
  _handleSubmit = (user_name) => {
    this._getUserRepos(user_name).then((res) => {
      this._sortMyArray(res);
      this.setState({ repos: res.slice(0, 10) });
    });
  };
  _renderRepos = (user_name, mode) => {
    {
      this._handleSubmit(user_name);
    }

    return (
      <ScrollView>
        {this.state.repos.map((repo, i) => {
          return (
            <View key={i}>
              <Text style={this.textMode(mode)}>
                {i}, {JSON.stringify(repo.full_name)}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  textMode = (mode) => {
    if (mode) {
      return theme.textDarkStyle;
    }
    return theme.textLightStyle;
  };
  themeMode = (mode) => {
    
    if (mode) {
      return theme.dark;
    }
    return theme.light;
  };
  render() {
    const { navigation } = this.props;
    const user_name = navigation.getParam("username");
    const mode = navigation.getParam("mode");
    
    return (
      <View style={[styles.container, this.themeMode(mode)]}>
        {this._renderRepos(user_name, mode)}

        <Button 
        
        style={styles.button}
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
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
