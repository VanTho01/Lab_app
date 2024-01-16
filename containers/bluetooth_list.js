import React from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";
import Layout from "../components/bluetooth_list_layout"; 
import Empty from "../components/empty";
import Toggle from "../components/toggle";
import Subtitle from "../components/subtitle";
import BluetoothSerial from "react-native-bluetooth-serial-next";
import Device from "../components/device";

function BluetoothList(props) {
    const list = [
        {name: 'nguyen van tho', key: '1'},
        {name: 'nguyen van tam', key: '2'}
    ];
    const renderEmpty = () => <Empty text = "no device"/>
    const renderItem = ({item}) => {
        return <Device iconLeft ={require({.../icons/icon_laptop.png})}
                       iconnRight = {require({.../icons/icon_setting.png})}/>
    }
    return(
        <Layout title = 'Bluetooth'>
            <Toggle/>
            <Subtitle title = 'List of device'/>
            <FlatList
                data={list}
                ListEmptyComponent={renderEmpty}
                renderItem={({item}) => <Text style = {{fontSize: 20}}>{item.name}</Text>}
            />
        </Layout>
    )
};


export default BluetoothList
