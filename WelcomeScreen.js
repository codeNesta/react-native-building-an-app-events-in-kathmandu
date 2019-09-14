//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
                <Button title="Enter" onPress={() => this.props.navigation.navigate("Dashboard")} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default Welcome;
