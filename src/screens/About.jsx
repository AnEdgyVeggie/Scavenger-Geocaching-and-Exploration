import {} from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

const About = () => {

    const AboutStyle = StyleSheet.create({
        container: {
            backgroundColor: "#171C26",
            height: "100%"
        },
        titleText: {
            color: "#BCCF2B",
            fontSize: 72,
            fontFamily: 'Jersey10',
            marginRight: 20,
            marginLeft: 40,
            marginBottom: 30
        },
        subContainer: {
            marginLeft: 50,
            height: "30%",
            justifyContent: "space-between"
        },
        aboutText: {
            fontSize: 32,
            fontFamily: 'Jersey10',
            color: "white"
        },
        namesText: {
            fontSize: 32,
            fontFamily: 'Jersey10',
            color: "#BCCF2B"
        }
    })

    return (
        <View style={AboutStyle.container} >
            <Text style={AboutStyle.titleText} >ABOUT</Text>
            <View style={AboutStyle.subContainer}>
                <Text style={AboutStyle.aboutText} >SCAVENGER was created by {"\n"}three GBC students:</Text>
                <View>
                    <Text style={AboutStyle.namesText} >AMANDA GURNEY</Text>
                    <Text style={AboutStyle.namesText} >TAYLOR MARTIN</Text>
                    <Text style={AboutStyle.namesText} >ETHAN SYLVESTER</Text>
                </View>

            </View>
        </View>
    )
}

export default About