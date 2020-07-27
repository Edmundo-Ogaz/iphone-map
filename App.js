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

import MapView, { Marker, Callout } from 'react-native-maps';
import CustomCalloutView from './Components/custom.text';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      markers: [
        {
          title: 'Albergue',
          description: 'José Miguel Carrera 433, Buin, Región Metropolitana, Chile',
          coordinates: {
            latitude: -33.6583116,
            longitude: -70.92635709999999
          }
        },
        {
          title: 'Albergue',
          description: 'Galo González 1523, Cerro Navia, Región Metropolitana, Chile',
          coordinates: {
            latitude: -33.6723348,
            longitude: -70.9253267
          }
        }
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -33.6583116,
            longitude: -70.92635709999999,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {this.state.markers.map(marker => (
          <Marker
            key={marker.coordinates.latitude}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          >
            <Callout>
                <CustomCalloutView 
                  name={'This is some custom text'}
                  address={marker.description}
                  institution={'This is some custom text'}
                  hours={'This is some custom text'}
                  places={'This is some custom text'}
                />
            </Callout>
          </Marker>
        ))}
        </MapView>
        
      </View>
    );
  }
}
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
