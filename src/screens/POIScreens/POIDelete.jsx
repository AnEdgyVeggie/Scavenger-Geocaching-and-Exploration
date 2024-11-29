import {ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'
import { useEffect, useState } from 'react'
import POI_API_ADDR from "../../constants"
import { Dropdown } from 'react-native-element-dropdown';

const POIDelete = (props) => {

    const [ currentPOI, setCurrentPOI ] = useState()
    const [ confirmed, setConfirmed ] = useState(false)
    const [ deleted, setDeleted ] =  useState(false)
    const [POIs, setPOIs] = useState(null)

    useEffect(() => {
        retrievePOIs()
    }, [])


    const retrievePOIs = async () => {
        const req = await fetch(POI_API_ADDR)
        const res = await req.json()
        setPOIs(res)
        // console.log(res)
        setCurrentPOI(res[0])
    }


    const submitPOIForDeletion = async () => {
        const request = await fetch(POI_API_ADDR + "/" + currentPOI._id , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            }
        })
        const response = await request.json()
        console.log(response)
    }



    if (POIs === null) {
        return(
            <View style={POIDeleteStyle.container}>
                <Text style={POIDeleteStyle.title}>LOADING...</Text>
            </View>
        )
    }



if (deleted) {
    return (
            <ScrollView style={POIDeleteStyle.container} >
            <Text style={POIDeleteStyle.title} >DELETE POINT{'\n'}OF INTEREST</Text>
            <View style={POIDeleteStyle.splitSection}>
        
                <View style={POIDeleteStyle.createdView} >
                    <Text style={POIDeleteStyle.genText}>POI: {currentPOI.name.toUpperCase()} was successfully DELETED</Text>
                </View>
        
                    <TouchableOpacity style={POIDeleteStyle.return} onPress={() => {
                        props.navigation.pop()
                    }}>
                        <Text style={POIDeleteStyle.genText} >{'<'} RETURN TO POI MANAGEMENT</Text>
                    </TouchableOpacity>
        
            </View>
        </ScrollView>

    )
}







    if (!confirmed) {
        return (
            <ScrollView style={POIDeleteStyle.container} >
                <Text style={POIDeleteStyle.title} >DELETE POINT{'\n'}OF INEREST</Text>
    
                <View style={POIDeleteStyle.section}>
    
                    <View>
    
                    <View style={POIDeleteStyle.inputSection}>
                                        <Text style={POIDeleteStyle.genText} >Select POI to DELETE:</Text>
                                        <Dropdown style={POIDeleteStyle.input}
                                        data={POIs}
                                        valueField={"id"} labelField={"name"}
                                        value={currentPOI}
                                        onChange={value => {setCurrentPOI(value)}}
                                        selectedTextStyle={POIDeleteStyle.inputText}
                                        />
                    </View>

                        <View style={POIDeleteStyle.inputSection} >
                            <Text style={POIDeleteStyle.genText} >Address</Text>
                            <TextInput style={POIDeleteStyle.input} value={currentPOI.address} readOnly />
                        </View>
                    </View>
    

                    <View style={POIDeleteStyle.warningSection}>
                        <Text style={POIDeleteStyle.warning}>WARNING!</Text>
                        <Text style={POIDeleteStyle.warning}>You are about to DELETE a POI.</Text>
                        <Text style={POIDeleteStyle.warning}>Would you to continue?</Text>
                    </View>

                    <TouchableOpacity style={POIDeleteStyle.yesButton} onPress={() => {
                        setConfirmed(true)
                    }}>
                        <Text style={POIDeleteStyle.buttonText} >YES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={POIDeleteStyle.deleteButtonInactive} onPress={() => {
                    }}>
                        <Text style={POIDeleteStyle.buttonText} >DELETE POI</Text>
                    </TouchableOpacity>

    
                    <TouchableOpacity style={POIDeleteStyle.return} onPress={() => {
                                                props.navigation.pop()
                    }}>
                        <Text style={POIDeleteStyle.genText} >{'<'} RETURN TO POI MANAGER</Text>
                    </TouchableOpacity>
                </View>
    
            </ScrollView>
        )
    } else {
        return (
            <ScrollView style={POIDeleteStyle.container} >
                <Text style={POIDeleteStyle.title} >DELETE POINT{'\n'}OF INEREST</Text>
    
                <View style={POIDeleteStyle.section}>
    
                    <View>
    
                    <View style={POIDeleteStyle.inputSection}>
                                        <Text style={POIDeleteStyle.genText} >Select POI to DELETE:</Text>
                                        <Dropdown style={POIDeleteStyle.input}
                                        data={POIs}
                                        valueField={"id"} labelField={"name"}
                                        value={currentPOI}
                                        onChange={value => {setCurrentPOI(value)}}
                                        selectedTextStyle={POIDeleteStyle.inputText}
                                        />
                    </View>

                        <View style={POIDeleteStyle.inputSection} >
                            <Text style={POIDeleteStyle.genText} >Address</Text>
                            <TextInput style={POIDeleteStyle.input} value={currentPOI.address} readOnly />
                        </View>
                    </View>
    

                    <View style={POIDeleteStyle.warningSection}>
                        <Text style={POIDeleteStyle.warning}>WARNING!</Text>
                        <Text style={POIDeleteStyle.warning}>You are about to DELETE a POI.</Text>
                        <Text style={POIDeleteStyle.warning}>Would you to continue?</Text>
                    </View>

                    <View style={POIDeleteStyle.yesButton} onPress={() => {
                    }}>
                        <Text style={POIDeleteStyle.buttonText} >YES</Text>
                    </View>

                    <TouchableOpacity style={POIDeleteStyle.deleteButtonActive} onPress={() => {
                        submitPOIForDeletion()
                        setDeleted(true)
                    }}>
                        <Text style={POIDeleteStyle.buttonText} >DELETE POI</Text>
                    </TouchableOpacity>

    
                    <TouchableOpacity style={POIDeleteStyle.return} onPress={() => {
                        props.navigation.pop()
                    }}>
                        <Text style={POIDeleteStyle.genText} >{'<'} RETURN TO POI MANAGER</Text>
                    </TouchableOpacity>
                </View>
    
            </ScrollView>
        )
    }
}

