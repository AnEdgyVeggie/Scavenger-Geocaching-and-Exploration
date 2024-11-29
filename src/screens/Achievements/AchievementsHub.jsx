
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'
import * as Font from "expo-font"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import POI_API_ADDR from "../../constants"

const AchievementsHub = (props) => {

    const [ loaded, error ] = Font.useFonts({
        'Jersey10': require('../../../assets/fonts/Jersey10.ttf')
    })

    const [POIs, setPOIs] = useState(null)

    useEffect(() => {
        retrievePOIs()
    }, [POIs])

    const retrievePOIs = async () => {
        const req = await fetch(POI_API_ADDR)
        const res = await req.json()
        setPOIs(res)
    }
    
    const Item = ({title, index, item}) => (
        <View style={index % 2 === 0 ? AchievementHubStyle.listItemEven : AchievementHubStyle.listItemOdd} >
            <TouchableOpacity onPressIn={() => {
                console.log("hi")
                props.navigation.navigate("View", {
                    item: item
                    })
                }}
                >
                <Text style={AchievementHubStyle.listItemText} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
    
    if (POIs === null) {
        return(
            <View style={AchievementHubStyle.container}>
                <Text style={AchievementHubStyle.title}>LOADING...</Text>
            </View>
        )
    }

    return(
        <View style={AchievementHubStyle.container} >
            <Text style={AchievementHubStyle.title}>
                SUBMIT{"\n"}ACHIEVEMENTS
            </Text>
            <SafeAreaProvider style={AchievementHubStyle.listContainer}>      
                <SafeAreaView style={AchievementHubStyle.listStyle}>
                <FlatList data={POIs} 
                    renderItem={({item, index}) => <Item title={item.name} item={item} index={index}/>} 
                    keyExtractor={item => item._id}/>
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
        backgroundColor: "#171C26",
        width: "80%",
        height: "85%"
    }


})