import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native'
import { Entypo } from '@expo/vector-icons';

const ViewAchievements = (props) => {

    const { item } = props.route.params
    const pointOfInterest = item


    const generateDifficultyStars = () => {
        let icons = []
        for (let star = 1; star <= 5; star++) {
            if (star <= pointOfInterest["rating"]){
                icons.push(
                    <Entypo key={star} name='star' color={"#BCCF2B"} size={36}></Entypo>
                )
            }
            else {
                icons.push(
                    <Entypo key={star} name='star' color={"white"} size={36}></Entypo>
                )
            }
        }
        return icons
    }

    const generateDifficultySection= () => {
        return (
            <View style={ViewAchievementsStyle.difficultySection}>
                <View style={ViewAchievementsStyle.tag}>
                    <View style={ViewAchievementsStyle.tagFront}></View>
                    <View style={ViewAchievementsStyle.tagEnd}>
                        <Text style={ViewAchievementsStyle.tagText}>{pointOfInterest.tag.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={ViewAchievementsStyle.stars}>
                    {generateDifficultyStars()}
                </View>
            </View>

        )
    }


    return(
        <ScrollView style={ViewAchievementsStyle.container}>
        <Text style={ViewAchievementsStyle.title}>{pointOfInterest.name.toUpperCase()}</Text>
            {generateDifficultySection()}
        <View style={ViewAchievementsStyle.barredSection}>
            <Text style={ViewAchievementsStyle.headers}>ADDRESS</Text>
            <Text style={ViewAchievementsStyle.genText} >{pointOfInterest.address}</Text>
        </View>

        <View style={ViewAchievementsStyle.barredSection}>
            <Text style={ViewAchievementsStyle.headers} >YOU'RE SUBMITTING AN ACHIEVEMENT FOR:</Text>
            <Text style={ViewAchievementsStyle.genText} >{pointOfInterest.name}</Text>
        </View>

        <View style={ViewAchievementsStyle.section}>
            <TouchableOpacity onPress={() =>  {
                props.navigation.navigate("Submit", {
                    difficultySection: generateDifficultySection(),
                    pointOfInterest: pointOfInterest
                })
            }}>
                <Text style={ViewAchievementsStyle.genText}>SUBMIT PHOTO {">"}</Text>
            </TouchableOpacity >

            <TouchableOpacity onPress={() =>{
                props.navigation.navigate("Rate", {
                    pointOfInterest: pointOfInterest,
                    difficultySection: generateDifficultySection()
                })
                                
            }} >
                <Text style={ViewAchievementsStyle.genText}>REVIEW POINT OF INTEREST {">"}</Text>
            </TouchableOpacity>
        </View>

        <View style={ViewAchievementsStyle.footer}>
        </View>
    </ScrollView>
)
}


export default ViewAchievements

const ViewAchievementsStyle = StyleSheet.create({
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
    footer: {
        height: 100
    }
})