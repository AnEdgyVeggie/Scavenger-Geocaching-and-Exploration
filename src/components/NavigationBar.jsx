import {View, Text, StyleSheet} from 'react-native'
import About from '../screens/About'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import POIStack from './POIStack'
import AchievementStack from "./AchievementsStack"
import OptionsStack from './OptionsStack'

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    headerShown:false,

    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 2,
      height: 60,
      backgroundColor: "#262D3C"
    }
}

const tabOptions = (icon, name) => {
    return {
        tabBarIcon: ({focused}) => {
            return(
                <View style={{width: "300%", alignItems:"center",
                    position: "absolute", top: 7
                    
                }}> 
                    <Entypo name={icon} size={24} color={focused ? "#BCCF2B" : "#455806"} />
                    <Text style={ focused ? styles.bottomBarTextSelected : styles.bottomBarTextNonSelected}>{name}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    bottomBarTextSelected: {
        fontSize: 11,
        color: "#BCCF2B",
        textAlign: "center"
    },
    bottomBarTextNonSelected: {
        fontSize: 11,
        color: "#566017",
        textAlign: "center"
    }
})

// Navigation hub for other screens.
const NavigationBar = ( setLoggedIn ) => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions} >
                <Tab.Screen name="POI" component={POIStack} options={tabOptions("map", "Locations")} />
                <Tab.Screen name="Achievements" component={AchievementStack} options={tabOptions("price-ribbon", "Achievements")}/>
                <Tab.Screen name="Options" component={OptionsStack} options={tabOptions("tools", "Options")} initialParams={setLoggedIn}  />
                <Tab.Screen name="About" component={About} options={tabOptions("info", "About")} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}




export default NavigationBar