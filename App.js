import React from 'react';
import { View, SafeAreaView, ScrollView, Image, ImageBackground, Text, StyleSheet, TouchableOpacity, Linking, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heroes: [
        {
          name: "Thor",
          power: "God of Thunder",
          universe: "Marvel Universe",
          img: require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/thor.jpeg'),
          url:'https://www.imdb.com/title/tt0800369//'
        },
        {
          name: "Spideman",
          power: "Spider Web wth healing abilities",
          universe: "Marvel Universe",
          img: require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/spiderman.jpeg'),
          url:'https://www.imdb.com/title/tt0145487/?ref_=fn_al_tt_1'
        },
        {
          name: "Batman",
          power: " Infinite Wealth ",
          universe: "DC Universe",
          img: require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/Batman.jpeg'),
          url:'https://www.imdb.com/title/tt1877830/'
        },
        {
          name: "Superman",
          power: "Kryptonian Diety",
          universe: "DC Universe",
          img: require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/Suoerman.jpeg'),
          url:'https://www.imdb.com/title/tt0078346/'
        }
      ],
      heroesCopy: [
        {
          name: "Thor",
          power: "God of Thunder",
          universe: "Marvel Universe",
          img: require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/thor.jpeg'),
          url:'https://www.imdb.com/title/tt0800369//'
        },
      ]
    }
  }

  changeUpper = (index) => {
    this.state.heroesCopy.pop()
    let newsuper = this.state.heroes[index]
    this.state.heroesCopy.push(newsuper)
    this.setState({})
  }


  renderMyItem1 = (item) => {
    const { name, power, universe, img, url } = item;

    return (

      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={img}>
          <Text onPress={() => { console.log(url)
            Linking.openURL(url) 
            }} style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>{name}{'||'}{power}{'||'}{universe}</Text>
        </ImageBackground>
      </View >

    )
  }
  // renderMyItemLower = (item) => {
  //   const { img } = item;
  //   return (
  //     <View>
  //       <View style={styles.lowerCards}>
  //         <TouchableOpacity onPress={() => {
  //           let i = this.state.heroes.findIndex(ele => ele == item);
  //           this.changeUpper(i)
  //         }} activeOpacity={0.7}>

  //           <Image style={{ height: 180, width: 90, borderRadius: 6 }} source={img} />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   )
  // }


  render() {
    return (
      <View style={styles.main}>
        <SafeAreaView style={styles.upperContainer}>

          {
            this.state.heroesCopy.map((item) => this.renderMyItem1(item))
          }

        </SafeAreaView>

        <SafeAreaView style={styles.block}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"More Superheroes"}</Text></SafeAreaView>
        {/* <ScrollView horizontal={true} >

          {
            this.state.heroes.map((item) => this.renderMyItemLower(item))
          }

        </ScrollView> */}
        <FlatList  data = {this.state.heroes}
        horizontal
        keyExtractor={i=> i}
        renderItem = {({item})=>(
          <View>
        <View style={styles.lowerCards}>
          <TouchableOpacity onPress={() => {
            let i = this.state.heroes.findIndex(ele => ele == item);
            this.changeUpper(i)
          }} activeOpacity={0.7}>

            <Image style={{ height: 180, width: 90, borderRadius: 6 }} source={item.img} />
          </TouchableOpacity>
        </View>
      </View>
        )}/> 

      </View>
    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#525252'
  },
  upperContainer: {
    height: '65%',
    flexDirection: 'row',
    padding: 8

  },
  imageContainer: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.88,
    shadowRadius: 9.51,

    elevation: 15,
  },
  image: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  names: {
    color: '#668274',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8,
  },
  block: {
    backgroundColor: '#CFD6C8',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'black',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.98,
    shadowRadius: 9.51,

    elevation: 15,
  },
  lowerCards: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 20,
    paddingLeft: 20,
    margin: 10,
    height: '78%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      flex: 1
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'space-around',
  },

})