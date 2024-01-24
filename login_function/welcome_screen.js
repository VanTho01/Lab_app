import React , {useState} from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buttons from "../practice/baitap1";
import Touchab from "../practice/baitap2";

function Welcome ({navigation}) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [getStatusPass, setStatusPass] = React.useState(true)

    return (
        <ImageBackground 
            source = {require('../icons/back_ground_Welcome.jpg')}
            resizeMode="cover"
            style = {{
                alignItems: 'center',
                flex: 1,
                paddingTop: 70
            }}
        >
            <View
                style = {{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderRadius: 100,
                    height: 150,
                    width: 150,
                    alignItems: 'center'
                }}
            >
                <Image 
                    source={require('../icons/user_image.png')}
                    style = {{
                        width: 130,
                        height: 130,
                        marginVertical: 10, 
                        borderRadius: 50,
                    }}
                >
                </Image>
            </View>
            <Text style = {{
                height: 50
            }}/>
            <View
                style = {{
                    alignItems: 'left',
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={require('../icons/icon_user.png')}
                    style = {{
                        height: 45,
                        width: 45,
                        
                    }}
                />
                <TextInput
                    onChangeText = {onChangeText}
                    value = {text}
                    style = {{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderRadius: 10,
                        paddingLeft: 15
                    }}
                />
            </View>
            <Text/>
            <View
                style = {{
                    alignItems: 'left',
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={require('../icons/icon_pass.png')}
                    style = {{
                        height: 45,
                        width: 45,
        
                    }}
                />
                <TextInput
                    onChangeText = {onChangeNumber}
                    value = {number}
                    keyboardType="numeric"
                    style = {{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderRadius: 10,
                        paddingLeft: 15
                    }}
                    secureTextEntry = {getStatusPass? true: false}
                />
                <TouchableOpacity
                    style = {{
                        alignItems: 'center',
                        position: 'absolute',
                        justifyContent: 'center',
                        marginTop: 5,
                        marginLeft: 300
                    }}
                    onPress={() => {setStatusPass(!getStatusPass)}}
                >
                    {getStatusPass?
                        <Image
                            source={require('../icons/icon_see_pass.png')}
                            style = {{
                                height: 40,
                                width: 40,
                            }}
                        />:<Image
                            source={require('../icons/icon_notsee_pass.png')}
                            style = {{
                                height: 40,
                                width: 40,
                            }}
                        />
                    }
                </TouchableOpacity>
            </View>  
            <Text/>
            <ImageBackground
                source={require('../icons/back_ground_signin.jpg')}
                resizeMode="cover"
            >
                <TouchableOpacity 
                    style = {{
                        width: 200,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress = {() => {navigation.navigate('Touchab')}}
                >
                    <Text style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Đăng nhập</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Text/>
            <ImageBackground
                source={require('../icons/back_ground_signup.jpg')}
                resizeMode="cover"
            >
                <TouchableOpacity style = {{
                    width: 200,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style = {{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ImageBackground>
    )
};
export default Welcome;