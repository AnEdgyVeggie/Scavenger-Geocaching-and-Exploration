
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'
import * as Font from "expo-font"
import POIs from "../../../SampleDatasets/PointsOfInterest"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const AchievementsHub = (props) => {

    const [ loaded, error ] = Font.useFonts({
        'Jersey10': require('../../../assets/fonts/Jersey10.ttf')
    })

    const Item = ({title, index}) => (
        <View style={index % 2 === 0 ? AchievementHubStyle.listItemEven : AchievementHubStyle.listItemOdd} >
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("View", {
                    index: index
                })
                }}
                >
                <Text style={AchievementHubStyle.listItemText} >{title}</Text>
            </TouchableOpacity>
        </View>
    )


    return(
        <View style={AchievementHubStyle.container} >
            <Text style={AchievementHubStyle.title}>
                SUBMIT{"\n"}ACHIEVEMENTS
            </Text>
            <SafeAreaProvider style={AchievementHubStyle.listContainer}>      
                <SafeAreaView style={AchievementHubStyle.listStyle}>
                    <FlatList data={POIs} 
                    renderItem={({item, index}) => <Item title={item.name} index={index}/>} 
                    keyExtractor={item => item.id}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

export default AchievementsHub

const AchievementHubStyle = StyleSheet.create({
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
        // marginTop: "10%"
        marginBottom: 30
    },
    listItemEven: {
        backgroundColor: "#171C26"
    },
    listItemOdd: {
        backgroundColor: "#333C4D"
    },
    listItemText: {
        color: "#FFF",
        fontSize: 32,
        margin: 7,
        fontFamily: 'Jersey10',
    },
    listContainer: {
        alignItems: "center",
        justifyContent: "start",
    },
    listStyle: {
        backgroundColor: "#999",
        width: "80%",
        height: "85%"
    }


})