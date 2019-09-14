//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import MapView , {Marker} from 'react-native-maps';

// create a component
class Maps extends Component {

  

    render() {
        const paramsMap = this.props.navigation.state.params
        console.log(paramsMap)
        return (
            <View style={styles.container}>
               <MapView style={styles.map} initialRegion={{latitude:27.7215, longitude:85.32, latitudeDelta:0.09, longitudeDelta:0.0921 }}  >
                   <Marker coordinate={{latitude:paramsMap.mapLocation[0], longitude:paramsMap.mapLocation[1] }} title={paramsMap.eventName} />
               </MapView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map:{
        ...StyleSheet.absoluteFillObject
    }
});

//make this component available to the app
export default Maps;
