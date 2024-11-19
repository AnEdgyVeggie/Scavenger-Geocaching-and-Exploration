import {View, Text, StyleSheet} from 'react-native'
import POIList from '../screens/POIScreens/POIList'
import ViewAchievements from  "../screens/Achievements/ViewAchievements"
import About from '../screens/About'
import Options from '../screens/Options'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

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
      backgroundColor: "#0B1221"
    }
}

const tabOptions = (icon, name) => {
    return {
        tabBarIcon: ({focused}) => {
            return(
                <View style={{width: "300%", justifyContent: "baseline", alignItems:"center",
                    position: "absolute", top: 0
                    
                }}> 
                    <Entypo name={icon} size={24} color={focused ? "#BCCF2B" : "#455806"} />
                    <Text style={ focused?  styles.bottomBarTextSelected : styles.bottomBarTextNonSelected}>{name}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    bottomBarTextSelected: {
        fontSize: 10,
        color: "#BCCF2B",
        textAlign: "center"
    },
    bottomBarTextNonSelected: {
        fontSize: 10,
        color: "#566017",
        textAlign: "center"
    }
})


const NavigationBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions} >
                <Tab.Screen name="Points Of Interest" component={POIList} options={tabOptions("map", "Points of \nInterest")} />
                <Tab.Screen name="Achievements" component={ViewAchievements} options={tabOptions("price-ribbon", "Achievements")}/>
                <Tab.Screen name="Options" component={Options} options={tabOptions("tools", "Options")} />
                <Tab.Screen name="About" component={About} options={tabOptions("info", "About")} />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}




export default NavigationBar