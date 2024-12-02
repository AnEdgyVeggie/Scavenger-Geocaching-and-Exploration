import {ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'
import { useEffect, useState } from 'react'
import { USER_API_ADDR } from "../../constants"

const Login = ( props ) => {
    
    const {setLoggedIn} = props.route.params.setLoggedIn

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")


    const submitLogin = async () => {
        // console.log(email)
        // console.log(password)
        const reqBody = createLoginObject()

        const request = await fetch("https://one01479568-comp3123-assignment1.onrender.com/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
            body: JSON.stringify(reqBody)
        })
        const response = await request.json()
        console.log(response.status)
        if (response.status === 200) {

        } else {
            setError("Invalid email or password")
        }
    }

    const createLoginObject = () => {
        return {
            email: email,
            password: password
        }
    }

    return (
        <ScrollView style={LoginStyle.container} >
            <Text style={LoginStyle.title}>LOGIN{"\n"}</Text>

            <View style={LoginStyle.section} >


                <View style={LoginStyle.inputSection} >
                    <Text style={LoginStyle.labelText} >Email: </Text>
                    <TextInput style={LoginStyle.input} onChangeText={value => setEmail(value)} 
                        textContentType='email'/>
                </View>



                <View style={LoginStyle.inputSection} >
                    <Text style={LoginStyle.labelText} >Password: </Text>
                    <TextInput style={LoginStyle.input} onChangeText={value => setPassword(value)} 
                        secureTextEntry={true} />
                </View>

                <View style={LoginStyle.inputSection} >
                    <TouchableOpacity style={LoginStyle.submitButton} onPress={submitLogin} >
                        <Text style={LoginStyle.submitButtonText}  >LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Text style={LoginStyle.error} >{error}</Text>

                <TouchableOpacity style={LoginStyle.switchScreen} onPress={() => {
                    props.navigation.navigate("CreateAccount")
                    }
                } >
                        <Text style={LoginStyle.genText}  >Don't have an account? Create one!</Text>
                </TouchableOpacity>
                
                <View style={LoginStyle.footer}></View>
                <View style={LoginStyle.footer}></View>
            </View>

        </ScrollView >
    )
}

export default Login

// style={LoginStyle}

const LoginStyle = StyleSheet.create({
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
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 15,
        marginLeft: 40,
        marginRight: 40,
        height: "120%",
        justifyContent: "space-between",
    },
    genText: {
        fontSize: 22,
        color: "#FFF",
        fontFamily: 'Jersey10',
        textAlign: "center",
    },
    labelText: {
        fontSize: 32,
        color: "#FFF",
        fontFamily: 'Jersey10',
    },
    selection: {
        marginTop: 5,
        paddingLeft: 10,
    },
    inputSection: {
        flexDirection: "column",
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#333C4D",
        color: "#fff",
        paddingLeft: 10,
        fontFamily: 'Jersey10',
        fontSize: 28,
        height: 45,
        borderRadius: 8
    },
    inputText: {
        color: "#fff",
        fontFamily: 'Jersey10',
        fontSize: 28,
    },
    submitButton: {
        backgroundColor :"#BCCF2B",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 30,
        marginBottom: 10,
    }, 
    submitButtonText: {
        fontFamily: 'Jersey10',
        color: "#000",
        fontSize: 28,
    },
    footer: {
        height: 100
    },
    error: {
        fontSize: 28,
        fontFamily: 'Jersey10',
        color: "#F00",
        textAlign: "center"
    },
    switchScreen: {

        // paddingLeft: 10,
        marginTop: 30,
        height: 60,
    }, 
})