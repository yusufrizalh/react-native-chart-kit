import React, { Component } from 'react';
import { 
    AppRegistry, Text, View, ScrollView, 
    Dimensions, StyleSheet, Platform, 
    StatusBar, Image, ActivityIndicator
} from 'react-native'; 

import CustomHorizontalView from './CustomHorizontalView'; 

var deviceWidth = Dimensions.get('window').width; 

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
      dataLoaded: false, 
      viewHolder: []
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/0.8/?results=25")
      .then((response) => response.json()) 
      .then((responseData) => {
        responseData.results.map((item, key) => {
          this.state.viewHolder.push(
            <View key={key} style={[styles.childContainer, { width: deviceWidth }]}>
              <Image source={{ uri: item.user.picture.large }} 
                style={{ width: 250, height: 250, borderRadius: 250/2 }} />
              <Text style={styles.textLayout}>
                {item.user.name.first} {item.user.name.last}
              </Text>
            </View>
          );
        })
          this.setState({ dataLoaded: true, viewHolder: this.state.viewHolder });
      });
  }

  render() {
    if(this.state.dataLoaded) {
      return(
        <CustomHorizontalView>
          { this.state.viewHolder }
        </CustomHorizontalView>
      );
    }
    else {
      return(
        <View style={styles.activityIndicatorHolder}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  childContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  textLayout: {
    fontSize: 32, 
    color: 'white', 
  }, 
  activityIndicatorHolder: {
    backgroundColor: '#808080', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
});