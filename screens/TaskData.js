import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class TaskData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View>
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.storyTitleText}>{this.state.taskName}</Text>
                <Text style={styles.descriptionText}>
                  {this.props.task.description}
                </Text>
                <Text style={styles.descriptionText}>
                  {this.props.task.complete_by}
                </Text>
                <Text style={styles.descriptionText}>
                  {this.props.task.taskSummary}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.readButton}>
                  <Ionicons
                    size={RFValue(30)}
                    name="checkmark-done-outline"
                    color="#FAE8E0"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closebutton}>
                  <Ionicons
                    size={RFValue(30)}
                    name="close-circle-outline"
                    color="#FAE8E0"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closebutton}>
                  <Ionicons
                    size={RFValue(30)}
                    name="book-outline"
                    color="#FAE8E0"></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginRight: RFValue(50),
    marginLeft: RFValue(10),
    marginTop: RFValue(8),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(15),
    height: RFValue(200),
  },
  buttonContainer: {
    backgroundColor: '#2f345d',
    borderRadius: RFValue(15),
    height: RFValue(10),
    width: 25,
    flexDirection: 'row',
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },

  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  closebutton: {
    backgroundColor: '#2f345d',
    width: 30,
    marginLeft: 0,
    height: 21,
    marginTop: 5,
    borderRadius: 100,
  },
  readButton: {
    backgroundColor: '#2f345d',
    width: 30,
    marginLeft: 14,
    height: 21,
    marginTop: 5,
    borderRadius: 100,
  },
});
