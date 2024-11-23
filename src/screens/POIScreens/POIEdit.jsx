import {ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'
import { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import POIs from '../../../SampleDatasets/PointsOfInterest';

const POIEdit = (props) => {

    const [ selectedPOI, setSelectedPOI ] = useState(null)
    const [ currentPOI, setCurrentPOI ] = useState(POIs[0])
    const [ rating, setRating ] = useState(1)
    const [ poiName, setPOIName ] = useState("")
    const [ address, setAddress ] = useState()
    const [ instructions, setInstructions ] = useState()
    const [ poiUpdated, setPOIUpdated ] = useState(false)
    const dropdownData = [
        { label: "1 Star", value: 1},
        { label: "2 Stars", value: 2},
        { label: "3 Stars", value: 3},
        { label: "4 Stars", value: 4},
        { label: "5 Stars", value: 5},
    ]

    if (poiUpdated) {
        return(
            <ScrollView style={POIEditStyle.container} >
            <Text style={POIEditStyle.title} >EDIT POINT{'\n'}OF INTEREST</Text>
            <View style={POIEditStyle.splitSection}>

                <View style={POIEditStyle.createdView} >
                    <Text style={POIEditStyle.genText}>POI: {poiName.toUpperCase()} was successfully UPDATED</Text>
                </View>

                    <TouchableOpacity style={POIEditStyle.return} onPress={() => {
                        props.navigation.pop()
                    }}>
                        <Text style={POIEditStyle.genText} >{'<'} RETURN TO POI MANAGEMENT</Text>
                    </TouchableOpacity>

            </View>
        </ScrollView>
        )
    }
    if (selectedPOI === null) {
        return (
            <ScrollView style={POIEditStyle.container} >
                <Text style={POIEditStyle.title} >EDIT POINT{'\n'}OF INTEREST</Text>
                <View style={POIEditStyle.section}>
    

                    <View>
                        <View style={POIEditStyle.inputSection}>
                                    <Text style={POIEditStyle.genText} >Select POI to Edit:</Text>
                                    <Dropdown style={POIEditStyle.input}
                                    data={POIs}
                                    valueField={"id"} labelField={"name"}
                                    value={currentPOI}
                                    onChange={value => {setCurrentPOI(value)}}
                                    selectedTextStyle={POIEditStyle.inputText}
                                    />
                        </View>

                        <TouchableOpacity style={POIEditStyle.submitButton} onPress={() => {
                            console.log(currentPOI)
                            setSelectedPOI(currentPOI)
                            setPOIName(currentPOI.name)
                            setAddress(currentPOI.address)
                            setInstructions(currentPOI.instructions)
                        }}>
                            <Text style={POIEditStyle.submitButtonText} >SELECT</Text>
                        </TouchableOpacity>
                    </View>
                <TouchableOpacity style={POIEditStyle.return} onPress={() => {
                    props.navigation.pop()
                }}>
                        <Text style={POIEditStyle.genText} >{'<'} RETURN TO POI MANAGER</Text>
                    </TouchableOpacity>
                </View>                
            </ScrollView>
        )

    } else {
        return (
            <ScrollView style={POIEditStyle.container} >
                <Text style={POIEditStyle.title} >EDIT POINT{'\n'}OF INTEREST</Text>
                    
                    <View style={POIEditStyle.subHeading}>
                        <Text style={POIEditStyle.genText}>EDITING: {selectedPOI.name.toUpperCase()}</Text>

                    </View>

                        <View style={POIEditStyle.section}>
    

                        <View>
                            <View style={POIEditStyle.inputSection}>
                                <Text style={POIEditStyle.genText} >POI Name:</Text>
                                <TextInput style={POIEditStyle.input} value={poiName} onChangeText={value => {
                                setPOIName(value)
                                }}/>
                            </View>

                            <View style={POIEditStyle.inputSection}>
                                <Text style={POIEditStyle.genText} >TAG:</Text>
                                <Dropdown style={POIEditStyle.input}
                                data={dropdownData}
                                valueField={"value"} labelField={"label"}
                                value={rating}
                                onChange={value => setRating(value)}
                                selectedTextStyle={POIEditStyle.inputText}
                                
                                
                                />
                            </View>

                            <View style={POIEditStyle.inputSection}>
                                <Text style={POIEditStyle.genText} >Address:</Text>
                                <TextInput style={POIEditStyle.input} 
                                value={address} onChangeText={value => {
                                    setAddress(value)
                                    }}/>
                            </View>

                            <View style={POIEditStyle.inputSection}>
                                <Text style={POIEditStyle.genText} >Instructions:</Text>
                                <TextInput style={POIEditStyle.input}
                                value={instructions} onChangeText={value => {
                                    setInstructions(value)
                                    }}/>
                            </View>

                            <TouchableOpacity style={POIEditStyle.submitButton} onPress={() => {
                                setPOIUpdated(true)
                            }}>
                                <Text style={POIEditStyle.submitButtonText} >UPDATE POI</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={POIEditStyle.return} onPress={() => {
                                props.navigation.pop()
                            }}>
                                    <Text style={POIEditStyle.genText} >{'<'} RETURN TO POI MANAGER</Text>
                            </TouchableOpacity>
                        </View>
                            
                    <View style={POIEditStyle.footer}></View>
                </View>
            </ScrollView>
        )
    }

}

export default POIEdit

const POIEditStyle = StyleSheet.create({
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
        height: "120%",
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
    },
    selection: {
        // borderWidth: 1,
        marginTop: 5,
        paddingLeft: 10,
    },
    return: {
        // borderWidth: 1,
        paddingLeft: 10,
        marginTop: 30,
        height: 60,
    }, 
    inputSection: {
        flexDirection: "column",
        marginTop: 15,
        marginBottom: 5,
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
        marginBottom: 10,
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
    },
    subHeading: {
        marginLeft: 40
    }
})