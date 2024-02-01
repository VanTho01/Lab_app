import React, {useState}from "react";
import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BleManager } from 'react-native-ble-plx';

var listDevice = []
var Status = []

function start_scan() {
    const manager = new BleManager()
    manager.startDeviceScan(null, null, listener).then(() => {
        if (device) {
            listDevice = device
        } else {
            listDevice.push('0')
        }
    })
    
}
function stop_scan() {
    const manager = new BleManager()
    manager.stopDeviceScan()
}
function Bluetooth({navigation}) {
    var Tenlop = ['FE6048', 'FE6017', 'FE6058']
    
    return (
        <View
            style = {{
                flex: 1,
                backgroundColor: 'yellow',
            }}
        >
               <View
                    style = {{
                        flex: 1,
                        backgroundColor: 'white',
                        flexDirection: 'row',                        
                        borderBottomWidth: 2,
                    }}
               >
                    <View
                        style = {{
                            flex: 1.5,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center',
                                justifyContent: 'center',
                                
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen1/icon_return.png')}
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
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style = {{
                                fontSize: 25,
                                fontWeight: 'bold',
                                borderBottomWidth: 2,
                                color: 'black'
                            }}
                        >
                            Điểm danh offline
                        </Text>
                    </View>
                    <View
                        style = {{
                            flex: 1.5,
                        }}
                    >

                    </View>
               </View>
               <View
                    style = {{
                        flex: 7,
                        backgroundColor: 'white'
                    }}
               >
                    <View
                        style = {{
                            flex: 1,
                            backgroundColor: 'purple',
                            borderBottomWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={start_scan}
                        >
                            <Image
                                source={require('../../icons/icon_homescreen1/icon_start.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 1,
                            backgroundColor: 'purple',
                            borderBottomWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress = {stop_scan}
                        >
                            <Image
                                source={require('../../icons/icon_homescreen1/icon_end.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style = {{
                                fontSize: 30,
                                fontWeigth: 'bold',
                            }}
                        >
                            
                        </Text>
                    </View>
               </View>
               <View style = {{flex: 1.5}}/>
        </View>
    )
}
export default Bluetooth;