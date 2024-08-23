import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View,Image} from 'react-native';

import HomeScreen from './HomeScreen';
import VisualizationScreen from './VisualizationScreen';
import UserProfileScreen from './UserProfileScreen';

const TabNavigator=createBottomTabNavigator();

const Tabs=({route,navigation})=>{
    return(
    <TabNavigator.Navigator initialRouteName='Home' screenOptions={{headerShown: false,activeTintColor:'#99dfec',tabBarStyle:{backgroundColor:'black'}}}>
        <TabNavigator.Screen name="Home" component={HomeScreen} options={{tabBarLabelStyle:{display: 'none'},tabBarIcon:({focused,color,size})=><View style={focused?{width:'65%',height:1.5*size,alignItems:'center',justifyContent:'center',borderTopColor:'#5befe1',marginTop:-15,paddingTop:10,borderWidth:3}:{}}><Image source={require('../assets/profiles.png')} style={{width:1.75*size,height:1.75*size}}/></View>}}/>
        <TabNavigator.Screen name="GraphView" component={VisualizationScreen} options={{tabBarLabelStyle:{display: 'none'},tabBarIcon:({focused,color,size})=><View style={focused?{width:'65%',height:1.5*size,alignItems:'center',justifyContent:'center',borderTopColor:'#5befe1',marginTop:-15,paddingTop:10,borderWidth:3}:{}}><Image source={require('../assets/graphv1.png')} style={{width:1.25*size,height:1.25*size}}/></View>}}/>
        <TabNavigator.Screen name="UserProfile" component={UserProfileScreen} options={{tabBarLabelStyle:{display: 'none'},tabBarIcon:({focused,color,size})=><View style={focused?{width:'65%',height:1.5*size,alignItems:'center',justifyContent:'center',borderTopColor:'#5befe1',marginTop:-15,paddingTop:10,borderWidth:3}:{}}><Image source={require('../assets/profile.png')} style={{width:1.5*size,height:1.25*size}}/></View>}}/>
    </TabNavigator.Navigator>
    );
}

export default Tabs;