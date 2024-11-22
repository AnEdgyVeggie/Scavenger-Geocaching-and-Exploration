import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import  POIs  from "../../../SampleDatasets/PointsOfInterest"
import { Entypo } from '@expo/vector-icons';
import Achievement from  "../../../assets/images/achievement.png"

const SubmitAchievements = (props) => {

    console.log(props.route.params)

    const {pointOfInterest, difficultySection} = props.route.params

    return(
        <ScrollView style={SubmitAchievementsStyle.container}>
        <Text style={SubmitAchievementsStyle.title}>{pointOfInterest.name.toUpperCase()}</Text>
            {difficultySection}
        <View style={SubmitAchievementsStyle.barredSection}>
            <Text style={SubmitAchievementsStyle.headers}>ADDRESS</Text>
            <Text style={SubmitAchievementsStyle.genText} >{pointOfInterest.address}</Text>
        </View>

        <View style={SubmitAchievementsStyle.section}>
            <Text style={SubmitAchievementsStyle.headers} >REVIEW YOUR SUBMISSION</Text>

            <Image source={require("../../../assets/images/achievement.png")}
            style={SubmitAchievementsStyle.image}>

            </Image>


            <TouchableOpacity style={SubmitAchievementsStyle.submitButton}
            onPress={() => {
                props.navigation.navigate("Share", {
                    pointOfInterest: pointOfInterest
                })
            }}>
                <Text style={SubmitAchievementsStyle.submitButtonText}>SUBMIT ACHIEVEMENT</Text>
            </TouchableOpacity>
        </View>

        <View style={SubmitAchievementsStyle.footer}>
        </View>
    </ScrollView>
    )
}

export default SubmitAchievements


const SubmitAchievementsStyle = StyleSheet.create({
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
    difficultySection: {
        flexDirection: "row",
        marginLeft: 40
    },
    tag: {
        flexDirection: "row",
    },
    tagFront: {
        height: 50,
        width: 0,
        borderRightWidth: 20,
        borderRightColor: "#333C4D",
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
    },
    tagEnd: {
        height: 50,
        backgroundColor: "#333C4D",
        width: 80,
        justifyContent: "center",
    },
    tagText: {
        color: "white",
        fontFamily: 'Jersey10',
        fontSize: 28,
    },
    stars: {
        flexDirection: "row",
        marginLeft: 20
    }, 
    barredSection: {
        flexDirection: "column",
        justifyContent: "center",
        borderBottomColor: "#FFF",
        borderBottomWidth: 2,
        paddingTop: 30,
        paddingBottom: 15,
        marginLeft: 40,
        marginRight: 40
    },
    section: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 15,
        marginLeft: 40,
        marginRight: 40
    },
    headers: {
        fontSize: 28,
        color: "#BCCF2B",
        fontFamily: 'Jersey10',
    },
    genText: {
        fontSize: 28,
        color: "#FFF",
        fontFamily: 'Jersey10',
        marginBottom: 15
    },
    submitButton: {
        backgroundColor: "#BCCF2B",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 8,
        padding: 8
    },
    submitButtonText: {
        color: "#000",
        textAlign: "center",
        fontFamily: 'Jersey10',
        fontSize: 28
    },
    image: {
        marginTop: 20,
        marginLeft: 0,
        marginBottom: 40
    },
    footer: {
        height: 100
    }
})