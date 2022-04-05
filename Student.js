import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList, Image, Alert } from 'react-native';

function Hooks() {
    
    const [index, setIndex] = useState(-1);
    const [myData, setmyData] = useState([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errName, setErrName] = useState('');
    const [errMail, setErrMail] = useState('');
    const [valid1, setValid1] = useState(true);
    const [valid2, setValid2] = useState(true);
    const flatRef = useRef();
    const [btn, setBtn] = useState("Add");
    const [val, setVal] = useState('');
    const [val1, setVal1] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const emptyFun = ()=>{
        return(
            <View>
                <Image resizeMode='cover' style = {styles.empty} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/emptyone.jpeg')} />
            </View>
        )
    }

    const validateFormat = (txt) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        setVal1(txt)
        reg.test(txt) ? setValid2(false) : setValid2(true)
        return reg.test(txt);
    }

    const del = (i) => {
        myData.splice(i, 1);
        setmyData([...myData]);
        if (i === index) {
            setVal('');
            setVal1('');
            setBtn('Add');
            setIndex(-1);
            setName('');
            setEmail('')
        }
    }

    const validateName = (txt) => {
        let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        setVal(txt)
        regName.test(txt) ? setValid1(false) : setValid1(true)
        return regName.test(txt)

    }

    const update = () => {
        setModalVisible(false)
        if (name.length > 0 && email.length > 0) {
            if (myData.length > 0) {
                let f = myData.findIndex((ele) => { return (ele.Email == email) })
                if (f == -1) {
                    myData[index].Name = name;
                    myData[index].Email = email;
                    setBtn("Add");
                    setName('');
                    setEmail('');
                    setVal('');
                    setVal1('');
                } else if (f == index) {
                    myData[index].Name = name;
                    setBtn("Add");
                    setName('');
                    setEmail('');
                    setVal('');
                    setVal1('');
                }
                else {
                    Alert.alert("Email Address already registered")
                }
            }
        }

    }

    const add = () => {

        if (name.length > 0 && email.length > 0) {
            if (myData.length > 0) {
                let found = myData.findIndex((ele) => { return (ele.Email === email) })

                if (found < 0) {

                    setErrName('');
                    setErrMail('');
                    setmyData([...myData, { Name: name, Email: email }]);
                    setName('');
                    setEmail('');
                    flatRef.current.scrollToEnd();


                }
                else {
                    Alert.alert("Email Address already registered")
                }
            }
            else {
                setErrName('');
                setErrMail('');
                setmyData([{ Name: name, Email: email }])
            }
        }
        else if (name == '') {
            setValid1(true);
            setErrName('');
            setErrMail('')
            setErrName('Name can not be empty')
        }
        else {
            setErrMail('Invalid Email Format');
            setValid1(true);
        }

        setVal('');
        setVal1('');

    }


    const renderCard = ({ item }) => {
        console.log("render 1")
        return (
            <View style={styles.card}>
                <Text style={{ ...styles.listText, fontSize: 16, fontFamily: 'AmericanTypewriter-Bold' }}>
                    {"Email: "}
                    <Text style={styles.listText}>{item.Email}</Text>
                </Text>
                <Text style={{ ...styles.listText, fontSize: 16, fontFamily: 'AmericanTypewriter-Bold' }}>
                    {"Name: "}
                    <Text style={styles.listText}>{item.Name}</Text>
                </Text>
                <Text
                    onPress={() => {
                        setModalVisible(true)
                        setBtn("Update");
                        let i = myData.findIndex(element => element == item);
                        setIndex(i);
                        setName(myData[i].Name);
                        setEmail(myData[i].Email)
                        setVal(myData[i].Name);
                        setVal1(myData[i].Email);
                    }}
                    style={styles.edit}>
                    {"Edit"}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        let i = myData.findIndex(element => element == item);
                        del(i)
                    }}
                    style={styles.deleteButton}>
                    <Image style={styles.delete} source={require('/Users/admin/Desktop/ReactNative/TrainingProject/src/assets/images/delete.png')} />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <View style={styles.parent}>{console.log('rerender')}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {"Student Detail"}
                </Text>
            </View>
            <Modal
                transparent
                visible={modalVisible} animationType='slide'>
                <View style = {styles.form}>
                    <TouchableOpacity 
                    onPress={()=>{ 
                        setModalVisible(false)}}
                    style = {styles.cross}> 
                        <Text>{'❌'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.formTxt}>
                        {"Detail Form"}
                    </Text>

                    <TextInput
                        value={val}
                        onChangeText={(txt) => {
                            if (validateName(txt)) {
                                setName(txt);
                                setErrName('');

                            }
                            else {
                                setName('');
                                setErrName('Name is invalid or empty')
                            }
                        }}
                        placeholder='Full Name'
                        style={styles.inputArea} />
                    <Text style={styles.errTxt}>
                        {errName}
                    </Text>
                    <TextInput
                        value={val1}
                        onChangeText={(txt) => {
                            if (validateFormat(txt)) {
                                setEmail(txt);
                                setErrMail('')
                            }
                            else {
                                setEmail('');
                                setErrMail('Email format not valid')
                            }
                        }}
                        placeholder='Email'
                        style={styles.inputArea} />
                    <Text style={styles.errTxt}>{errMail}</Text>
                    <TouchableOpacity
                        disabled={valid1 || valid2}
                        onPress={() => {
                            if (btn == "Add") {
                                add();
                                setEmail('');
                                setName('')
                            } else {
                                update();
                            }
                        }}
                        style={styles.addBtn}>
                        <Text style={{ fontSize: 16 }}>
                            {btn}
                        </Text>
                    </TouchableOpacity>

                </View>

            </Modal>



            <View style={styles.listHeaderView}>
                <Text style={styles.listHeader}>
                    {"Student List"}
                </Text>
            </View>

            <FlatList
                ListEmptyComponent={emptyFun}
                ref={flatRef}
                data={myData}
                renderItem={renderCard}
                style={styles.flatList}
                keyExtractor={(item, index) => index}
                contentContainerStyle={{ paddingHorizontal: 8 }}
            />
            <TouchableOpacity 
            onPress={() => { setModalVisible(true) }}>
                <Image 
                style = {styles.addIcon}
                source = {require('./src/assets/images/iconsAdd.gif') }/>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(Hooks);

const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    empty:{
        height: 400,
        width: 400,
    },
    cross:{
        left: 5,
        alignSelf:'flex-start',
        marginTop: 30
    },
    headerText: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 28,
        color: 'white',
        fontFamily: 'GillSans-Bold',

    },
    header: {
        backgroundColor: '#7c8cb2',
        width: '100%',
        height: "12%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignItems:'center',
        // justifyContent:'center',
        borderBottomColor:'black',
        borderWidth:2,
        borderBottomRightRadius:14,
        borderBottomLeftRadius:14,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        flex: .4,
        // height: '40%',
        paddingHorizontal: 10,
        paddingVertical:12,
    },
    inputArea: {
        width: '100%',
        backgroundColor: '#c9ccd0',
        height: 40,
        paddingHorizontal: 8
    },
    addBtn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        marginTop: 6,
        alignSelf: 'center',
        width: '30%',
        backgroundColor: '#7c8cb2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 20
    },
    list: {
        backgroundColor: 'yellow',
        height: '100%'
    },
    listHeaderView: {
        top: 6,
        height: 60,
        alignSelf: 'center',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        backgroundColor: '#7c8cb2',
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    listHeader: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
        fontSize: 20,
        paddingVertical: 4,
        fontWeight: 'bold'
    },
    flatList: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        top: 7,
        backgroundColor: 'white',
    },
    card: {
        top: 5,
        bottom: 20,
        width: '100%',
        marginBottom: 8,
        backgroundColor: "#6498b1",
        marginTop: 8,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    errTxt: {
        marginBottom: 8,
        color: 'red'
    },
    delete: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    deleteButton: {
        height: '35%',
        width: '10%',
        position: 'absolute',
        top: '15%',
        left: '95%',
    },
    listText: {
        fontSize: 14,
        margin: 5,
        alignSelf: 'center',
        fontFamily: 'GillSans-BoldItalic'
    },
    formTxt: {
        marginTop: 30,
        marginBottom:10,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 12,
        fontFamily: 'Kailasa-Bold'
    },
    edit: {
        color: 'green',
        marginTop: 3,
        bottom: 18,
        alignSelf: 'flex-end',
        fontSize: 15
    },
    addIcon:{
        alignSelf:'flex-end',
        height: 50,
        width: 50,
        marginBottom:40,
        right:8,
    }
}
)