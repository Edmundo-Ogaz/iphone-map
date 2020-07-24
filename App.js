/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      markers: [{
        title: 'Unicentro',
        description: 'description',
        coordinates: {
          latitude: 37.78825,
          longitude: -122.4324
        }
      }]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {this.state.markers.map(marker => (
          <Marker
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          />
        ))}
        </MapView>
        
      </View>
    );
  }
}
