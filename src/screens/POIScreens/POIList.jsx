import { View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native'
import * as Font from "expo-font"
import POI_API_ADDR from "../../constants"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'


const POIList = (props) => {

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
    
    if (POIs === null) {
        return(
            <View style={POIStyle.container}>
                <Text style={POIStyle.title}>LOADING...</Text>
            </View>
        )
    }

    const Item = ({title, item, index}) => (
        <View style={index % 2 === 0 ? POIStyle.listItemEven : POIStyle.listItemOdd} >
            <TouchableOpacity  onPressIn={() => {
                props.navigation.navigate("Details", {
                    item: item
                    })
                }}
                >
                <Text style={POIStyle.listItemText} >{title}</Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <View style={POIStyle.container}>
            <Text style={POIStyle.title}>
                POINTS{'\n'}OF INTEREST
            </Text>
            <SafeAreaProvider style={POIStyle.listContainer}>      
                <SafeAreaView style={POIStyle.listStyle}>
                    <FlatList data={POIs} 
                    renderItem={({item, index}) => <Item title={item.name} item={item} index={index}/>} 
                    keyExtractor={item => item._id}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

export default POIList


const POIStyle = StyleSheet.create({
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
        backgroundColor: "#171C26"
    },
    listStyle: {
        backgroundColor: "#171C26",
        width: "80%",
        height: "85%"
    }
})

