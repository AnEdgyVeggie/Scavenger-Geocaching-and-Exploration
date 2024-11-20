import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NavigationIndependentTree } from "@react-navigation/native-stack";
import POIList from "../screens/POIScreens/POIList"
import POIDetails from "../screens/POIScreens/POIDetails";
import POICreate from "../screens/POIScreens/POICreate"
import POIDelete from "../screens/POIScreens/POIDelete";
import POIDirections from "../screens/POIScreens/POIDirections"
import POIEdit from "../screens/POIScreens/POIEdit";
import POIManager from "../screens/POIScreens/POIManager"


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown:false,
}


export const POIStack = () => {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={POIList} options={screenOptions}/>
            <Stack.Screen name="Details" component={POIDetails} options={screenOptions}/>
            <Stack.Screen name="Create" component={POICreate} options={screenOptions}/>
            <Stack.Screen name="Delete" component={POIDelete} options={screenOptions}/>
            <Stack.Screen name="Directions" component={POIDirections} options={screenOptions}/>
            <Stack.Screen name="Edit" component={POIEdit} options={screenOptions}/>
            <Stack.Screen name="Manager" component={POIManager} options={screenOptions}/>
        </Stack.Navigator>
    )
}

export default App = () => {
    return(
        <POIStack />
    )
}
