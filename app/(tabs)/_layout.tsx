import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import 'react-native-reanimated';
// import TabBarIcon from '@expo/vector-icons/tabbaricon';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#705AFD',
      tabBarInactiveTintColor: '#B6B6B6',
      tabBarStyle: {
        backgroundColor: '#F9F9F9',
        borderTopColor: "#F9F9F9",
        shadowColor: "none",
        height: 60,
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
        borderTopWidth: 0,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bike"
        options={{
          title: 'Bikes',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="motorbike" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Riding Groups',
          tabBarIcon: ({ color }) => <Feather name="users" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
