import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default class learningStyles extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
          <Text style = {styles.box}>hello1<Text>bb</Text></Text>
          <Text style = {styles.box}>hello2</Text>
          <Text style = {styles.box}>hello3</Text>
          <Text style = {styles.box}>hello4</Text>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        padding: 60,
        backgroundColor:'grey',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
    box:{
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 60,
        width: 60
    }
})