import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";


var itemArray = new Array(9).fill('empty');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    //[ x ] TODO: decide what to draw: circle or cross or default
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] }, () => { });
    }
    //check for win

  };

  chooseItemIcon = itemNumber => {
    //[ x ]  TODO: choose appropriate icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle"
    }
    return "pencil";
  };

  chooseItemColor = itemNumber => {
    // [ x ]  TODO: choose color for item 
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green"
    }
    return "black";
  };

  resetGame = () => {
    //[ x ]  TODO: reset all values and state
    itemArray.fill("empty");
    this.setState({ winMessage: " " })
    // TODO: force update to the component
  };

  winGame = () => {
    //[ x ] TODO:  decide/check winner
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
