import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Baitap3 from "../../practice/baitap3";
function Subject_in4({navigation}) {
    return (
        <View
            style = {{
                flex: 1,

            }}
        >
            <View
                style = {{
                    flex: 1,
                    backgroundColor: 'white'
                }}
            >
                <View
                    style = {{
                        flex: 1,
                        flexDirection: 'row',
                        borderBottomWidth: 2
                    }}
                >
                    
                    <View
                        style = {{
                            flex: 1.5,
                            
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center',
                                backgroundColor: 'white',
                                
                            }}
                            onPress={() => {navigation.navigate('HomeScreen2')}}
                        >
                            <Image 
                                source = {require('../../icons/icon_homescreen2/icon_return.png')}
                                style = {{
                                    height: 60, 
                                    width: 60,
                                    
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 7,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style = {{
                                fontSize: 25,
                                fontWeight: 'bold',
                                borderBottomWidth: 2
                            }}
                        >
                            Thông tin học phần
                        </Text>
                    </View>
                    <View style = {{flex: 1.5,}}/>
                </View>
            </View>
            <View
                style = {{
                    flex: 9,
                    backgroundColor: 'purple '
                }}
            >
                <Baitap3 number = '9'/>
            </View>
        </View>
    )
}

export default Subject_in4;