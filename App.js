import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = () => {
    // TODO: decide what to draw: circle or cross or default
  };

  chooseItemIcon = () => {
    // TODO: choose appropriate icon
  };

  chooseItemColor = () => {
    // TODO: choose color for item 
  };

  resetGame = () => {
    // TODO: reset all values and state
  };

  winGame = () => {
    // TODO:  decide/check winner
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tic Tac Toe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"

  }
})
