import {ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'
import { useEffect, useState } from 'react'
import POI_API_ADDR from "../../constants"
import { Dropdown } from 'react-native-element-dropdown';

const POICreate = (props) => {

    const [ created, setCreated ] = useState(false)

    const [ poiName, setPOIName ] = useState("")
    const [ tag, setTag ] = useState("easy")
    const [ address, setAddress ] = useState("")
    const [ instructions, setInstructions ] = useState()

    const dropdownData = [
        { label: "Easy", value: "easy"},
        { label: "Mid", value: "mid"},
        { label: "Hard", value: "hard"}
    ]


    const submitPOI = async () => {
        if (address === "" || instructions === "" || poiName === "") {
            return
        }

        const poiObject = createPOIObject()
        console.log(poiObject)

        const request = await fetch(POI_API_ADDR, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
            body: JSON.stringify(poiObject)
        })
        
        const response = await request.json()
    
        console.log(response)
    
    }

    const createPOIObject = () => {
        return {
            name: poiName,
            address: address,
            instructions: instructions,
            rating: 3,
            tag: tag
        }
    }



    if (!created) {
        return (
            <ScrollView style={POICreateStyle.container} >
                <Text style={POICreateStyle.title} >CREATE POINT{'\n'}OF INEREST</Text>

                <View style={POICreateStyle.section}>

                    <View>
                        <View style={POICreateStyle.inputSection}>
                            <Text style={POICreateStyle.genText} >POI Name:</Text>
                            <TextInput style={POICreateStyle.input} onChangeText={value => {
                            setPOIName(value)
                            }}/>
                        </View>

                        <View style={POICreateStyle.inputSection}>
                            <Text style={POICreateStyle.genText} >TAG:</Text>
                            <Dropdown style={POICreateStyle.input}
                            data={dropdownData}
                            valueField={"value"} labelField={"label"}
                            value={tag}
                            onChange={value => setTag(value.value)}
                            selectedTextStyle={POICreateStyle.inputText}
                            
                            
                            />
                        </View>

                        <View style={POICreateStyle.inputSection}>
                            <Text style={POICreateStyle.genText} >Address:</Text>
                            <TextInput style={POICreateStyle.input} onChangeText={(value) => setAddress(value)} />
                        </View>

                        <View style={POICreateStyle.inputSection}>
                            <Text style={POICreateStyle.genText} >Instructions:</Text>
                            <TextInput style={POICreateStyle.input} onChangeText={(value) => setInstructions(value)}/>
                        </View>

                        <TouchableOpacity style={POICreateStyle.submitButton} onPress={() => {
                            submitPOI()
                            setCreated(true)
                        }}>
                            <Text style={POICreateStyle.submitButtonText} >CREATE NEW POI</Text>
                        </TouchableOpacity>


                    </View>
                    <View>

                        <TouchableOpacity style={POICreateStyle.return} onPress={() => {
                            props.navigation.pop()
                        }}>
                            <Text style={POICreateStyle.genText} >{'<'} RETURN TO POI MANAGEMENT</Text>
                        </TouchableOpacity>

                        <View style={POICreateStyle.footer}></View>
                    </View>
                </View>
            </ScrollView>
        )
                
    } else {
        return(
            <ScrollView style={POICreateStyle.container} >
            <Text style={POICreateStyle.title} >CREATE POINT{'\n'}OF INEREST</Text>
            <View style={POICreateStyle.splitSection}>

                <View style={POICreateStyle.createdView} >
                    <Text style={POICreateStyle.genText}>POI: {poiName.toUpperCase()} was successfully CREATED</Text>
                </View>

                    <TouchableOpacity style={POICreateStyle.return} onPress={() => {
                        props.navigation.pop()
                    }}>
                        <Text style={POICreateStyle.genText} >{'<'} RETURN TO POI MANAGEMENT</Text>
                    </TouchableOpacity>

            </View>
        </ScrollView>
        )
    }
}

export default POICreate

const POICreateStyle = StyleSheet.create({
    container: {
        backgroundColor: "#171C26",
        height: "100%"
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
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 15,
        marginLeft: 40,
        marginRight: 40,
        height: "83%",
        justifyContent: "space-between",
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
    selection: {
        // borderWidth: 1,
        marginTop: 5,
        paddingLeft: 10,
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
    submitButton: {
        backgroundColor :"#BCCF2B",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 30,

    }, 
    submitButtonText: {
        fontFamily: 'Jersey10',
        color: "#000",
        fontSize: 28,
    },
    footer: {
        height: 100
    },
    createdView: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    }
})