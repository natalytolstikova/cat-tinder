import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatsScreen from '../screens/CatsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import UserScreen from '../screens/UserScreen';

import Svg, { G, Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();

const CatsSvg = ({ color, size }) => {
    return (
        <View style={{ padding: 20 }}>
            <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M10.746 10.842c2.93.96 6.267 4.681 3.387 6.998-1.466 1.18-2.597.152-4.015-.427-1.736-.709-2.719.468-4.437.275-1.145-.129-2.181-.567-2.656-1.639-1.367-3.094 3.87-5.403 6.366-5.438a4.22 4.22 0 011.355.231zM15.67 12.264c.81.186 1.722.056 2.36-.477.639-.533.926-1.501.554-2.245-.635-1.27-2.1-.817-2.87-.007-.364.38-.678.843-.733 1.367-.056.523.689 1.362.689 1.362zM15.808 5.545c.138-.691.206-1.43-.123-2.08-.33-.65-1.17-1.165-1.965-.994-.692.149-1.111.736-1.4 1.294-.289.56-.52 1.14-.69 1.735-.186.647-.293 1.353.024 1.97 1.357 2.635 3.89-.603 4.154-1.925zM9.646 7.133c.865-1.08 1.179-2.461.838-3.693-.18-.657-.574-1.3-1.257-1.62C6.327.473 5.763 6.23 7.404 7.33c.718.481 2.242-.196 2.242-.196zM4.499 8.683c.709-.978.354-2.925-.368-3.813-.31-.383-.757-.708-1.25-.686-.691.03-1.168.71-1.404 1.36C.985 6.897 1.2 9.08 3.03 9.257c.703.068 1.176-.17 1.469-.574z"
                    fill={color}
                />
            </Svg>
        </View>
    );
};

const MessageSvg = ({ color, size }) => {
    return (
        <View style={{ padding: 20 }}>
            <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M17.5 9.583a6.983 6.983 0 01-.75 3.167 7.084 7.084 0 01-6.333 3.917 6.983 6.983 0 01-3.167-.75L2.5 17.5l1.583-4.75a6.983 6.983 0 01-.75-3.167A7.083 7.083 0 017.25 3.25a6.983 6.983 0 013.167-.75h.416A7.066 7.066 0 0117.5 9.167v.416z"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
};

const UserSvg = ({ color, size }) => {
    return (
        <View style={{ padding: 20 }}>
            <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M16.667 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H6.667a3.333 3.333 0 00-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1010 2.5a3.333 3.333 0 000 6.667z"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#EC537E',
                tabBarInactiveTintColor: '#434141',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    // width: 156,
                    height: 44,
                    paddingTop: 8,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: 120,

                    borderRadius: 36,
                    bottom: 28,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowRadius: 10,
                    shadowOpacity: 0.1,
                },
            })}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => <CatsSvg color={color} size={20} />,
                }}
                name="Cats"
                component={CatsScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => <MessageSvg color={color} size={20} />,
                }}
                name="Messages"
                component={MessagesScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => <UserSvg color={color} size={20} />,
                }}
                name="User"
                component={UserScreen}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
