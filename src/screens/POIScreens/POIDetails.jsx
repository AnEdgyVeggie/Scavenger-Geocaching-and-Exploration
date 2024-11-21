import {ScrollView, View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native'
import  POIs  from "../../../SampleDatasets/PointsOfInterest"
import { Entypo } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { fromAddress, geocode, RequestType, setDefaults } from 'react-geocode';

const POIDetails = (props) => {

    const { index } = props.route.params

    const [destinationLat, setDestinationLat] = useState(null)
    const [destinationLong, setDestinationLong] = useState(null)

    setDefaults({
        key: "AIzaSyB7yqB5r1n3R05kGGntQzjZSb0Z8J6yYj0", 
        language: "en", // Default language for responses.
        region: "es", // Default region for responses.
      });

    useEffect(() => {
        generateLatLong()
    }, [])
    

    const pointOfInterest = POIs[index]

    const difficultyText = () => {
        switch (pointOfInterest["rating"]) {
            case 1:
                return "EASY"
            case 2:
                return "EASY"
            case 3:
                return "MID"
            case 4:
                return "HARD"
            case 5:
                return "HARD"
            default:
                return "UNKNOWN"
        }
    }

    const generateLatLong = async () => {
        await geocode(RequestType.ADDRESS, pointOfInterest.address)
        .then(({ results }) => {
            const { lat, lng } = results[0].geometry.location;
            setDestinationLat(lat);
            setDestinationLong(lng);
        })
    }

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
        <View style={POIDetailsStyle.difficultySection}>
            <View style={POIDetailsStyle.tag}>
                <View style={POIDetailsStyle.tagFront}></View>
                <View style={POIDetailsStyle.tagEnd}>
                    <Text style={POIDetailsStyle.tagText}>{difficultyText()}</Text>
                </View>
            </View>
            <View style={POIDetailsStyle.stars}>
                {generateDifficultyStars()}
            </View>
        </View>
    }


    if (destinationLat === null || destinationLong === null) {
        return(
            <View style={POIDetailsStyle.container}>
                <Text style={POIDetailsStyle.title}>LOADING...</Text>
            </View>
        )
    }

    else {
        return (
            <ScrollView style={POIDetailsStyle.container}>
                <Text style={POIDetailsStyle.title}>{pointOfInterest.name.toUpperCase()}</Text>
                    {generateDifficultySection()}
                <View style={POIDetailsStyle.addressSection}>
                    <Text style={POIDetailsStyle.headers}>ADDRESS</Text>
                    <Text style={POIDetailsStyle.genText} >{pointOfInterest.address}</Text>
                </View>

                <View style={POIDetailsStyle.instructionsSection}>
                    <Text style={POIDetailsStyle.headers}>INSTRUCTIONS</Text>
                    <Text style={POIDetailsStyle.genText} >{pointOfInterest.instructions}</Text>
                </View>

                <View style={POIDetailsStyle.instructionsSection}>
                    <TouchableOpacity onPress={() => {
                        const gURL = `https://www.google.com/maps/search/?api=1&query=${destinationLat},${destinationLong}`
                        Linking.openURL(gURL)
                    }}>
                        
                        <Text  style={POIDetailsStyle.headers}>VIEW MAP {'>'}</Text>

                    </TouchableOpacity>
                    <MapView
                    style={POIDetailsStyle.mapStyle}
                    initialRegion={{
                        latitude: destinationLat,
                        longitude: destinationLong,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    // customMapStyle={mapStyle}
                    >
                        <Marker
                            coordinate={{
                                latitude: destinationLat || null,
                                longitude: destinationLong || null
                            }}>
                        </Marker>
                    </MapView>
                </View>

                <View style={POIDetailsStyle.instructionsSection}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("Directions", {
                            difficultySection: generateDifficultySection(),
                            pointOfInterest: pointOfInterest,
                            destinationLat: destinationLat,
                            destinationLong: destinationLong,
                            apiKey: "AIzaSyB7yqB5r1n3R05kGGntQzjZSb0Z8J6yYj0"
                            // mapStyle: mapStyle
                    })
                    }}>
                        <Text style={POIDetailsStyle.headers}>GET DIRECTIONS{" >"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={POIDetailsStyle.footer}>

                </View>
            </ScrollView>
        )
    }
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
        marginTop: "10%",
        marginBottom: 20
    },
    difficultySection: {
        flexDirection: "row",
        marginLeft: 50
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
    addressSection: {
        flexDirection: "column",
        justifyContent: "center",
        borderBottomColor: "#FFF",
        borderBottomWidth: 2,
        paddingTop: 30,
        paddingBottom: 30,
        marginLeft: 50,
        marginRight: 40
    },
    instructionsSection: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 30,
        marginLeft: 50,
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
    },
    mapStyle: {
        height: 200,
        marginRight: 20
      },
    footer: {
        height: 100
    }
})


// const mapStyle = [
//     {elementType: 'geometry', stylers: [{color: '#92AAA4'}]},
//     {elementType: 'labels.text.fill', stylers: [{color: '#131516'}]},
//     {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
//     {
//       featureType: 'administrative.locality',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'poi',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'geometry',
//       stylers: [{color: '#648746'}],
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry',
//       stylers: [{color: '#A17272 '}],
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry.stroke',
//       stylers: [{color: '#000000'}],
//     },
//     {
//       featureType: 'road',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry',
//       stylers: [{color: '#A17272'}],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.stroke',
//       stylers: [{color: '#000000'}],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'transit',
//       elementType: 'geometry',
//       stylers: [{color: '#545492'}],
//     },
//     {
//       featureType: 'transit.station',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry',
//       stylers: [{color: '#1F4256'}],
//     },
//     {
//       featureType: 'water',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#131516'}],
//     },
//     {
//       featureType: 'water',
//       elementType: 'labels.text.stroke',
//       stylers: [{color: '#FFFFFF'}],
//     },
//   ];