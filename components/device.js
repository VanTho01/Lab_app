import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

function Device (props) {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
            <View style={styles.wrapperLeft}>
                <Image style={styles.iconLeft} source={props.iconLeft} />
            </View>
            <View style={styles.wrapperName}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <Image style={styles.iconRight} source={props.iconRight}/> 
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20, 
        paddingVertical:25,
        backgroundColor: '#f5fcff'
    },
    title:{
        marginLeft:10,
        fontSize:20,
        fontWeight: 'bold'
    }
})

export default Device;