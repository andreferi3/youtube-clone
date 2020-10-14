import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


function Header(props) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={styles.image}
                    source={require("../../assets/logo/1.png")} />
                <View style={{ paddingLeft: 3 }}>
                    <Text style={{ fontSize: 14, color: "white" }}>YOUTUBE</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Text style={{ paddingRight: 20, color: "white" }}>search</Text>
                <Image
                    style={styles.imageAvatar}
                    source={require("../../assets/avatar/2.jpg")} />
            </View>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2b2b2b",
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    image: {
        width: 35,
        height: 35
    },
    imageAvatar: {
        width: 25,
        height: 25,
        borderRadius: 50
    }
})