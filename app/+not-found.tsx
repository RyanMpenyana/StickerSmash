import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Link, Stack } from 'expo-router'

export default function NotFoundPage() {
    return (
        <>
        <Stack.Screen options={{title : 'Oops not found!'}}/>
        <View style={styles.container}>
            <Link href="/" style={styles.text}>
                Page not found, Go back home.
            </Link>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#25292e',
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    text : {
        color : '#fff'
    }
})