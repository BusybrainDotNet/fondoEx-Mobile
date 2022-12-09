import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/images/slides/Q.png'),
        require('./assets/images/slides/R.png'),
        require('./assets/images/slides/S.png'),
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});