
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import * as Font from "expo-font"


const AchievementsHub = (props) => {

    const [ loaded, error ] = Font.useFonts({
        'Jersey10': require('../../../assets/fonts/Jersey10.ttf')
    })
    const iconSize = 80

    return(
        <View style={AchievementHubStyle.container} >
            <Text style={AchievementHubStyle.title}>
                Achievements{"\n"}Hub
            </Text>

            <View style={AchievementHubStyle.subContainer} >
                <View style={AchievementHubStyle.column}> 
                    <View style={AchievementHubStyle.section}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("View")
                        }} style={AchievementHubStyle.content}>
                            <Entypo name={"eye"} color={"#BCCF2B"} size={iconSize}/>
                                <Text style={AchievementHubStyle.sectionText}>View Achievements</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={AchievementHubStyle.section}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("Submit")
                        }} style={AchievementHubStyle.content}>
                            <Entypo name={"upload"} color={"#BCCF2B"} size={iconSize}/>
                                <Text style={AchievementHubStyle.sectionText}>Submit Achievement</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={AchievementHubStyle.column}>
                    <View style={AchievementHubStyle.section}>
                        <TouchableOpacity onPress={() => {
                                props.navigation.navigate("Rate")
                            }} style={AchievementHubStyle.content}>
                                <View style={AchievementHubStyle.groupedIcons}>
                                    <Entypo name={'thumbs-down'} color={"#BCCF2B"} size={iconSize} />
                                    <Entypo name={'thumbs-up'} color={"#BCCF2B"} size={iconSize} />
                                </View>
                                <Text style={AchievementHubStyle.sectionText}>Rate Achievement</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={AchievementHubStyle.section}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("Share")
                        }} style={AchievementHubStyle.content} >
                                <Entypo name={"share"} color={"#BCCF2B"} size={iconSize} />
                                <Text style={AchievementHubStyle.sectionText}>Share Achievement</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AchievementsHub

const AchievementHubStyle = StyleSheet.create({
    container: {
        backgroundColor: "#171C26",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-evenly"
    },
    subContainer: {
        backgroundColor: "#171C26",
        height: "50%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "20%"
    },
    title: {
        color: "#BCCF2B",
        fontSize: 70,
        fontFamily: 'Jersey10',
        marginLeft: 20,
        marginTop: "10%",
        marginBottom: 30,
    },
    column: {
        height: "100%",
        width: "40%",
        margin: 10,
        justifyContent: "center",
        alignContent: "center"
    },
    section: {
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    sectionText: {
        color: "#BCCF2B",
        fontSize: 20,
        fontFamily: 'Jersey10',
        textAlign: "center"
    },
    groupedIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        alignItems: "center",
        minHeight: 200,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#262D3C",
        borderRadius: 40,
        boxShadow: "0 10 10"
    },
    


})