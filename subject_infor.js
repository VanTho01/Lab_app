import React , {useState} from "react";
import { Image, Text, View, TouchableOpacity, VirtualizedList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Semester1 from "./semester/semester1";
import Semester2 from "./semester/semester2";
import Semester3 from "./semester/semester3";
import Semester4 from "./semester/semester4";
import Semester5 from "./semester/semester5";
import Semester6 from "./semester/semester6";
import Semester7 from "./semester/semester7";
import Semester8 from "./semester/semester8";

function Subject_in4({navigation}) {
    const [count, setCount] = useState(0);
    const onPress1 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 1)
    };
    const onPress2 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 2)
    };
    const onPress3 = () => {
        setCount(prevCount => prevCount + 3)
    };
    const onPress4 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 4)
    };
    const onPress5 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 5)
    };
    const onPress6 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 6)
    };
    const onPress7 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 7)
    };
    const onPress8 = () => {
        setCount(0)
        setCount(prevCount => prevCount + 8)
    };
    const [semester, setSemester] = React.useState('')

    const getItem = (_data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Kỳ ${index + 1}`,
    });

    const getItemCount = _data => 8;

    const Item = ({title}) => (
        <View>
            <TouchableOpacity 
                style={{
                    backgroundColor: 'white',
                    height: 50,
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    marginHorizontal: 5,
                }}
                onPress = {() => {
                    if (title == 'Kỳ 1') {
                        onPress1()
                    } else if (title == 'Kỳ 2') {
                        onPress2()
                    } else if (title == 'Kỳ 3') {
                        onPress3()
                    } else if (title == 'Kỳ 4') {
                        onPress4()
                    } else if (title == 'Kỳ 5') {
                        onPress5()
                    } else if (title == 'Kỳ 6') {
                        onPress6()
                    } else if (title == 'Kỳ 7') {
                        onPress7()
                    } else {
                        onPress8()
                    }
                }}

            >
                <Text 
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >{title}</Text>
            </TouchableOpacity>
        </View>
    );
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
                    flex: 1,
                    backgroundColor: 'purple',
                    paddingTop: 15
                }}
            >
                <VirtualizedList
                    initialNumToRender={4}
                    renderItem={({item}) => <Item title={item.title}/>}
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                    horizontal = {true}
                />
            </View>
            <View 
                style = {{
                    flex: 8,
                    
                }}
            >
                {count == 1? <Semester1/>:
                    count == 2? <Semester2/>:
                        count == 3? <Semester3/>:
                            count == 4? <Semester4/>:
                                count == 5? <Semester5/>:
                                    count == 6? <Semester6/>:
                                        count == 7? <Semester7/>:<Semester8/>}
            </View>
        </View>
    )
}

export default Subject_in4;