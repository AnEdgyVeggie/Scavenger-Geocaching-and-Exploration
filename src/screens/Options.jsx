import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const Options = (props) => {



    return (
        <View style={OptionsStyle.container}>
            <Text style={OptionsStyle.title}>
                OPTIONS{"\n"}
            </Text>
            <View>

                <TouchableOpacity style={OptionsStyle.section}
                onPress={() => {
                    props.navigation.navigate("Manage")
                }}
                >
                    <Text style={OptionsStyle.genText}>POINT OF INTEREST MANAGEMENT{" >"}</Text>
                </TouchableOpacity>


            </View>

            <View style={OptionsStyle.buttonSection}>
                <TouchableOpacity style={OptionsStyle.button}>
                    <Text style={OptionsStyle.buttonText}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Options

const OptionsStyle = StyleSheet.create({
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
    section: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "50%",
        paddingTop: 30,
        paddingBottom: 15,
        marginLeft: 40,
        marginRight: 40
    },
    buttonSection: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "20%",
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
    button: {
        backgroundColor: "#BCCF2B",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "60%",
        borderRadius: 8,
        padding: 8
    },
    buttonText: {
        color: "#000",
        textAlign: "center",
        fontFamily: 'Jersey10',
        fontSize: 28
    },

})