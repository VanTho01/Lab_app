/* danh cho giang vien */
import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, SectionList, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen2({navigation}) {
    
    var Data = [
        {
            title: 'Thiết kế hệ thống nhúng',
            data: ['Buổi sáng - 1, 2, 3, 4', '406 - A9', 'Lý thuyết'],
        },
        {
            title: 'Thiết kế ứng dụng trên máy tính nhúng',
            data: ['Buổi chiều - 7, 8, 9, 10', '507 - A9', 'Lý thuyết'],
        },
        {
            title: 'Thiết kế ứng dụng trên thiết bị di động',
            data: ['Buổi tối - 11, 12, 13, 14', '408 - A9', 'Lý thuyết'],
        },
        {
            title: 'Thiết kế phần mềm mã nguồn mở',
            data: ['Buổi tối - 11, 12, 13, 14', '408 - A9', 'Lý thuyết'],
        },
    ]
    var Date = ['thứ 6, 26/01/2024']
    
    return (
        <View
            style = {{
                flex: 100, 
            }}
        >
            <View
                style = {{
                    flex: 10,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    alignItems: 'center',
                    borderWidth: 2
                }}
            >
                <View
                    style = {{
                        flex: 8,
                    }}
                >
                    <View
                        style = {{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style = {{
                                fontWeight: 'bold',
                                fontSize: 20,
                                flex: 80,
                                color: 'black',
                                marginLeft: 5
                            }}
                        >
                            Xin chào! NguyenVanTho
                        </Text>
                    </View>
                    <View
                        style = {{
                            flex: 1,
                            justifyContent: 'center',
                            paddingLeft: 5
                        }}
                    >
                        <Text
                            style = {{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                        >
                            {Date[0]}
                        </Text>
                    </View>
                </View>
                <View
                    style = {{
                        flex: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style = {{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            
                        }}
                    >
                        <Image 
                            source = {require('../../icons/icon_homescreen1/icon_pI4.png')}
                            style = {{
                                height: 60, 
                                width: 60,
                                
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style = {{
                    flex: 30,
                    
                }}
            >
                <View
                    style = {{
                        flex: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}
                >
                    <Text
                        style = {{
                            fontWeight: 'bold',
                            fontSize: 25,
                            borderBottomWidth: 2
                        }}
                    >
                        Lịch hôm nay
                    </Text>
                </View>
                <View
                    style = {{
                        flex: 70,
                        marginHorizontal: 6,
                        marginVertical: 3,
                        borderRadius:10,
                        borderWidth: 2,
                        justifyContent: 'center'
                    }}
                >
                    {Data.length === 0? 
                        <Image
                            source = {require('../../icons/icon_homescreen1/icon_dayoff.png')}
                            style = {{
                                height: 100,
                                width: 100,
                                marginHorizontal: 130
                            }}
                        />:
                        <SectionList
                            sections={Data}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({item}) => (
                                <View 
                                    style = {{
                                        backgroundColor: '#f9c2ff',
                                        alignItems: 'left',
                                        marginVertical: 2,
                                        marginHorizontal: 4,
                                        borderRadius: 3
                                    }}
                                >
                                <Text 
                                    style={{
                                        fontSize: 14,
                                        marginLeft: 10
                                    }}
                                >{item}</Text>
                                </View>
                            )}
                            renderSectionHeader={({section: {title}}) => (
                                <Text 
                                    style={{
                                        fontSize: 16,
                                        backgroundColor: '#fff',
                                        borderRadius: 5,
                                        fontWeight: 'bold',
                                        marginTop: 6,
                                        marginHorizontal: 4,
                                        borderBottomWidth: 1
                                    }}
                                >{title}</Text>
                            )}
                        />
                    }
                </View>
            </View>
            <View
                style = {{
                    flex: 50,
                }}
            >
                <View
                    style = {{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style = {{
                            fontSize: 25,
                            fontWeight: 'bold',
                            borderBottomWidth: 2
                        }}
                    >Tiện ích</Text>
                </View>
                <View
                    style = {{
                        flex: 3,
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                            borderRightWidth: 2
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen1/icon_class.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Thông tin</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >lớp học phần</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                            borderRightWidth: 2
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen2/icon_theory.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Thời KB</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >lý thuyết</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen2/icon_result.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Kết quả</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >học phần</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style = {{
                        flex: 3,
                        flexDirection: 'row',
                        
                    }}
                >
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 5,
                            borderTopWidth: 2
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen2/icon_recuitment.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Thông tin</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >tuyển dụng</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 5,
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen2/icon_excular.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Hoạt động</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >ngoại khóa</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 5,
                            borderTopWidth: 2
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen1/icon_interact.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Trao đổi</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >thông tin</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style = {{
                        flex: 3,
                        flexDirection: 'row',
                    }}
                >
                    <View style = {{flex: 1, borderTopWidth: 2}}/>
                    <View
                        style = {{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 5,
                            borderRightWidth: 2,
                            borderLeftWidth:2
                        }}
                    >
                        <TouchableOpacity
                            style = {{
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source = {require('../../icons/icon_homescreen2/icon_practical.png')}
                                style = {{
                                    height: 60,
                                    width: 60,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >Thời KB</Text>
                            <Text
                                style = {{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >thực hành</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flex: 1, borderTopWidth: 2}}/>
                </View>
            </View>
            <View
                style = {{
                    flex: 10,
                    flexDirection: 'row',
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    borderWidth: 2
                }}
            >
                <View
                    style = {{
                        flex: 3,
                        borderBottomLeftRadius: 10,
                        
                    }}
                >
                    <TouchableOpacity
                        style = {{
                            alignItems: 'center',
                            marginTop: 1
                        }}
                    >
                        <Image
                            source={require('../../icons/icon_homescreen1/icon_home.png')}
                            style = {{
                                height: 50,
                                width: 50
                            }}
                        />
                        <Text
                            style = {{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}
                        >Home</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style = {{
                        flex: 3,
                    }}
                >
                    <TouchableOpacity
                        style = {{
                            alignItems: 'center',
                            marginTop: 1
                        }}
                    >
                        <Image
                            source={require('../../icons/icon_homescreen1/icon_signup.png')}
                            style = {{
                                height: 50,
                                width: 50
                            }}
                        />
                        <Text
                            style = {{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}
                        >Đăng ký LTH</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style = {{
                        flex: 3,
                        borderBottomRightRadius: 10,
                    }}
                >
                    <TouchableOpacity
                        style = {{
                            alignItems: 'center',
                            marginTop: 1
                        }}
                        onPress={() => {navigation.navigate('Account2')}}
                    >
                        <Image
                            source={require('../../icons/icon_homescreen1/icon_person_in4.png')}
                            style = {{
                                height: 50,
                                width: 50
                            }}
                        />
                        <Text
                            style = {{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black'
                            }}
                        >Tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default HomeScreen2;