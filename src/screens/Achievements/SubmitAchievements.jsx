import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as ImagePicker from "expo-image-picker"
import { ACHIEVEMENT_API_ADDR } from '../../constants';
import { useState } from 'react'


const SubmitAchievements = (props) => {

    const {pointOfInterest, difficultySection} = props.route.params

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.
            requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "Permission Denied",
                `Sorry, we need camera 
                 roll permission to upload images.`
            );
        } else {
            const result =
            await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                setFile(result.assets[0].uri);
                setError(null);
            } else {
                setFile(null)
            }
        }
    };

    const submitRating = async () => {
        await fetch(ACHIEVEMENT_API_ADDR,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
                body: JSON.stringify(createPOSTBody())
            }
        )
    }

    const createPOSTBody = () => {
        return {
            achievement: pointOfInterest._id,
            userID: "67343d1f5281770c0a644f5c"
        }
    }

    if (file === null)   {
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
    
                <TouchableOpacity  style={SubmitAchievementsStyle.photoUploadBox}
                    onPress={pickImage}    >
                    <Entypo name='plus' size={46} color={"#333C4D"} />
                    <Text style={SubmitAchievementsStyle.photoUploadText}>Upload Photo</Text>
                </TouchableOpacity>

                    <TouchableOpacity style={SubmitAchievementsStyle.submitButton}
                    onPress={()=> {
                        alert("Whoops! You need to upload a photo before submitting an achievement.")
                    }}
                    >
                        <Text style={SubmitAchievementsStyle.submitButtonText}>SUBMIT ACHIEVEMENT</Text>
                    </TouchableOpacity>
    
            </View>
    
            <View style={SubmitAchievementsStyle.footer}>
            </View>
        </ScrollView>
        )

    } else {
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
    
                <Image source={{uri: file}} style={SubmitAchievementsStyle.image} />

                    <TouchableOpacity style={SubmitAchievementsStyle.submitButton}
                    onPress={() => {
                        submitRating()
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
    },
    photoUploadBox: {
        borderWidth: 2,
        borderColor: "#333C4D",
        height: 200,
        width: "100%",
        borderStyle: "dashed",
        marginBottom: 30,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    photoUploadText: {
        color: "#333C4D",
        fontSize: 22
    },
    image : {
        borderWidth: 2,
        borderColor: "#333C4D",
        height: 200,
        marginBottom: 30,
        marginTop: 30,
    }
    
})