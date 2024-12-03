import {ScrollView, View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'
import { useEffect, useState } from 'react'
import { USER_API_ADDR } from "../../constants"

const CreateAccount = (props) => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ error, setError ] = useState("")

    const submitAccountCreation = async () => {
        if (email.length < 3 || password.length < 3 || username.length < 3) {
            setError("Invalid or missing information")   
            return
        }

        const reqBody = createRegistrationObject()
        const request = await fetch("https://one01479568-comp3123-assignment1.onrender.com/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
            body: JSON.stringify(reqBody)
        })
        const response = await request

        
        if (response.status === 200) {
            props.navigation.navigate("Login")
        } else {
            setError("Invalid or missing information")
        }
    }

    const createRegistrationObject = () => {
        return {
            username: username,
            email: email,
            password: password
        }
    }

    return (

        <ScrollView style={CreateAccountStyle.container} >
            <Text style={CreateAccountStyle.title}>CREATE ACCOUNT</Text>

            <View style={CreateAccountStyle.section} >

            <View style={CreateAccountStyle.inputSection} >
                    <Text style={CreateAccountStyle.labelText} >Username: </Text>
                    <TextInput style={CreateAccountStyle.input} onChangeText={value => setUsername(value)} 
                        />
                </View>


                <View style={CreateAccountStyle.inputSection} >
                    <Text style={CreateAccountStyle.labelText} >Email: </Text>
                    <TextInput style={CreateAccountStyle.input} onChangeText={value => setEmail(value)} 
                        textContentType='email'/>
                </View>



                <View style={CreateAccountStyle.inputSection} >
                    <Text style={CreateAccountStyle.labelText} >Password: </Text>
                    <TextInput style={CreateAccountStyle.input} onChangeText={value => setPassword(value)} 
                        secureTextEntry={true} />
                </View>

                <View style={CreateAccountStyle.inputSection} >
                    <TouchableOpacity style={CreateAccountStyle.submitButton} onPress={submitAccountCreation} >
                        <Text style={CreateAccountStyle.submitButtonText}  >CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>

                <Text style={CreateAccountStyle.error} >{error}</Text>

                <TouchableOpacity style={CreateAccountStyle.switchScreen} onPress={() => {
                    props.navigation.navigate("Login")
                    }
                } >
                        <Text style={CreateAccountStyle.genText}  >Already have an account? Login here!</Text>
                </TouchableOpacity>

                
                <View style={CreateAccountStyle.footer}></View>
                <View style={CreateAccountStyle.footer}></View>
            </View>

        </ScrollView >
    )
}

export default CreateAccount


const CreateAccountStyle = StyleSheet.create({
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
        marginBottom: 20
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
        marginTop: 20,
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
        height: 60,
    }, 
})