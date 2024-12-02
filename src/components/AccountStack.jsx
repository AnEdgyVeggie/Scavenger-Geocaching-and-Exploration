import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NavigationIndependentTree } from "@react-navigation/native-stack";
import Login from "../screens/AccountManagement/Login"
import CreateAccount from "../screens/AccountManagement/CreateAccount"

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown:false,
}

export const AccountStack = (setLoggedIn) => {
    // console.log(setLoggedIn)
    

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={screenOptions}
                initialParams={setLoggedIn} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={screenOptions}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App = (setLoggedIn) => {
    // console.log(setLoggedIn)

    return(
        <AccountStack setLoggedIn={setLoggedIn} />
    )
}
