import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'

const ModalInsta = (props) => {
    console.log(props)
    return (<Modal
    visible = {props.modalVis}
    animationType= 'slide'
    transparent
    >
        <View style = {styles.modalView}>
            <Text style ={{color:'white'}} onPress = {()=>{props.setisSignedIn(false)}}>Log Out</Text>
            <Text style ={{color:'white'}} onPress = {()=>{props.setModalVis(false)}}>Log Out</Text>
        </View>
    </Modal>
    )
}

export default ModalInsta

const styles = StyleSheet.create({
    modalView:{
        height:600,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    }

})
