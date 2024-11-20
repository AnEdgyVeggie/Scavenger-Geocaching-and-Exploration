import {View, StyleSheet, Text} from 'react-native'
import  POIs  from "../../../SampleDatasets/PointsOfInterest"

const POIDetails = ({route}) => {

    const { index } = route.params;

    const pointOfInterest = POIs[index]
    console.log(pointOfInterest)

    return (
        <View style={POIDetailsStyle.container}>
            <Text style={POIDetailsStyle.title}>{pointOfInterest.name.toUpperCase()}</Text>
        </View>
    )
}

export default POIDetails

const POIDetailsStyle = StyleSheet.create({
    container: {
        backgroundColor: "#171C26",
        height: "100%"
    },
    title: {
        color: "#BCCF2B",
        fontSize: 80,
        fontFamily: 'Jersey10',
        marginRight: 50,
        marginLeft: 50,
        marginTop: "20%",
        marginBottom: 30
    },
})