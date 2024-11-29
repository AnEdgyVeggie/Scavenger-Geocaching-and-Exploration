import { createNativeStackNavigator } from "@react-navigation/native-stack";
import POIManager from "../screens/POIScreens/POIManager";
import POICreate from "../screens/POIScreens/POICreate";
import POIDelete from "../screens/POIScreens/POIDelete";
import POIEdit from "../screens/POIScreens/POIEdit";
import Options from "../screens/Options";


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown:false,
}


export const AchievementStack = () => {
    return (
        <Stack.Navigator initialRouteName="Options">
            <Stack.Screen name="Options" component={Options} options={screenOptions}/>
            <Stack.Screen name="Manage" component={POIManager} options={screenOptions}/>
            <Stack.Screen name="Create" component={POICreate} options={screenOptions}/>
            <Stack.Screen name="Delete" component={POIDelete} options={screenOptions}/>
            <Stack.Screen name="Edit" component={POIEdit} options={screenOptions}/>
        </Stack.Navigator>
    )
}

export default App = () => {
    return(
        <AchievementStack />
    )
}
