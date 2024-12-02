import { useState } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'
import email from 'react-native-email'

const ShareAchievements = (props) => {

    const {pointOfInterest } = props.route.params
    console.log()

    const [ shareMethod, setShareMethod ] = useState(null)
    const [ emailAddress, setEmail ] = useState("")
    const [ achievement, setAchievement ] = useState(pointOfInterest.name)
    

    const handleEmail = () => {
        const to = [emailAddress] 
        email(to, {
           
            cc: [], 
            bcc: "", 
            subject: 'I got an achievement!',
            body: `Take a look at this achievement I got!   NAME: ${pointOfInterest.name}\n   ADDRESS: ${pointOfInterest.address}\n   GOAL: ${pointOfInterest.instructions}}`,
            checkCanOpen: false 
        }).catch(console.error)
    
    }


    if (shareMethod === null) {
        return(
            <View style={ShareAchievementsStyle.container}>
                <Text style={ShareAchievementsStyle.title}>SHARE{"\n"}ACHIEVEMENTS</Text>
    
                <View style={ShareAchievementsStyle.section}>
                    <Text style={ShareAchievementsStyle.headers}>SHARE YOUR ACHIEVEMENTS WITH FRIENDS BY EMAIL OR ON X</Text>
                </View>
    
                <View style={ShareAchievementsStyle.section}>
                    <TouchableOpacity style={ShareAchievementsStyle.button} onPress={() => {
                        setShareMethod("email")
                    }}>
                        <Text style={ShareAchievementsStyle.buttonText}>SHARE BY EMAIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ShareAchievementsStyle.button} onPress={() => {
                        setShareMethod("x")
                    }}>
                        <Text style={ShareAchievementsStyle.buttonText}>SHARE BY X</Text>
                    </TouchableOpacity>
    
                </View>
            </View>
        )
    } else if (shareMethod === "email") {
        return(
            <View style={ShareAchievementsStyle.container}>
                <Text style={ShareAchievementsStyle.title}>SHARE{"\n"}ACHIEVEMENTS</Text>
    
                <View style={ShareAchievementsStyle.section}>
                    <Text style={ShareAchievementsStyle.headers}>YOU'RE SHARING AN ACHIEVEMENT BY EMAIL</Text>
                </View>

                <View style={ShareAchievementsStyle.section}>

                    <View style={ShareAchievementsStyle.inputSection}>
                        <Text style={ShareAchievementsStyle.genText}>Sharing Achievement:</Text>
                        <Text style={ShareAchievementsStyle.genText}>{pointOfInterest.name.toUpperCase()}</Text>
                        <Text style={ShareAchievementsStyle.genText}>{pointOfInterest.address.toUpperCase()}</Text>
                    </View>


                    <View style={ShareAchievementsStyle.inputSection}>
                        <Text style={ShareAchievementsStyle.genText}>Email of friend:</Text>
                        <TextInput style={ShareAchievementsStyle.input} onChangeText={value => setEmail(value)} />
                    </View>

                <TouchableOpacity style={ShareAchievementsStyle.button}  onPress={handleEmail}>
                    <Text style={ShareAchievementsStyle.buttonText} >SEND</Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    } else if (shareMethod === "x") {
        return (
            <View style={ShareAchievementsStyle.container}>
                <Text style={ShareAchievementsStyle.title}>SHARE{"\n"}ACHIEVEMENTS</Text>
    
                <View style={ShareAchievementsStyle.section}>
                    <Text style={ShareAchievementsStyle.headers}>YOU'RE SHARING AN ACHIEVEMENT BY X</Text>
                </View>


                <View style={ShareAchievementsStyle.section}>

                    <View style={ShareAchievementsStyle.inputSection}>
                        <Text style={ShareAchievementsStyle.genText}>Sharing Achievement:</Text>
                        <Text style={ShareAchievementsStyle.genText}>{pointOfInterest.name.toUpperCase()}</Text>
                        <Text style={ShareAchievementsStyle.genText}>{pointOfInterest.address.toUpperCase()}</Text>

                    </View>

                </View>
            </View>
        )
    }

}

export default ShareAchievements

const ShareAchievementsStyle = StyleSheet.create({
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
    section: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 15,
        marginLeft: 40,
        marginRight: 40
    },
    inputSection: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 15,
    },
    button: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        borderWidth: 1,
        borderColor: "#333C4D",
        marginTop: 20
    },
    buttonText: {
        color: "#FFF",
        fontFamily: 'Jersey10',
        fontSize: 28
    },
    input: {
        backgroundColor: "#333C4D",
        color: "#fff",
        paddingLeft: 10,
        fontFamily: 'Jersey10',
        fontSize: 28,
        height: 40
    },
    inputText: {
        color: "#fff",
        fontFamily: 'Jersey10',
        fontSize: 28,
    }
})