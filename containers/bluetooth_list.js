import React, { useState, useEffect } from "react";
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
    const [List, setList] = useState([])
    const [deviceEnable, setdeviceEnable] = useState (false)
    const renderEmpty = () => <Empty text = "no device"/>;
    const renderItem = ({item}) => {
        return <Device {...item} iconLeft ={require('../../icons/icon_laptop.png')}
                       iconRight = {require('../../icons/icon_setting.png')}/>
    };

    useEffect(()=>{
        async function init(){
            const enable = await BluetoothSerial.requestEnable(); 
            const List = await BluetoothSerial.list();
            setList(List);
            setdeviceEnable(enable);
            console.log(List);
        }
        init();

        return() => {
            async function remove() {
                console.log('Terminal scanner');
                BluetoothSerial.stopScanning();
            }
            remove();
        }      
    }, [])

    const enableBluetooth = async () => { 
        try {
            await BluetoothSerial.requestEnable();
            const List = await BluetoothSerial.list(); 
            await BluetoothSerial.stopScanning();
            setdeviceEnable(true); 
            setList (List); 
        } catch (error) { 
            console.log(error); 
        }
    };
    const disableBluetooth = async () => {
        try {
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setdeviceEnable(false); 
            setList([]);
            } catch (error) { 
                console.log(error);
        }
    };
    const toggleBluetooth = value => {
        if (value) {
            return enableBluetooth();
        }
        disableBluetooth();
    };
    return(
        <Layout title = 'Bluetooth'>
            <Toggle value = {deviceEnable} onValueChange = {toggleBluetooth}/>
            <Subtitle title = 'List of device'/>
            <FlatList
                data={List}
                ListEmptyComponent={renderEmpty}
                renderItem={renderItem}
            />
        </Layout>
    )
};


export default BluetoothList