// import { Text, View, SafeAreaView, SectionList, StyleSheet, ImageBackground ,Image, TouchableOpacity} from 'react-native'
// import React from 'react'


// export default class Demo2 extends React.PureComponent{
//     constructor(props) {
//         super(props)

//         this.state = {
//             myData: [
//                 {
//                     title: {key :'1' , value : 'Main Course' , description: 'test demo testing1' },
//                     data: ["Pizza", "Burger", "Risotto"]
//                   },
//                   {
//                     title: {key :'1' , value : "Sides", description: 'test demo testing2' },
//                     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//                   },
//                   {
//                     title: {key :'1' , value : "Drinks", description: 'test demo testing3' },
//                     data: ["Water", "Coke", "Beer"]
//                   },
//                   {
//                     title: {key :'1' , value : "Desserts", description: 'test demo testing4' },
//                     data: ["Cheese Cake", "Ice Cream"]
//                   }
//             ],
//         }
//     }




//     renderItem = (item) => {
//         return (
//             <View>
//                 <Text style={styles.text}>
//                     {item}
//                 </Text>
//                 <Image style = {{height : 100, width: 80, alignSelf:'center', marginBottom:10}}source = {{uri :'https://cdn1.vectorstock.com/i/1000x1000/35/40/chef-logo-design-cooking-logo-template-bakery-vector-26493540.jpg'}}/>
//             </View>
//         )
//     }


//     onClick = () =>{
//         {
//             title: {key :'1' , value : "Desserts", description: 'test demo testing4' },
//             data: ["Rasgulla", "Brownie with Icecream"]
//         }
        
//     }

//           toAdd=(x)=>{
//             for(let i=0;i<this.state.myData.length;i++)
//             {
//                 if(x.title.value==this.state.myData[i].title.value)
//                 {
//                    var z= this.state.myData
//                     for(let j=0;j<x.data.length;j++)
//                     {
//                         z[i].data.push(x.data[j])
//                     }
//                     return z
    
//                 }
                
//             }
//             return [...this.state.Data,x]

//     }



//     renderSectionHeader = (section) => {
//         return (
//             <View style={styles.sectionHeader}>
//                 <Text style={styles.headerText}>
//                     {section.title.value}
//                 </Text>
//                 <Text style={styles.headerText2}>
//                     {section.title.description}
//                 </Text>
//             </View>
//         )
//     }

//     render() {
//         return (
//             <SafeAreaView style={styles.container}>
//                     <SectionList
//                         sections={this.state.myData}
//                         renderItem={({ item }) => (this.renderItem(item))}
//                         renderSectionHeader={({ section }) => (this.renderSectionHeader(section))}
//                     />
//                     <TouchableOpacity 
//                      onPress={()=>{
//                          this.toAdd()
//                      }}
//                     >
//                          <Text>{'Click to add'}</Text>
//                     </TouchableOpacity>
//             </SafeAreaView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: '#808080'
//     },
//     text: {
//         alignSelf:'center',
//         color: 'white',
//         marginRight:10,
//         marginLeft:10,
//         marginBottom:10,
//         fontSize:15,
//         fontWeight:'900',
//     },
//     sectionHeader:{
//         backgroundColor:"#fffaf0",

//     },
//     headerText: {
//         alignSelf:'center',
//         color: 'black',
//         fontSize: 30,
//     },
//     empty:{
//         flex:1,
//         backgroundColor:'#1A1A1A',
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     emptyText:{
//         // margin:200,
//         alignSelf:'center',
//         color:'white',
//         fontSize:50,
//         fontWeight:'bold',
//         justifyContent:'center'
//     },
//     headerText2 :{
//         fontSize:18,
//         alignSelf:'center',
//         color : '#696969'
//     }
// })
