import React, { Component } from 'react';
import { View, Text, ImageBackground,Dimensions, TouchableOpacity, Button, FlatList } from 'react-native';
import axios from 'axios';

export default class WeatherApp extends Component {
  state = {
    mydata: [
      {
        temp: 0,
        pressure: 0,
      },
      {

      }

    ]
  }

  array = [{
    place: "India",
    feellke: 301.42,
    temp_min: 303.22,
    temp_max: 303.22,
    pressure: 1013,
    visibility: 5000
  }]


  render() {
    const myApi = () => {
      axios.get('https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=08705cfb33d2310b9ed59faae6c5cda6')
        .then((response) => {
          this.setState({ mydata: [response.data.main, response.data.weather[0]] })

        })
        .catch((err) => {
          this.setState({ mydata: ['Error in network'] })
        })

    }

    return (
      <View>
        {console.log(Dimensions.get('window'))}
        <ImageBackground style={styles.imgBack} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/Weather.jpg')}>
          <View style={styles.tempCard}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.state.mydata[0].temp + ' F'}</Text>
            <Text style={{ fontSize: 30, fontWeight: '400', color: '#00ced1' }}>{this.state.mydata[0].pressure + ' atm'}</Text>
            <Text style={{ fontSize: 30, fontWeight: '400', color: '#fafad2' }}>{this.state.mydata[1].main}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title='Get weather' onPress={myApi} />
          </View>
          <FlatList
            data={this.array}
            

            renderItem={({ item }) => (
              <>
                <View style={styles.flat}>

                  <Text style={styles.lowerText}>{'Place'}{': '}{item.place}</Text>
                  <Text style={styles.lowerText}>{'Feels Like'}{': '}{item.feellke}</Text>
                  <Text style={styles.lowerText}>{'Minimum Temprature'}{': '}{item.temp_min}</Text>
                  <Text style={styles.lowerText}>{'maximum Temprature'}{': '}{item.temp_max}</Text>
                  <Text style={styles.lowerText}>{'Pressure'}{': '}{item.pressure}</Text>
                  <Text style={styles.lowerText}>{'Visibility'}{': '}{item.visibility}</Text>
                </View>
                <View style={styles.flat}>

                  <Text style={styles.lowerText}>{'Place'}{': '}{item.place}</Text>
                  <Text style={styles.lowerText}>{'Feels Like'}{': '}{item.feellke}</Text>
                  <Text style={styles.lowerText}>{'Minimum Temprature'}{': '}{item.temp_min}</Text>
                  <Text style={styles.lowerText}>{'maximum Temprature'}{': '}{item.temp_max}</Text>
                  <Text style={styles.lowerText}>{'Pressure'}{': '}{item.pressure}</Text>
                  <Text style={styles.lowerText}>{'Visibility'}{': '}{item.visibility}</Text>
                </View>
                <View style={styles.flat}>

                  <Text style={styles.lowerText}>{'Place'}{': '}{item.place}</Text>
                  <Text style={styles.lowerText}>{'Feels Like'}{': '}{item.feellke}</Text>
                  <Text style={styles.lowerText}>{'Minimum Temprature'}{': '}{item.temp_min}</Text>
                  <Text style={styles.lowerText}>{'maximum Temprature'}{': '}{item.temp_max}</Text>
                  <Text style={styles.lowerText}>{'Pressure'}{': '}{item.pressure}</Text>
                  <Text style={styles.lowerText}>{'Visibility'}{': '}{item.visibility}</Text>
                </View>
                <View style={styles.flat}>

                  <Text style={styles.lowerText}>{'Place'}{': '}{item.place}</Text>
                  <Text style={styles.lowerText}>{'Feels Like'}{': '}{item.feellke}</Text>
                  <Text style={styles.lowerText}>{'Minimum Temprature'}{': '}{item.temp_min}</Text>
                  <Text style={styles.lowerText}>{'maximum Temprature'}{': '}{item.temp_max}</Text>
                  <Text style={styles.lowerText}>{'Pressure'}{': '}{item.pressure}</Text>
                  <Text style={styles.lowerText}>{'Visibility'}{': '}{item.visibility}</Text>
                </View>
              </>
            )}

          />
        </ImageBackground>
      </View>

    );
  }
}

const styles = {
  imgBack: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tempCard: {
    marginTop: 50,
    height: '30%',
    width: '60%',
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#DFEFFA',
    borderRadius: 10,
  },

  lowerText: {
    fontSize: 18,
    fontWeight: '400'
  },
  flat: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.98,
    shadowRadius: 9.51,

    elevation: 15,
    margin: 10,
    backgroundColor: '#DFEFFA',

    // marginBottom : 60,
  }

}