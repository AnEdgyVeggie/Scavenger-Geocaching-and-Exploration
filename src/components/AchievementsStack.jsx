import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RateAchievements from "../screens/Achievements/RateAchievements"
import ShareAchievements from "../screens/Achievements/ShareAchievements"
import SubmitAchievements from "../screens/Achievements/SubmitAchievements"
import ViewAchievements from "../screens/Achievements/ViewAchievements"
import AchievementsHub from "../screens/Achievements/AchievementsHub"
import POIDetails from "../screens/POIScreens/POIDetails";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown:false,
}

export const AchievementStack = () => {
    return (
        <Stack.Navigator initialRouteName="Hub">
            <Stack.Screen name="Hub" component={AchievementsHub} options={screenOptions}/>
            <Stack.Screen name="Rate" component={RateAchievements} options={screenOptions}/>
            <Stack.Screen name="Share" component={ShareAchievements} options={screenOptions}/>
            <Stack.Screen name="Submit" component={SubmitAchievements} options={screenOptions}/>
            <Stack.Screen name="View" component={ViewAchievements} options={screenOptions}/>
            <Stack.Screen name="Details" component={POIDetails} options={screenOptions}/>
        </Stack.Navigator>
    )
}

export default App = () => {
    return(
        <AchievementStack />
    )
}
