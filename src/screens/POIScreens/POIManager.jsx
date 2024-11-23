import {ScrollView, View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react'

const POIManager = (props) => {

    return (
        <ScrollView style={POIManagerStyle.container} >
            <Text style={POIManagerStyle.title} >POINTS OF{'\n'}INTEREST MANAGEMENT</Text>

            <View style={POIManagerStyle.section}>

                <View>
                    <TouchableOpacity style={POIManagerStyle.selection} onPress={() => {
                        props.navigation.navigate("Create")
                    }} >
                        <Text style={POIManagerStyle.genText} >CREATE POINT OF INTEREST {'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={POIManagerStyle.selection} onPress={() => {
                        props.navigation.navigate("Edit")
                    }}>
                        <Text style={POIManagerStyle.genText} >EDIT POINT OF INTEREST {'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={POIManagerStyle.selection} onPress={() => {
                        props.navigation.navigate("Delete")
                    }}>
                        <Text style={POIManagerStyle.genText} >DELETE POINT OF INTEREST {'>'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={POIManagerStyle.return} onPress={() => {
                                            props.navigation.pop()
                }}>
                    <Text style={POIManagerStyle.genText} >{'<'} RETURN TO OPTIONS</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    )
}

export default POIManager

const POIManagerStyle = StyleSheet.create({
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
        height: "80%",
        justifyContent: "space-between",
    },
    genText: {
        fontSize: 28,
        color: "#FFF",
        fontFamily: 'Jersey10',
        marginBottom: 15,
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

    }
})