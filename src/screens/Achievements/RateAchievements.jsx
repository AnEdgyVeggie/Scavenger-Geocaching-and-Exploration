import {ScrollView, View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react'


const RateAchievements = (props) => {

    const {pointOfInterest, difficultySection} = props.route.params

    const [ starRating, setStarRating ] = useState(3)
    const [ stars, setStars ] = useState([])

    console.log(pointOfInterest._id)

    useEffect(() => {
        generateDifficultyStars()
    }, [starRating])

    const generateDifficultyStars = () => {
        let stars = []
        
        for (let star = 1; star <= 5; star++) {
            if (star <= starRating) {
                stars.push(
                    <TouchableOpacity style={RateAchievementsStyle.starStyle}
                    onPress={() => {
                        setStarRating(star)
                    }}
                    >
                        <Entypo key={star} name='star' color={"#BCCF2B"} size={36}></Entypo>
                    </TouchableOpacity>
                )
            }
            else {
                stars.push(
                    <TouchableOpacity style={RateAchievementsStyle.starStyle}
                    onPress={() => {
                        setStarRating(star)
                    }}>
                        <Entypo key={star} name='star' color={"white"} size={36}></Entypo>
                    </TouchableOpacity>
                )
            }
        }
        setStars(stars)
    }

    return(
        <ScrollView style={RateAchievementsStyle.container}>
        <Text style={RateAchievementsStyle.title}>{pointOfInterest.name.toUpperCase()}</Text>
            {difficultySection}
        <View style={RateAchievementsStyle.barredSection}>
            <Text style={RateAchievementsStyle.headers}>ADDRESS</Text>
            <Text style={RateAchievementsStyle.genText} >{pointOfInterest.address}</Text>
        </View>

        <View style={RateAchievementsStyle.barredSection}>
            <Text style={RateAchievementsStyle.headers}>SELECT STARS TO REVIEW POI:</Text>
            <Text style={RateAchievementsStyle.genText} >{pointOfInterest.name}</Text>
        </View>
        <View style={RateAchievementsStyle.starsSection}>
            {stars}
        </View>

        <View style={RateAchievementsStyle.section}>
            <TouchableOpacity style={RateAchievementsStyle.submitButton} 
                onPress={() => {
                    alert("Your review has been submitted!")
                    props.navigation.popToTop()}
                }
            >
                <Text style={RateAchievementsStyle.submitButtonText}>SUBMIT REVIEW</Text>
            </TouchableOpacity>

        </View>

        <View style={RateAchievementsStyle.footer}>
        </View>
    </ScrollView>
    )
}

export default RateAchievements



const RateAchievementsStyle = StyleSheet.create({
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
        marginBottom: 15,
        marginTop: 15
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
    starsSection: {
        margin: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    starStyle: {
        width: 40,
        height: 40,
    },
    footer: {
        height: 100
    },
})