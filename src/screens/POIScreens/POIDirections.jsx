import { useEffect, useState } from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity, PermissionsAndroid} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';


const POIDirections = (props) => {

    const {
        difficultySection, pointOfInterest, destinationLat, destinationLong,apiKey
    } = props.route.params

    const [ userLocation, setUserLocation ] = useState(null)
    const [mapView, setMapView] = useState(null)

    useEffect(() => {
        getLocationPerms()
    }, [])

    
    
    const getLocationPerms = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Scavenger is requesting permission to access your location",
                    message: "Scavenger needs to access your location in order to work correctly.",
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                    
                }
            
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getCurrentLocation()
            } else {
                console.log("failure")
            }

        } catch (error) {
            console.warn(error)
        }
    }
    
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords;
            setUserLocation({latitude, longitude})
            console.log(latitude)
        },
        error => alert('An Error has occurred when trying to obtain your locations.', error),
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 20000}
    )
    }




if (userLocation === null)         
    return(
        <View style={POIDetailsStyle.container}>
            <Text style={POIDetailsStyle.title}>LOADING...</Text>
        </View>
)

if (userLocation === false)
    return (
        <View style={POIDetailsStyle.container}>
            <Text style={POIDetailsStyle.headers}>{"\n"}{"\n"}{"\n"}SORRY... {"\n"}YOUR DEVICE APPEARS TO NOT HAVE LOCATION ENABLED{"\n"}
                PLEASE TURN IT ON OR TRY AGAIN{"\n"}{"\n"}{"\n"}
            </Text>
            <TouchableOpacity onPress={() => {
            props.navigation.pop()
        }}>
            <Text style={POIDetailsStyle.returnText}>{"< "}BACK TO DETAILS</Text> 
        </TouchableOpacity>

        </View>
)

    return (
        <ScrollView style={POIDetailsStyle.container}>
            <Text style={POIDetailsStyle.title}>{pointOfInterest.name.toUpperCase()}</Text>
                {difficultySection}
            <View style={POIDetailsStyle.addressSection}>
                <Text style={POIDetailsStyle.headers}>ADDRESS</Text>
                <Text style={POIDetailsStyle.genText} >{pointOfInterest.address}</Text>
            </View>

            <View style={POIDetailsStyle.mapSection}>
        <TouchableOpacity onPress={() => {
            props.navigation.pop()
        }}>
            <Text style={POIDetailsStyle.returnText}>{"< "}BACK TO DETAILS</Text> 
        </TouchableOpacity>

                <MapView
                style={POIDetailsStyle.mapStyle}
                region={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: .011,
                    longitudeDelta: 0.031,
                }}
                ref={c => setMapView(c)}
                >
                    <MapViewDirections
                        origin={{latitude: userLocation.latitude, longitude: userLocation.longitude}}
                        destination={{latitude: destinationLat, longitude: destinationLong}}
                        apikey={apiKey}
                        mode='BICYCLING'
                        strokeWidth={3}
                        strokeColor='hotpink'

                        onReady={result =>
                            mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                  right: 10,
                                  bottom: 10,
                                  left: 10,
                                  top: 10,
                                }
                              })
                        }
                    />

                    <Marker
                        coordinate={{
                            latitude: destinationLat,
                            longitude: destinationLong
                        }}
                        >
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude: userLocation.latitude, 
                            longitude: userLocation.longitude
                        }}
                        >
                    </Marker>
                </MapView>
            </View>
            <View style={POIDetailsStyle.footer}></View>
        </ScrollView>
    )

}

export default POIDirections


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
        marginLeft: 40,
        // marginTop: "10%",
        marginBottom: 20
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
    addressSection: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 30,
        marginLeft: 40,
        marginRight: 40
    },
    instructionsSection: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 30,
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
    },
    mapSection: {
        paddingTop: 20,
        // alignItems: "center",
        justifyContent: "center",
        height: 450,
        marginRight: 30,
        marginLeft: 30,
        textAlign: "left",
        backgroundColor: "#262D3C"
    },
    mapStyle: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "85%",
        width: "90%",
        margin: "auto",
        border: 2,
        borderColor: "#FFF"
      },
        returnText: {
        fontSize: 28,
        color: "#BCCF2B",
        fontFamily: 'Jersey10',
        marginLeft: 30,
    },
    footer: {
        height: 100
    }
})
