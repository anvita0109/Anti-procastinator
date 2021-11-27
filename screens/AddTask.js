import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import db from '../config'
import firebase from 'firebase'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      dropdownHeight: 40,
      taskName: '',
      complete_by: '',
      description: '',
      taskSummary: '',
      task_status: false
    };
  }

  addTask=()=>{
    console.log('submitted');
        db.collection("Tasks").add({
          taskName: this.state.taskName,
          complete_by: this.state.complete_by,
          description: this.state.description,
          taskSummary: this.state.taskSummary,
          date : firebase.firestore.FieldValue.serverTimestamp(),
          task_status: false
        })}

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
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Task</Text>
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Task Name"
              style={styles.inputBoxStyle}
              onChangeText={(text) => {
                this.setState({
                  taskName: text,
                });
              }}
            />
            <TextInput
              placeholder="Complete By"
              style={styles.inputBoxStyle}
              onChangeText={(text) => {
                this.setState({
                  complete_by: text,
                });
              }}
            />
            <TextInput
              placeholder="description"
              style={styles.inputBoxStyle}
              onChangeText={(text) => {
                this.setState({
                  description: text,
                });
              }}
            />
            <TextInput
              placeholder="Additional Information"
              style={styles.infoBoxStyle}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => {
                this.setState({
                  taskSummary: text,
                });
              }}
            />
            <TouchableOpacity 
            style={styles.submitButton}
            onPress={this.addTask}
            >
              <Text style={styles.submitButtonText}>submit</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25283D',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  inputBoxStyle: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ECEBE4',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  infoBoxStyle: {
    width: '75%',
    height: 100,
    alignSelf: 'center',
    borderColor: '#ECEBE4',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  submitButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor:'#ECEBE4',
    height:30,
    width: '25%',
    borderRadius: 100,
        shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  submitButtonText:{
    fontWeight:500,

    
  }
});
