import React from 'react';
import { styles } from "../../styles.js";
import MapView from "react-native-maps";
import { View } from 'react-native';

const Map = ({ navigation }) => {

    return (
        <View style={styles.generalContainer}>
            <MapView style={styles.mapContainer}>

            </MapView>
        </View>
    )
}

export default Map;