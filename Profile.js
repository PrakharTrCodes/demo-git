import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,Image, SafeAreaView,Modal } from 'react-native'
import ModalInsta from './ModalInsta';

export default function Profile({ navigation, route }) {
    let dp = './src/assets/images/myDp.png'

  const [modalVis, setModalVis] = React.useState(false);
    console.log('In profile',route);
    return (<View 
        style={styles.main}>
        <View style = {{height:70, backgroundColor:'#1a1a1a', flexDirection:'row'}}>
            <Text style = {{color:'white', marginTop:42, margin:14}}>{"emilia@30"}</Text>
            <TouchableOpacity onPress={()=>{setModalVis(!modalVis)}} style={{left:250}}>
                <Image style ={{height:20, width:20, marginTop:40}} source={require('./src/assets/images/menu.png')} />
            </TouchableOpacity>
        </View>
        <ScrollView
        stickyHeaderIndices={[1]}
   >
       <View style ={styles.proHead}>
           <Image style = {styles.dp}  source ={require(dp)}/>
           <Text style ={{color:'white', marginLeft:8}}>
               {"Prakhar Tripathi"}
           </Text>
           <Text style ={{color:'white', marginLeft:8}}>
               {"Actor"}
           </Text>
           <Text style ={{color:'white', marginLeft:8}}>
               {"Carpadiem"}
           </Text>
           <View style = {styles.threeBtn}>
           <TouchableOpacity onPress={() => { }} style={{ ...styles.loginBt, marginTop: 14 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Edit Profile'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style = {{height:26,width:26, alignSelf:'center', margin:8}} source={require('./src/assets/images/invite.png')}/>
            </TouchableOpacity>
           </View>
       </View>
       <View style = {styles.sticky}>
           <Image style ={{height:30, width: 30, margin:4}} source ={require('./src/assets/images/grid.png')} />
       </View>
       <ModalInsta modalVis={modalVis} setModalVis={setModalVis} setisSignedIn = {route.params.setisSignedIn}/>
   </ScrollView>
   </View>
   
   )
}

const styles = StyleSheet.create(
    {
        main : {
            flex : 1,
            backgroundColor:'black'
        },
        dp: {
            height: 100,
            width: 100,
            borderRadius: 50,
            margin: 8
        },
        proHead:{
            backgroundColor:'#1a1a1a',
        },
        threeBtn:{
            flexDirection:'row',
            alignItems: 'center',

        },
        loginBt: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 26,
            backgroundColor: '#000000',
            width: '84%',
            height: 40,
            alignSelf: 'center',
            borderRadius: 5,
            margin:6,
        },
        sticky:{
            backgroundColor:'#1a1a1a',
            flexDirection:'row',
            width:'100%',
            height:40
        }
    }
)