export default POIDelete

const POIDeleteStyle = StyleSheet.create({
    container: {
        backgroundColor: "#171C26",
        height: "100%",
        flexDirection: "column",

    },
    title: {
        color: "#BCCF2B",
        fontSize: 72,
        fontFamily: 'Jersey10',
        marginRight: 20,
        marginLeft: 40,
        marginBottom: 30
    },
    section: {
        flexDirection: "column",
        marginLeft: 40,
        marginRight: 40,
        height: "100%",
        // borderWidth: 1
    },
    splitSection: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: 30,
        // paddingBottom: 15,
        margin: 40,
        height: "110%",
        justifyContent: "space-between",
    },
    genText: {
        fontSize: 28,
        color: "#FFF",
        fontFamily: 'Jersey10',
        marginBottom: 5,
        marginTop: 15
    },
    return: {
        // borderWidth: 1,
        paddingLeft: 10,
        height: 60,
    }, 
    inputSection: {
        flexDirection: "column",
        // marginBottom: 5,
    },
    input: {
        backgroundColor: "#333C4D",
        color: "#fff",
        paddingLeft: 10,
        fontFamily: 'Jersey10',
        fontSize: 28,
        height: 45,
        borderRadius: 8
    },
    inputText: {
        color: "#fff",
        fontFamily: 'Jersey10',
        fontSize: 28,
    },
    yesButton: {
        backgroundColor :"#BCCF2B",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 30,
    }, 
    deleteButtonActive: {
        backgroundColor :"#EA433D",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
    }, 
    deleteButtonInactive: {
        backgroundColor :"#333C4D",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
    }, 
    buttonText: {
        fontFamily: 'Jersey10',
        color: "#000",
        fontSize: 28,
    },
    footer: {
        height: 100
    },
    warningSection: {   
        marginTop: 20
    },
    warning: {
        fontSize: 28,
        color: "#FFF",
        fontFamily: 'Jersey10',
        textAlign: "center"
    }
})