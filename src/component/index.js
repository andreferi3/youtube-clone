import React from 'react'
import { View, StyleSheet, ToastAndroid, Text, Image, ScrollView } from "react-native"

function Index() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require("../assets/jumbotron/1.jpg")} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginVertical: 17, justifyContent: "space-between", marginHorizontal: 17 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.avatar}
                        source={require("../assets/avatar/1.jpg")} />
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontWeight: "800", color: "white", fontSize: 14 }}>Songs that will bring you back to summer 2016</Text>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ color: "#969696", fontSize: 13 }}>radityia dika .</Text>
                        <Text style={{ color: "#969696", fontSize: 13, marginHorizontal: 5 }}>1M views .</Text>
                        <Text style={{ color: "#969696", fontSize: 13 }}>8 Monts ago</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 13 }}>icon</Text>
                </View>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={require("../assets/jumbotron/1.jpg")} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginVertical: 17, justifyContent: "space-between", marginHorizontal: 17 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.avatar}
                        source={require("../assets/avatar/1.jpg")} />
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontWeight: "800", color: "white", fontSize: 14 }}>Songs that will bring you back to summer 2016</Text>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ color: "#969696", fontSize: 13 }}>radityia dika .</Text>
                        <Text style={{ color: "#969696", fontSize: 13, marginHorizontal: 5 }}>1M views .</Text>
                        <Text style={{ color: "#969696", fontSize: 13 }}>8 Monts ago</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 13 }}>icon</Text>
                </View>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={require("../assets/jumbotron/1.jpg")} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", narginVertical: 17, justifyContent: "space-between", marginHorizontal: 17 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.avatar}
                        source={require("../assets/avatar/1.jpg")} />
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={{ fontWeight: "800", color: "white", fontSize: 14 }}>Songs that will bring you back to summer 2016</Text>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ color: "#969696", fontSize: 13 }}>radityia dika .</Text>
                        <Text style={{ color: "#969696", fontSize: 13, marginHorizontal: 5 }}>1M views .</Text>
                        <Text style={{ color: "#969696", fontSize: 13 }}>8 Monts ago</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 13 }}>icon</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b2b2b"
    },
    image: {
        width: "100%",
        height: 200
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50
    }
})
export default Index
